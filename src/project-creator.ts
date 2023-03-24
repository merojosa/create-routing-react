import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import chalk from "chalk";

const copy = promisify(ncp);

async function copyTemplateFiles(targetDirectory: string) {
  const getProjectDir = () => {
    const currentFileUrl = import.meta.url;

    // On Windows for some reason new URL(currentFileUrl).pathname
    // adds a double "C:\" when path.resolve is used.
    if (process.platform === "win32") {
      return path.resolve(
        new URL(currentFileUrl).pathname.substring(
          new URL(currentFileUrl).pathname.indexOf("/") + 1
        ),
        "../../project-skeleton"
      );
    }

    return path.resolve(
      new URL(import.meta.url).pathname,
      "../../project-skeleton"
    );
  };

  const projectDir = getProjectDir();

  return copy(projectDir, targetDirectory, {
    clobber: false,
  }).catch((error) => console.error(error));
}

export async function createProject(targetDirectory: string) {
  console.log("Generating project...");
  await copyTemplateFiles(targetDirectory);
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}

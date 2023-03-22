import ncp from "ncp";
import path from "path";
import { promisify } from "util";

const copy = promisify(ncp);

async function copyTemplateFiles(targetDirectory) {
  const getProjectDir = () => {
    const currentFileUrl = import.meta.url;

    // On Windows, for some reason path.resolve adds an extra "C:\"
    if (process.platform === "win32") {
      return path.resolve(
        new URL(currentFileUrl).pathname.substring(
          new URL(currentFileUrl).pathname.indexOf("/") + 1
        ),
        "../../project-squeleton"
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

export async function createProject(targetDirectory) {
  console.log("Generating project...");
  await copyTemplateFiles(targetDirectory);

  console.log("Project ready");
  return true;
}

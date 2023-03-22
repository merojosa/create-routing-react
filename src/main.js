import ncp from "ncp";
import path from "path";
import { promisify } from "util";

const copy = promisify(ncp);

async function copyTemplateFiles(targetDirectory) {
  console.log("BREAKPOINT import.meta.url", import.meta.url);

  console.log(
    "BREAKPOINT new URL(import.meta.url).pathname",
    new URL(import.meta.url).pathname
  );
  const projectDir = path.resolve(
    new URL(import.meta.url).pathname,
    "../../project-skeleton"
  );

  console.log("BREAKPOINT projectDir", projectDir);

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

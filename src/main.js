import ncp from "ncp";
import path from "path";
import { promisify } from "util";

const copy = promisify(ncp);

async function copyTemplateFiles(targetDirectory) {
  const currentFileUrl = import.meta.url;

  const templateDir = path.resolve(
    new URL(currentFileUrl).pathname.substring(
      new URL(currentFileUrl).pathname.indexOf("/") + 1
    ),
    "../../project-squeleton"
  );

  return copy(templateDir, targetDirectory, {
    clobber: false,
  }).catch((error) => console.error(error));
}

export async function createProject(targetDirectory) {
  console.log("Copy project files");
  await copyTemplateFiles(targetDirectory);

  console.log("Project ready");
  return true;
}

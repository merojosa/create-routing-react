import { createProject } from "./main";

export async function cli(args) {
  const targetDirectory = args.slice(2).shift() || process.cwd();
  await createProject(targetDirectory);
}

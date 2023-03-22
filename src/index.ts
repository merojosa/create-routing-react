#!/usr/bin/env node

import { createProject } from "./project-creator";

async function cli(args: string[]) {
  const targetDirectory = args.slice(2).shift() || process.cwd();
  await createProject(targetDirectory);
}

const args = process.argv;
cli(args);

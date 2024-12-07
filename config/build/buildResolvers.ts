import { ResolveOptions } from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";

export function buildResolvers(paths: BuildPaths): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: { alias: "@" },
  };
}

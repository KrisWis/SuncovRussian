import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";
import path from "path"

export function buildResolvers(paths: BuildPaths): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: { "@": path.resolve(__dirname, "../../src") },
  };
}

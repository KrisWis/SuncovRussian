export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  src: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  publicURL: string;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
}

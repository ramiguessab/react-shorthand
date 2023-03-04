import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react", "@babel/preset-env"],
      babelHelpers: "bundled",
    }),
    nodeResolve(),
    terser(),
    external(),
  ],
};

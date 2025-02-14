import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser"; 

export default [
  {
    input: "./src/index.js",
    output: {
      file: "./dist/mod.browser.js",
      format: "es",
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: [
          [
            "@babel/preset-env"
          ],
        ],
        babelHelpers: "bundled",
      }),
      terser()
    ],
  },
];

import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel"; // or @rollup/plugin-typescript

export default defineConfig({
  input: "src/index.jsx", // input directory
  output: {
    dir: "dist",
    format: "esm",
    name: "cvdsam-counter-to-ui",
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"], // <--- Ensure these are included
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"], // For JSX
      extensions: [".js", ".jsx", ".ts", ".tsx"], // <--- Ensure these are included
    }),
  ],
});

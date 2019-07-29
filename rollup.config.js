import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/Utility.ts",
  output: {
    file: "dist/utility.js",
    format: "esm"
  },
  plugins: [typescript()]
};

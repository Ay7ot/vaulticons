import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Needed for ESM __dirname equivalent

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json to get main, module, and peerDependencies
const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const mainFile = packageJson.main;
const moduleFile = packageJson.module;
const typesFile = packageJson.types;

export default { // Use export default for ESM config
    input: "src/index.ts", // Entry point of the library
    output: [
        {
            file: mainFile,
            format: "cjs", // CommonJS format
            sourcemap: true,
        },
        {
            file: moduleFile,
            format: "esm", // ES Module format
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(), // Excludes peer dependencies from the bundle
        resolve(), // Helps Rollup find external modules
        commonjs(), // Converts CommonJS modules to ES6
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: false,
            rootDir: 'src',
            sourceMap: true,
            exclude: ["**/__tests__", "**/*.test.ts", "**/*.spec.ts"]
        }),
        svgr({ icon: true }), // Transforms SVGs into React components
        postcss(), // Handles CSS imports (optional but good practice)
    ],
    external: Object.keys(packageJson.peerDependencies || {}), // Ensure peer dependencies are treated as external
}; 
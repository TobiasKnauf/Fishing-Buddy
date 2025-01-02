import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // rules: {
  //   "no-unused-vars": "off",
  //   "@typescript-eslint/no-unused-vars": "error"
  // },
  // settings: {
  //   'import/resolver': {
  //     'node': {
  //       'extensions': ['.js', '.jsx', '.ts', '.tsx']
  //     }
  //   }
  // }
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // compat
];

export default eslintConfig;

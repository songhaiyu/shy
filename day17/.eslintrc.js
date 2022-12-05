module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    // "space-before-function-paren": 3 //最少三
    // "space-before-function-paren": [
    // 	"error",
    // 	"never",
    // 	{
    // 		anonymous: "always",
    // 		named: "always",
    // 		asyncArrow: "always"
    // 	}
    // ]
  }
}

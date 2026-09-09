const globals = require("globals");

module.exports = [
    {
        ignores: ["coverage/**"]
    },

    {
        files: ["**/*.js"],

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.jest
            }
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];
const presets = ["@babel/env", "@babel/react"]
const alias = {
    '@components': "./src/components",
    '@utils': "./src/utils",
    '@config': "./src/config"
}
const plugins = [
    "@babel/proposal-object-rest-spread",
    ["babel-plugin-module-resolver", {
        root: ["./src"],
        alias
    }]
]
const ignore =  ["**/*.test.js"]

if(process.env["BABEL_ENV"] === "production") {
    plugins.push(["react-remove-properties", {
        "properties": ["data-test"]
    }])
    presets.push("minify")
}

module.exports = {
    presets,
    plugins,
    ignore
}

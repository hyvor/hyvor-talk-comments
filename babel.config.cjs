module.exports = {
    "presets": [
        ["@babel/preset-env", {"targets": {"node": "current"}}],
        [
            "@babel/preset-react",
            {
                "runtime": "automatic",
                "importSource": "preact"
            }
        ],
        "@babel/preset-typescript",
    ],
    "env": {
        "test": {
            "plugins": [
                "@babel/plugin-transform-modules-commonjs"
            ]
        }
    }
}
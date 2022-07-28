export default {

    extensions: {
        "ts": "module",
        "tsx": "module"
    },
    nodeArguments: [
        "--loader=ts-node/esm",
        "--experimental-specifier-resolution=node"
    ],

    files: [
        "./**/*.test.ts",
        "./**/*.test.tsx"
    ],

    require: [
        "./tests/setup-browser-env.ts"
    ]

}
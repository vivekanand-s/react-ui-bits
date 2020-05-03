module.exports = {
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "moduleDirectories": [
        "src",
        "node_modules",
    ],
    "setupFiles": [
        "./src/setupTests.js"
    ],
    "testPathIgnorePatterns": [
        "/node_modules",
        ".docz",
        "/lib"
    ]
}
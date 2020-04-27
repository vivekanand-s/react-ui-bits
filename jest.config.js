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
        ".docz"
    ],
    "moduleNameMapper": {
        "^@utils(.*)$": "<rootDir>/src/utils$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@config(.*)$": "<rootDir>/src/config$1"
    }
}
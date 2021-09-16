module.exports = {
    "roots": [
        "<rootDir>/tests"
    ],
    "testMatch": [
        "**/tests/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },

    "resetMocks": false,
    "setupFiles": ["jest-localstorage-mock"],


    "preset": "jest-puppeteer"


}
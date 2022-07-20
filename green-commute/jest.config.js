/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/stories/*.tsx',
        '!src/serviceWorker.ts',
        '!src/App.tsx',
        '!src/reportWebVitals.ts',
        '!src/setupTests.ts',
        '!src/index.tsx',
    ],
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    coveragePathIgnorePatterns: ['./src/*/*.types.{ts,tsx}', './src/*/*.stories.tsx'],
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
    coverageThreshold: {
        global: {
            statements: 95,
            branches: 95,
            lines: 95,
            functions: 95,
        },
    },
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
    automock: false,
    modulePaths: [],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    },
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        "src/(.*)$": "<rootDir>/src/$1",
        //fix for svg loading issue
        '^.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js"
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
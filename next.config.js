/** @type {import('next').NextConfig} */

const path = require("path")

const nextConfig = {

    webpack: (config) => {
        const reactPaths = {
            react: path.join(__dirname, "node_modules/react"),
            "react-dom": path.join(__dirname, "node_modules/react-dom"),
        };
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                ...reactPaths,
            },
        };
        return config;
    },
};

module.exports = nextConfig

module.exports = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
}
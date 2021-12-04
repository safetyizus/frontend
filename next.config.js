const path = require("path");

const resolve = (subpath) => path.resolve(__dirname, subpath);

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["images.prismic.io"],
    },
    webpack: (config) => {
        // Set Aliases
        config.resolve.alias.components = resolve("components/");
        config.resolve.alias.common = resolve("components/common");
        config.resolve.alias.elements = resolve("components/elements");
        config.resolve.alias.sections = resolve("components/sections");
        config.resolve.alias.wrappers = resolve("components/wrappers");
        config.resolve.alias.icons = resolve("components/icons");
        config.resolve.alias.features = resolve("features/");
        config.resolve.alias.helpers = resolve("helpers/");
        config.resolve.alias.hooks = resolve("hooks/");
        config.resolve.alias.store = resolve("store/");

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

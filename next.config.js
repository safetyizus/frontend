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
        config.resolve.alias.contexts = resolve("contexts/");
        config.resolve.alias.helpers = resolve("helpers/");
        config.resolve.alias.hooks = resolve("hooks/");
        config.resolve.alias.store = resolve("store/");
        config.resolve.alias.styles = resolve("components/styles/");
        config.resolve.alias.hocs = resolve("components/hocs/");
        config.resolve.alias.forms = resolve("components/forms/");
        config.resolve.alias.navigation = resolve("features/navigation/");

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

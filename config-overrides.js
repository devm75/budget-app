// config-overrides.js
const path = require('path');

module.exports = {
    // New config, e.g. config.plugins.push...

    webpack: function (config, env) {
        // Add your Webpack alias configuration here
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, 'src/components/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            "@typeDefs": path.resolve(__dirname, 'src/typeDefs/')
        };
        return config;
    }
}
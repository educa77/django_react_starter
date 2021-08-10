const mix = require("laravel-mix");
const config = require("./webpack.config");

// mix.extract();
mix.sourceMaps();

mix.webpackConfig(config).js("src/index.js", "static/frontend/main.js").react();

mix.sass("src/styles/homepage.scss", "static/css/index.css");
mix.sass("src/styles/index.scss", "static/css/index.css");

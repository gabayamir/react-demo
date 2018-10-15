(function () {

    const gulp = require('gulp');
    const webpack = require('webpack');
    const StylableWebpackPlugin = require('@stylable/webpack-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    gulp.task('build', async function () {
        const compiler = webpack({
            entry: "./src/index.tsx",
            output: {
                filename: "bundle.js",
                path: __dirname + "/dist"
            },

            // Enable sourcemaps for debugging webpack's output.
            devtool: "source-map",

            resolve: {
                // Add '.ts' and '.tsx' as resolvable extensions.
                extensions: [".ts", ".tsx", ".js", ".json"]
            },

            mode: 'development',

            module: {
                rules: [
                    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                    { test: /\.tsx?$/, loader: "@ts-tools/webpack-loader" },

                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
                ]
            },

            // When importing a module whose path matches one of the following, just
            // assume a corresponding global variable exists and use that instead.
            // This is important because it allows us to avoid bundling all of our
            // dependencies, which allows browsers to cache those libraries between builds.
            externals: {
                "react": "React",
                "react-dom": "ReactDOM"
            },

            plugins: [new StylableWebpackPlugin()]
        });

        const watcher = compiler.watch({
            aggregateTimeout: 300,
            poll: undefined
        }, (err, stats) => {
            // Print watch/build result here...
            console.log("------------------------------------ ERRORS START");
            console.log(stats.compilation.errors);
            console.log("------------------------------------ ERRORS FINISH");
        });

        console.log("done");
    });

})();
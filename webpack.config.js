const path = require('path');

module.exports = {
    mode: 'production',
    entry: './gui/src/index.js',
    module: {
        rules: [
            {
                test: /gui\/src\/+.js/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env', {
                                targets: 'defaults',
                                useBuildIns: 'entry'
                            }
                        ],
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    },
    output: {
        path:  path.resolve('gui/dist/'),
        filename: 'bundle.js'
    }
}
const path = require('path')

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions
}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, '../src'), 'node_modules'],
            alias: {
                '@components': path.resolve(__dirname, '../src/components'),
                '@utils': path.resolve(__dirname, '../src/utils'),
                '@config': path.resolve(__dirname, '../src/config')
            }
        }
    })
}
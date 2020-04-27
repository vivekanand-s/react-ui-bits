module.exports = function(api) {
    api.cache(true)
    
    return {
        env: {
            development: {
                plugins: ["@babel/proposal-object-rest-spread"]
            },
            production: {
                plugins: [
                    "@babel/proposal-object-rest-spread",
                    ["react-remove-properties", {
                        "properties": ["data-test"]
                    }]
                ]
            }
        },
        presets: ["@babel/env","@babel/react"]
    }
}
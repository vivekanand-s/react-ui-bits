module.exports = function(api) {
    api.cache(true)
    
    return {
        presets: ["@babel/env","@babel/react"],
        env: {
            development: {
                plugins: ["@babel/proposal-object-rest-spread"]
            },
            production: {
                plugins: ["@babel/proposal-object-rest-spread", "react-remove-properties"]
            }
        }
    }
}
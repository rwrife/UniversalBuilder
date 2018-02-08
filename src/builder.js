function builder(Type) {
    var builder = {
        props: {},
        build: () => {            
            var type = new Type();
            for(key in builder.props) {
                if(typeof type[key] !== 'undefined') {
                    type[key] = builder.props[key];
                }
            }
            return type;
        },
        from: (fromType) => {
            for(key in fromType) {
                if(typeof fromType[key] !== 'function') {
                    builder.props[key] = fromType[key];
                }
            }
            return builder;
        }
    };

    for(Key in Type()) {
        let key = Key;
        let type = (typeof Type()[Key]);
        if(type !== "function") {
            let method = 'with'+key.charAt(0).toUpperCase()+key.slice(1);            
            builder[method] = (val) => {
                if(typeof val === type) {
                    builder.props[key] = val;
                } else {
                    console.log(`Bad type for ${method}, it takes a ${type}.`)
                }
                return builder;
            };          
        }
    }

    return builder;
}

module.exports = builder;

module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    }
    
    if (currency < 0) {
        return {};
    }
    
    let result = {};

    const currencyValue = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1,
    };

    while(currency !== 0) {
        for (let key in currencyValue) {
            let amount = 0;
            while(currency >= currencyValue[key]) {
                currency -= currencyValue[key];
                amount += 1;
            }
            if (amount !== 0) {
                result[key] = amount;
            }
        }
    }
    return result;
}

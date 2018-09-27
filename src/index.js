// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency < 0) {
        return {}
    } else if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }

    let currencyExchang = {};

    function currencyExchangSetting(object, propertyName, coins) {
        let numberOfCoins = Math.floor(currency / coins);

        if (numberOfCoins) {
            object[propertyName] = numberOfCoins;
            currency = currency % coins;
        };
    }

    currencyExchangSetting(currencyExchang, "H", 50);
    currencyExchangSetting(currencyExchang, "Q", 25);
    currencyExchangSetting(currencyExchang, "D", 10);
    currencyExchangSetting(currencyExchang, "N", 5);
    currencyExchangSetting(currencyExchang, "P", 1);

    return currencyExchang;
}
class Portfolio {
    constructor() {
      this.stocks = {}
    }

    isEmpty() {
        if (Object.keys(this.stocks).length == 0)
            return true;
        else
            return false;
    }

    uniqStocks(){
        return Object.keys(this.stocks).length;
    }

    purchase(ticker, numShares){
        if (this.stocks[ticker] = numShares && numShares > 0)
            return true;
        else
            return false;

    }

    numShares(ticker){
        if ( this.stocks.hasOwnProperty(ticker) )
            return this.stocks[ticker];
        else
            return 0;
    }

    sell(ticker, numSharesToSell){
        if ( this.stocks.hasOwnProperty(ticker) && this.stocks[ticker] >= numSharesToSell){
            // sell the stock
            this.stocks[ticker] = this.stocks[ticker] - numSharesToSell; 
            // remove the stock if we sell all the shares (FIX THIS)
            if (this.stocks[ticker] === 0){
                delete this.stocks[ticker]
            }
            return this.stocks[ticker];
            // console.debug(this.stocks[ticker])
            
        }
        else if( this.stocks[ticker] < numSharesToSell)
            throw 'Trying to Sell Too Many Shares'
    }
}

const port = new Portfolio()


module.exports=Portfolio
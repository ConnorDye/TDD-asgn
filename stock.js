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
}

const port = new Portfolio()

module.exports=Portfolio
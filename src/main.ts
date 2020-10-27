// 行业
enum Industry {
    Agriculture = 1,
    Forestry= 2,
    Animal = 3,
    Industry = 4,
}

// 产品
interface Product {
    name: string;
    company: Company;
}

// 公司
interface Company {
    name: string;
    industry: Industry;
    products: Array<Product>;
}

// 股票
abstract class Stock {
    // private company_id: string;
    public  id: string;
    private average_price: number; // 购入的价格
    private current_price: number; // 当前的价格
    private amount: number = 0;    // 持股数目
    private profit: number = 0;    // 当前收益
    private capital: number = 0;   // 本金

    constructor() {
        // this.company_id = company_id;
        this.average_price = 0;
        this.amount = 0;
        this.calculate_profits(0, 0);
        this.calculate_capital();
    }

    // 加仓
    public increase_stock(count: number, price: number): void {
        this.calculate_profits(count, price);
        this.amount += count;
        this.current_price = price;
        this.average_price = (this.capital + count * price) / this.amount;
        this.calculate_capital();
    }

    // 出仓
    public decrease_stock(count: number, price: number): void {
        if (this.amount >= count) {
            this.calculate_profits(count, price);
            this.amount -= count;
            this.current_price = price;
            this.average_price = (this.capital - count * price) / this.amount;
            this.calculate_capital();
        } else {
            console.log('股票数不够');
        }
    }

    // 访问器
    public get benefit() {
        return this.profit;
    }

    // 计算收益
    private calculate_profits(count: number, price: number): void {
        this.profit = count * (price - this.average_price);
    }

    // 计算本金
    private calculate_capital(): void {
        this.capital = this.amount * this.average_price;
    }
}

class StockA extends Stock {
   public id: string = 'a_stock';
}

class StockB extends Stock {
   public id: string = 'b_stock';
}

class StockH extends Stock {
   public id: string = 'h_stock';
}

class StockN extends Stock {
  public id: string = 'n_stock';
}

class StockS extends Stock {
   public id: string = 's_stock';
}

function stockFactory(option: string): Stock {
    let stock: Stock;
    switch (option) {
        case 'a_stock': stock = new StockA(); break;
        case 'b_stock': stock = new StockB(); break;
        case 'h_stock': stock = new StockH(); break;
        case 'n_stock': stock = new StockN(); break;
        case 's_stock': stock = new StockS(); break;
        default: stock = null;
    }
    return stock;
}

export default class Person {
    name: string;
    stocks: Map<string, Stock>;
    profit: number;

    constructor(name: string) {
        this.name = name;
        this.stocks = new Map<string, Stock>();
        this.profit = 0;
    }

    public purchase(stockId: string, counts: number, price: number): void {
        if (!this.stocks.has(stockId)) {
            const stock: Stock = stockFactory(stockId);
            this.stocks.set(stockId, stock);
        }
        const stock: Stock = this.stocks.get(stockId);
        stock.increase_stock(counts, price);
        this.calculate_profit();
    }

    public sale(stockId: string, counts: number, price: number): void {
        if (this.stocks.has(stockId)) {
            const stock = this.stocks.get(stockId);
            stock.decrease_stock(counts, price);
            this.calculate_profit();
        }
    }

    public get profits() {
        return this.profit;
    }

    private calculate_profit(): void {
        this.stocks.forEach(stock => {
            this.profit += stock.benefit;
        });
    }
}

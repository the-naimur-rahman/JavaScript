class Product{
    constructor(name, price, salesTax){
        this.name = name;
        this.price = price;
        this.salesTax = salesTax;
    }

    display(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
        console.log(`Total Price: ${(this.price + (this.price * this.salesTax)).toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 19.99, 0.05);
const product2 = new Product("Pant", 29.99, 0.05);

product1.display();
product2.display();
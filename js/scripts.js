function Phone(brand, price, color, dodatek) {
	this.brand = brand
	this.price = price;
	this.color = color;
	this.dodatek = dodatek;
}

var Samsung Galaxy S6 = new Phone("Samsung", 2250, "niebieski", "obudowa");
var iPhone6S = new Phone("Apple", 3000, "różowy", "sluchawki");
var OnePlus One = new Phone("OnePlus", 1500, "czarny", "ladowarka");

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "it also has" + this.dodatek + ".");
}

iPhone6S.printInfo();
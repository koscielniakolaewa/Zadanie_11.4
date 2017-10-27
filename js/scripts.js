function Phone(brand, price, color, dodatek) {
	this.brand = brand
	this.price = price;
	this.color = color;
	this.dodatek = dodatek;
}

function Phone1(brand, price, color, dodatek) {
	this.brand = brand
	this.price = price;
	this.color = color;
	this.dodatek = dodatek;
}

function Phone2(brand, price, color, dodatek) {
	this.brand = brand
	this.price = price;
	this.color = color;
	this.dodatek = dodatek;
}

var iPhone6S = new Phone("Apple", 3000, "różowy", "sluchawki");
var SamsungGalaxyS6 = new Phone1("Samsung", 2250, "niebieski", "obudowa");
var OnePlusOne = new Phone2("OnePlus", 1500, "czarny", "ladowarka");

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " it also has " + this.dodatek + ".");
}
iPhone6S.printInfo();

Phone1.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " it also has " + this.dodatek + ".");
}
SamsungGalaxyS6.printInfo();

Phone2.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " it also has " + this.dodatek + ".");
}
OnePlusOne.printInfo();
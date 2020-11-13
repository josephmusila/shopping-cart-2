import { Items } from "./items.js";

let cart = document.getElementById("cart");
//div for containing items-header
let cartItems = document.createElement("div");


//p elements for item headers
let cartItemsHeader = document.createElement("p");
let cartPriceHeader = document.createElement("p");
let cartQuantityHeader = document.createElement("p");
let cartTotalHeader = document.createElement("p");

//adding headers to div
cartItems.append(cartItemsHeader);
cartItems.append(cartPriceHeader);
cartItems.append(cartQuantityHeader);
cartItems.append(cartTotalHeader);


//cart headers  content
cartItemsHeader.innerHTML = "items";
cartPriceHeader.innerHTML = "Price/Item";
cartQuantityHeader.innerHTML = "Quantity/pack";
cartTotalHeader.innerHTML = "Total";

cart.append(cartItems);

function List(name, quantity, price) {
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.list = function () {
			///individual item div
		let parentDiv=document.createElement("div");
		cart.append(parentDiv);
		//p elements for individual items where individual items will appear

		let namep = document.createElement("p");
		let pricep = document.createElement("p");
		let quantityp = document.createElement("p");
		let totalp = document.createElement("p");

		//adding item p to  individual item div

		parentDiv.append(namep);
		parentDiv.append(pricep);
		parentDiv.append(quantityp);
		parentDiv.append(totalp);
			//get total 
		let itemTotal = price * quantity;
		//append the created item
		namep.append(name);
		pricep.append(price);
		quantityp.append(quantity);
		totalp.append(itemTotal);

		//confirm buy and number of items

		parentDiv.addEventListener("click",()=>{
		 let clientQuantity=	prompt("Please enter the quantity of  "    +    this.name   +    " you wish to buy");

		 if(clientQuantity=="" ||isNaN( clientQuantity)|| clientQuantity==null){
			 alert("please enter a valid value");
		 }else{
			 alert("The cost of  "   +     clientQuantity      +   " "+   this.name    + "  is  " +  "Ksh "+(clientQuantity*this.price));
		 }
			
		});
	};
}
//const items=new List("mango",30,20);

let newItems = Items;
for (var i = 0; i < newItems.length; i++) {
	let a = newItems[i].name;
	let b = newItems[i].price;
	let c = newItems[i].quantity;

	const items = new List(a, c, b);
	items.list();
}

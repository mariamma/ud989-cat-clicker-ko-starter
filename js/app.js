var initialCats = [{
		clickCount: 0,
		name: "Kris",
		imgSrc: "img/cat1.jpg",
		nickname:[
		{name:"Toto"},
		{name:"Tictac"}]
	},
	{
		clickCount: 0,
		name: "Kristy",
		imgSrc: "img/cat2.jpg",
		nickname:[
		{name:"Toto"},
		{name:"Tictac"}]
	},
	{
		clickCount: 0,
		name: "Snowy",
		imgSrc: "img/cat3.jpg",
		nickname:[
		{name:"Toto"},
		{name:"Tictac"}]
	},
	{
		clickCount: 0,
		name: "Shadow",
		imgSrc: "img/cat4.jpg",
		nickname:[
		{name:"Toto"},
		{name:"Tictac"}]
	},
	{
		clickCount: 0,
		name: "Mater",
		imgSrc: "img/cat5.jpg",
		nickname:[
		{name:"Toto"},
		{name:"Tictac"}]
	}
	];

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickname=ko.observableArray(data.nickname);

	this.level = ko.computed(function(){
		if(this.clickCount() > 15){
			return "Adult";
		}else if(this.clickCount() > 5){
			return "Teen";
		}else{
			return "Infant";	
		}
	}, this);
}

//for simplicity we put model inside viewmodel
var ViewModel = function(){
	var self=this;	//self points to this ViewModel
	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push(catItem);
	});

	// var cat1 = new Cat({
	// 	name:"Tabby",
	// 	imgSrc:"img/cat1.jpg",
	// 	clickCount:0,
	// 	nickname:[
	// 	{name:"Toto"},
	// 	{name:"Tictac"}]
	// });
	//this.currentCat = ko.observable(new Cat(this.catList()[0]));
	this.currentCat = ko.observable(this.catList()[0]);
	this.incrementCounter = function(){
		// this.clickCount(this.clickCount() + 1);
		console.log("Current clicks = " + self.currentCat().clickCount());
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.changeCurrrentCat = function(cat){
		console.log("Clicked " + cat.name);
		self.currentCat(cat);// = ko.observable(new Cat(cat));
		console.log("Click count :: " + self.currentCat().clickCount());
	};
}

ko.applyBindings(new ViewModel());
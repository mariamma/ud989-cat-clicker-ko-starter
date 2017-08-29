var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");

	this.level = ko.computed(function(){
		if(this.clickCount() > 15){
			return "Adult";
		}else if(this.clickCount() > 5){
			return "Teen";
		}else{
			return "Infant";	
		}
	}, this);

	this.nickname=ko.observableArray([
		{name:"Toto"},
		{name:"Tictac"}]);
}

//for simolicity we put model inside viewmodel
var ViewModel = function(){
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
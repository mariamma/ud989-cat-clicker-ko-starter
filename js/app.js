//for simolicity we put model inside viewmodel
var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings(new ViewModel());
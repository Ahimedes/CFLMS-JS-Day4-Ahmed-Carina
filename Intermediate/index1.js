var hotel = {
   name: 'Hilton',
   numberOfAvaliableNights: Math.floor(Math.random() * 11),
   numberOfWantedNights: document.getElementById("input1").innerHTML,

   showAvailability: function() {
    if (this.numberOfAvaliableNights > this.numberOfWantedNights) {
    	document.write("I'll reserve")
    } 
    else {
		document.write("Sorry, no avaliable nights")
	}
}

}

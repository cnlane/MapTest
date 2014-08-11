function init (fileName) {
	/* var p = d3.select("p");
	p.html("Hi");
	*/
	
	d3.json("us-states.json", function(error, usstates) {
		if (error) return console.error(error);
		console.log(usstates);
	});
};
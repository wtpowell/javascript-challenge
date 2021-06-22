// from data.js
var tabledata = data;
// define columns
var tablecolumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// use d3 to reference objects
var tbody = d3.select("tbody");
var search_date = d3.select("#searchDate");
var button_search = d3.select("#btnSearch");
var button_reset = d3.select("#btnReset");


var tablerows = (tabledata) => { 
    tbody.html("");
	
	
	tabledata.forEach(datarow => { 
		var tablerow = tbody.append("tr");  
		
	
		tablecolumns.forEach(column => tablerow.append("td").text(datarow[column]))
	});
}


tablerows(tabledata);

button_search.on("click", () => {
	d3.event.preventDefault();
	
    var searched_date = search_date.property("value");
	
	
    var filtered_tabledata = tabledata.filter(tabledata => tabledata.datetime === searched_date);
	
	
	if(filtered_tabledata.length !== 0) {
		tablerows(filtered_tabledata);
	}
	else {
		tbody.html("");
		
		
		tbody.append("tr").append("td").text("Nothing in the skies");
	}
})
 
button_reset.on("click", () => {
	document.getElementById("searchDate").value='';
	
	// reload original dataset
	tablerows(tabledata);
})



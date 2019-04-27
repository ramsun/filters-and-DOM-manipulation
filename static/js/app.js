// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the button from the webpage
// d3.select can find elemenets by their class(".CLASSNAME") or id("#IDNAME")
var submit = d3.select("#filter-btn");

// create a function based on the click event
submit.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var datetimeInputElement = d3.select("#datetime");

    // Get the value property of the input element
    var datetimeInputValue = datetimeInputElement.property("value")

    // Determine the new data that has been filtered based on the input date
    // the filtered data is list of dictionaries
    var datetimeFilteredData = tableData.filter(entry => entry.datetime === datetimeInputValue);

    // render the filtered data into the HTML table
    var tbody = d3.select("tbody");
    datetimeFilteredData.forEach(function(ufo_sighting) {
        
        // Use d3 to append one table row `tr` for each ufo_sighting object 
        var row = tbody.append("tr");
        
        // Loop through each element of the ufo_sighting dictionary
        Object.entries(ufo_sighting).forEach(function([key, value]) {
            // Use d3 to append 1 cell per ufo_sigthing value 
            var cell = row.append("td");
            
            // use d3 to fill in each cell with ufo_sighting values
            cell.text(value);
        });
    });




});
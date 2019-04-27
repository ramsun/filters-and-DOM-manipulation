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

    console.log(datetimeInputValue);

    // Determine the new data that has been filtered based on the input date
    // the var is list of dictionaries
    var datetimeFilteredData = tableData.filter(entry => entry.datetime === datetimeInputValue);

    // render the filtered data into the HTML table


    console.log(datetimeFilteredData);




});
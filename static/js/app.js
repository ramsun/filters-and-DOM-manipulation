//Logic for Filter Table button.   

// Create an object from data.js
var tableData = data;

/* 
Requires: Function will only filter data.js with a single filter value.
          The first input field to have a filter in it will be the filter that is applied, so care should be
          used to ensure that only 1 filter field is filled out at a time.
          An alert will be given for the case that filter fields are empty.
Input: No parameters needed.  Will check every input field on the webpage and check to 
       see which of input fields are filled.
Output: Returns a filtered JSON based on the input field on the form.
Purpose: Looks through all of the inputs fields in index.html and sees which of the fields have
         a filter value.
*/
function check_fields_and_filter(){

    // Select the input element and get the raw HTML node of each box
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    // Get the value property of the input elements
    var dateValue = dateElement.property("value");    
    var cityValue = cityElement.property("value");    
    var stateValue = stateElement.property("value");    
    var countryValue = countryElement.property("value");    
    var shapeValue = shapeElement.property("value");

    // Check to see which fields have a value in them (length != 0) and provide the filter accordingly
    if(dateValue.length != 0){
        var filteredData = tableData.filter(entry => entry.datetime === dateValue);
        return filteredData;
    }
    else if(cityValue.length != 0){
        var filteredData = tableData.filter(entry => entry.city === cityValue);
        return filteredData;
    }
    else if(stateValue.length != 0){
        var filteredData = tableData.filter(entry => entry.state === stateValue);
        return filteredData;
    }
    else if(countryValue.length != 0){
        var filteredData = tableData.filter(entry => entry.country === countryValue);
        return filteredData;
    }
    else if(shapeValue.length != 0){
        var filteredData = tableData.filter(entry => entry.shape === shapeValue);
        return filteredData;
    }
    // Show a pop-up alert on the browser if the button was clicked without any filters present
    else{
        alert("Please enter a single value in the filter fields");
    }
}

// Select the button from the webpage
// S3.select can find elemenets by their class(".CLASSNAME") or id("#IDNAME")
var submit = d3.select("#filter-btn");

// Event Handler
submit.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Check all of the input fields and apply the filter according to check_fields_and_filter() function
    // The filtered data is list of dictionaries
    filteredData = check_fields_and_filter();

    // Render the filtered data into the HTML table
    var tbody = d3.select("tbody");
    filteredData.forEach(function(ufo_sighting) {
        
        // Use d3 to append one table row `tr` for each ufo_sighting object 
        var row = tbody.append("tr");
        
        // Loop through each element of the ufo_sighting dictionary
        Object.entries(ufo_sighting).forEach(function([key, value]) {
            // Use d3 to append 1 cell per ufo_sigthing value (create collumns)
            var cell = row.append("td");
            // Use d3 to fill in each cell with ufo_sighting values (text)
            cell.text(value);
        });
    });
});
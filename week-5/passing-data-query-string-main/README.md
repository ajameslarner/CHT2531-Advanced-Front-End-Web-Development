# Passing Data Using a Query String
This repository contains a JavaScript application that features two pages and dynamically generated content.

* Download the example
* Run the example in a browser (it uses the ```fetch()``` API so it will need to be on a web server or it won't work)
* Have a look at the code, in particular look at how the id of the selected country is passed from one page to another.

Now try the following:-
* Can you make changes to the JSON file(s)
  * Add another country. Test this works. 
  * Add another property e.g. *continent* for each country.
  * Modify the JavaScript code so that the continent information is displayed for each country along with capital and population.

* Can you use the SWAPI API that we used last week - https://www.swapi.tech/ instead of hard-coded JSON files.
  * You will need to pass the id number of a species in the query string e.g.  https://www.swapi.tech/api/species for the first request on the index page, and then requests for specific species on the details page e.g. https://www.swapi.tech/api/species/3.

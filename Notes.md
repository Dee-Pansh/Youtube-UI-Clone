# Steps for Making any project
- ## Requirement Clarification - 5 mins
  - ### Features
  - ### Tech Stack
    - #### Redux
    - #### Tailwind
    - #### React Router DOM
    - #### Bundler
    - #### jest  
- ## Planning - 5 -7 mins
  - ## Draw the whole website and name the components 
- ## Implementation




# URLSearchParams
## It is a javascript object which is used to perform operations on the qurey parameters present inside the url
## Query string parameters are the part of a URL that comes after the '?' character and typically consists of key-value pairs separated by '&' characters. For example, in the URL https://example.com?page=2&limit=10, the query string parameters are page=2 and limit=10.
<pre>
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'page' parameter
const page = urlParams.get('page');
console.log(page); // Output: 2

// Add a new parameter
urlParams.append('sort', 'asc');

// Update an existing parameter
urlParams.set('page', '3');

// Remove a parameter
urlParams.delete('limit');

// Convert URLSearchParams back to a string
const newQueryString = urlParams.toString();
console.log(newQueryString); // Output: 'page=3&sort=asc'
</pre>
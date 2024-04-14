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


# Debouncing
- In frontend development, "debouncing" refers to a technique used to improve performance by limiting the frequency of execution of a particular function, typically in response to user input events like typing or scrolling.

- When a user interacts with an input field by typing or scrolling, for example, it might trigger events rapidly and repeatedly. Without debouncing, this could result in the associated event handler being called multiple times in quick succession, which can lead to unnecessary processing and potentially degrade performance.

- Debouncing works by setting up a delay before executing the associated function after the event is triggered. If the event occurs again within the delay period, the previous timer is cleared and a new one is set. This process continues until the event stops occurring, at which point the function is finally executed.

- By using debouncing, you can ensure that your application responds to user input effectively while avoiding unnecessary processing and improving overall performance. This is particularly useful in scenarios like autocomplete search boxes, where you want to perform a search only after the user has finished typing, rather than with every keystroke.


## Example of Debouncing
- typing slow = 200ms
- typing fast = 30ms

### Performance
- iphone pro max = 14 letters * 1000 = 14000
- iphone debouncing = 3 API calls * 1000 = 3000

#### Debouncing Use case
> Make an api call after every key press but if diff. between 2 API calls is < 200ms then decline an API call.

### Under the hood
>After every key stroke
new set timeout will be there 

>After another key stroke
previous set timeout will be cleared and 
new settimeout will be there and fetchSuggestions() will be called after 200 mseconds

>When no new keystroke is press then a new settimeout will be there and fetchSuggestions() will be called after 200 msecs




### Loading Live Video Comments
#### Issues :
> #### Data Layer : Getting live data
> #### UI Layer : Getting Data Updated on webpage

# Watch from :  [11:50](https://namastedev.com/learn/namaste-react/wrapping-up-youtube-project)

# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Arguments are passed into a function invocation and are the actual values used for the parameters. Parameters are placeholders whose values will be defined by the arguments passed into the function. 

Researched answer: Without an argument, parameters typically are undefined.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The predefined parameters are (element, index, array). The element parameter is required, and the two others are completely optional.

Researched answer: The element parameter can also be seen as the current value. 

3. What is the difference between map and filter?

Your answer: The map method creates a new array with elements from the original array modified in whatever way we define. The filter method filters out values from an existing array and returns to us a new array of values that met the filter criteria.

Researched answer: The map method will take an array, loop over the array, and return a new array with whatever argument we pass into it. This method is useful for modifying data within an array. For example, we can have an existing array of numbers and use the map method to return another array with the numbers of the first array multiplied by 2. It is important to note that the map method will return a new array with the same length of the original arrray. The filter method returns a new array with only values that meet the criteria of the conditional statement defined within it(aka return a 'true' value). The values that are 'false' get filtered out of the array, while the ones that are true are pushed into a new array. The returning result will be that new array.

4. What is the DOM?

Your answer: The DOM allows us to use JavaScript and modify or access elements within HTML pages. 

Researched answer: DOM stands for Document Object Model. It is a web API and can be seen as the connecting point between JavaScript and HTML documents. It is how we are able to use code to affect or manipulate web pages.

5. What is React? Why would you use it?

Your answer: React is a JavaScript library that uses components to create web pages. You would use it to quickly create dynamic web page UIs and because of its large open-source support and community.

Researched answer: It was created by Facebook and allows us to reuse blocks of code (components) multiple times. React makes creating user interfaces much easier by separating the blocks of code into smaller components.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I have limited knowledge on hoisting, but I know it involves certain variables and functions being moved to the top of their scope.

Researched answer: Hoisting is a process in JavaScript that moves variable and function declarations to the top of their scope, allowing them to be called before they're declared.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: It is a quick and simplified description of what features in a system or piece of software should work and/or how those features will work.

2. Spread operator: The spread operator unpacks all array elements inside of an array and can be used within another array or object with (...). This can be used instead of the concat method to join two arrays together and can also be used with destructuring.

3. React props: Props (or properties) are used to pass data into components. They are similar to function arguments in JavaScript.

4. Conditional rendering: Displays components based on conditional criteria being met.

5. DOM events: The interaction between user and the HTML page(clicking on objects or words, mouse hovers, etc)
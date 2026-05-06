1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)

   It is important to put thought into IDs and classes because HTML, CSS, and JavaScript all rely on them to communicate with each other. CSS uses classes to apply styles, and JavaScript uses IDs and classes to select and control elements. If the naming is unclear or does not have any meaning, it will be hard to connect the right styles and behaviors to the right elements, and it will be harder to track for bugs when the cod runs into issues.

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

   Data attributes are custom attributes that is used to store extra information that is not visible to the user. They are useful when you want to attach data to an element without using a separate variable. You access them in JavaScript using dataset. For example, element.dataset.id would get the value of data-id. However, data attributes are not meant for microdata. Using data attributes for microdata can cause issues because search engines may not read them correctly, so it is better to use proper microdata or JSON-LD formats instead.

3. What is a DOM fragment? Why are they powerful?
   A DOM fragment is a lightweight container that holds a group of elements in memory without being attached to the actual page. It is powerful because you can build and modify multiple elements once, rather than appending them one by one to the live DOM. This is much faster than adding elements one by one directly to the page.

4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?
   A Virtual DOM is a programming concept designed to improve the web application performance. Instead of updating the real page every time something changes, the program updates the virtual copy first, figures out the minimum number of changes needed, then applies only those changes to the real page. You gain performance and speed because you can avoid unnecessary updates. You lose some simplicity because the virtual DOM adds an extra layer of complexity to your code, and you are dependent on a framework like React to manage it for you.

5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
   Because `class` is a reserved keyword in JavaScript. It is already used to define classes in object-oriented programming. To avoid a conflict, the DOM uses `className` instead when referencing the HTML class attribute through JavaScript.

6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
   `onClick` is an HTML attribute that you write directly in the HTML tag, like `<button onclick="doSomething()">`. It is quick and simple but you can only attach one function at a time, and it mixes the JavaScript into the HTML which makes the code harder to maintain. `addEventListener()` is written in JavaScript and keeps your logic separate from the HTML. It is more flexible because you can attach multiple event listeners to the same element, and you can also remove them later with `removeEventListener()`. For larger projects, `addEventListener()` is a better choice than `onClick`.

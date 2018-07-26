## Step 3: SPA 💦

You are going to write a SPA (Single Page Application) that uses the Github API. Make sure that your app uses a logical pattern just like this codepen.

Just like last week:

Make a website that fetches (= to get) data asynchronously.

1. Create a new website with external js file

2. Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!'

3. Create a function that fetches from The Github API. For example from [this page] (https://api.github.com/orgs/HackYourFuture/repos). For help on this check this SO post

4. Display the data that you get from the Github API on your web page.

5. Now link the two together: When you click the button -> get the data from the Github API and display it on your website

Cool we are back where we left of.

6. Take a look at this:
  ```
  https://api.github.com/repos/HackYourFuture/CommandLine
  ```
7. Make a function which takes a single argument. The function should make an XHR request to https://api.github.com/search/repositories?q=user:HackYourFuture+[SearchTerm] where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument.

8. Make all the repositories link their own page in Github. Use the value of the key: name to make this work (hint: Github urls always look like this https://api.github.com/repos/HackYourFuture/[repositoryName] where [repositoryName] would be replaced by the actual name of the repository, for example CommandLine). Make sure the link opens in a new tab.

* Make sure you handle user input well. That means you need to think about empty input, and input that doesn't yield any results.

9. Extend your page with an input element. This is so the user will be able to type in text.

10. For each repository, show (in the right column) who the contributers are. You will need to use the contributors_url for this.

### !Important

* Do not duplicate code! This is especially important for `making requests` since we are making multiple ones with different urls and we want to do different actions based on the call we are making. Here are some handles to get you started:
  * So write a function called makeRequest which accepts (at least) the following parameters: url and callback.
  * Make sure your `callback` is called when the request errors or when it sends a response (look at the documentation)
  * Your `callback` functions should accept two parameters so it can handle both errors: `err` and `response`. So based on your users actions (input, hovering, clicking) you want to call `makeRequest` with a different `url` and supply it with a function that handles both errors (display an error message to the user for example) and responses (render it correctly, as described below).
  * Make your functions small and reusable (modular)! That means create separate functions to handle certain steps.
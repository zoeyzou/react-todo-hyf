1. Write a function that would allow you to do this:

    ```javascript
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
    ```
2. Rewrite the following code (using promise and other control flow tools/features):

    ```javascript
    function getAjaxData(url, callback) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
            callback(null, true);
        }
    });
    request.addEventListener('error', function () {
        callback(null, true);
    });
    request.open("GET", url);
    request.send();
    }

    const usersURL = "https://jsonplaceholder.typicode.com/users";

    getAjaxData(usersURL, function(data, err){
        if(err)
            console.log('Error loading users: ', err);
        else {
            let users = data;
            for (var i = 0; i < users.length; i++) {
                // load the todos for this user
                const todosURL = `https://jsonplaceholder.typicode.com/users/${users[i].id}/todos`;

                // why is this line needed below?
                let index = i;

                getAjaxData(todosURL, function(data, err){
                    if(err)
                        console.log('Error loading todos for user ', i, ' :', err);
                    else{
                        users[index].todos = data;
                    }

                    // console.log(index, i);

                    // if this is the last user, console.log all data
                    if(index == users.length - 1)
                        console.log(users);
                });
            }
        }
    });
    ```

3. You will need to create an HTML document out of the below snippet to run the below code. A hint - the code is syntactically correct but doesn't do what you would expect. Can you see why and fix it?

    Don't cheat - but if you get stuck ... http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example


    ```javascript
    <button id="btn-0">Button 1!</button>
    <button id="btn-1">Button 2!</button>
    <button id="btn-2">Button 3!</button>

    <script type="text/javascript">

        var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
        for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
            // for each of our buttons, when the user clicks it...
            document.getElementById('btn-' + btnNum).onclick = function() {
                // tell her what she's won!
                alert(prizes[btnNum]);
            };
        }
    </script>
    ```
## About repo

This folder is the homework for the 3rd week of learning nodejs. The course is about http and url. The requirement is as below:

Finish the router by changing the internal lookup by also
taking into account req.method eg. POST, PUT, DELETE etc.
Currently it responds to any method on .get() while it should
only respond to GET

Try making a URL shortener:
- Create an in-memory database for the long urls
- POST /create?url=LONG_URL and return the short url.
  Eg. "/create?url=https://en.wikipedia.org/George_Dantzig"
      responding "http://localhost:8080/short?index=1"
- GET /short?index=NUMBER should redirect to LONG_URL
  Look into how to redirect with HTTP Headers and appropriate
  status codes

How to test with cURL:

```bash
# This request should respond with a "short" url
curl -XPOST "http://localhost:8080/create?url=LONG_URL"

# This should "redirect" to the long URL. Also test in the browser
curl -XGET "http://localhost:8080/short?index=INDEX"
```

## How to test the code
Run node [filename] and open another terminal, using `curl -X [method] [link]` to test.
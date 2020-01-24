# github-api-with-netlify-functions

This is just an example on how to hide environment variables and api keys with Netlify

You need to hook this up to Netlify or another serverless service like AWS. Netlify has CORS so you can only call this API from the same domain which is helpful in case that some one finds the endpoint

- Check live site [here](https://youthful-noether-6e4573.netlify.com/)

- Check Netlify API call [here](https://youthful-noether-6e4573.netlify.com/.netlify/functions/github)

- Check functions example [here](https://github.com/alemesa/github-api-with-netlify-functions/tree/master/functions)

- Environment Variables in this case Github key and secret must be set in Netlify

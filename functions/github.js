const fetch = require("node-fetch")

const { CLIENT_ID, CLIENT_SECRET } = process.env

const API_ENDPOINT = `https://api.github.com/orgs/jam3/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=100`

const checkStatus = res => {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res.json()
  } else {
    throw new Error(res.statusText)
  }
}

exports.handler = async function(event, context, callback) {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await checkStatus(response)
    callback(null, {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  } catch (error) {
    callback(error)
  }
}

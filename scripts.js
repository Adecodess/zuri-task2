//Using Fetch for API Call
//import fs for file writting
const fs = require("fs");
const fetch = require("node-fetch");
const url = "http://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(async (response) => {
    const resObject = await response.json();
    fs.writeFile("result/posts.json", JSON.stringify(resObject), (err) => {
      if (err) {
        console.log(
          `Could not complete writing to file because an error occured ${err}`
        );
        return;
      }
      console.log(`file has been saved succsefully`);
    });
  })
  .catch((err) => {
    if (err) {
      throw `An error occured while trying to complete the task ${err}`;
    }
  });

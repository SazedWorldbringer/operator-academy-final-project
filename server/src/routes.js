const express = require("express");
const router = express.Router();

// Axios allows us to make HTTP requests from our app
const axios = require("axios").default;

// Handle a GET request to the root directory,
// and send "Hello World" as a response
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// get request to /images that responds with asteroids data
router.get("/images", (req, res) => {
  axios
    .get('https://images-api.nasa.gov/search?q=asteroids&media_type=image')
    .then((response) => {
      // save items in the response as nasa_data
      let nasa_data = response.data.collection.items;

      // only send the data required by my app
      let extract = nasa_data.map((item) => {
        return {
          nasa_id: item.data[0].nasa_id,
          title: item.data[0].title,
          href: item.links[0].href,
        };
      });
      res.send({ asteroids: extract })
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router;

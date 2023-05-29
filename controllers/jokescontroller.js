const mongoose = require("mongoose");
const axios = require("axios");

const manipulateJokeRepo = function (jokemodel) {
  const postjoke = function (req, res) {
    const jokes = new jokemodel({
      title: "finaltest",
      body: "finaltest body",
    });

    jokes
      .save()
      .then((result) => {
        console.log("successfully saved joke...");
        res.json(result); // Use res.json() to send the result as a JSON response
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred" }); // Send an error response in case of an error
      });
  };

  const getJokeFromDB = function (req, res) {
    jokemodel
      .findOne({ _id: "646fa12673614ed04e468cb8" })
      .then((result) => {
        res.json(result); // Use res.json() to send the result as a JSON response
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred" }); // Send an error response in case of an error
      });
  };

  const deljoke = function (req, res) {
    jokemodel
      .deleteMany({ title: "This is my second joke to test with" })
      .then((result) => {
        console.log("deleted jokes...");
        res.json({ message: "Jokes deleted successfully" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred" }); // Send an error response in case of an error
      });
  };

  // Documentation can be found at : https://rapidapi.com/humorapi/api/humor-jokes-and-memes/
  // Query structure is: http://localhost:3000/api/getjoke?keyWord=xyz
  const getJokeFromGenericJokeAPI = function (req, res) {
    const keyWord = req.query.keyWord;

    const options = {
      method: "GET",
      url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
      params: {
        format: "json",
        contains: keyWord,
        idRange: "0-150",
        blacklistFlags: "nsfw,explicit",
      },
      headers: {
        "X-RapidAPI-Key": "cec37574bamsh4410491af96442dp11baa2jsn16633e0285f7",
        "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
      },
    };
    async function getJokes() {
      try {
        const response = await axios.request(options);
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      }
    }
    getJokes();
  };

  // Documentation can be found at: https://rapidapi.com/Sv443/api/jokeapi-v2/
  const getJokeFromKeywordAPI = function (req, res) {
    const options = {
      method: "GET",
      url: "https://humor-jokes-and-memes.p.rapidapi.com/jokes/search",
      params: {
        "exclude-tags": "nsfw",
        keywords: "rocket",
        "min-rating": "7",
        "include-tags": "one_liner",
        number: "3",
        "max-length": "200",
      },
      headers: {
        "X-RapidAPI-Key": "cec37574bamsh4410491af96442dp11baa2jsn16633e0285f7",
        "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
      },
    };
    async function getJokes() {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getJokes();
  };

  return {
    postjoke,
    getJokeFromDB,
    deljoke,
    getJokeFromGenericJokeAPI,
    getJokeFromKeywordAPI,
  };
};

module.exports = manipulateJokeRepo;

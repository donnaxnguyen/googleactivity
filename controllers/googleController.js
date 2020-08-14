// using axios and requiring models for the book schema
const axios = require("axios");
const db = require("../models");

// creating methods for the googleController

// findAll searches the google books api 

// getting the api , then returning only the given filtered data
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req; axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
// work in progress .. need to filter results 

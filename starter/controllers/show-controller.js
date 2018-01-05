var {Show} = require('../models/show')
var _ = require("lodash");


function index(req, res) {
  Show.find().exec(function (err, shows){
    if (err) {
      res.status(500).json({
        errorMessage : `couldn't find show because `
      })
      return;
    }else if (shows.length == 0){
      res.status(404).json({
        errorMessage:"No shows found"
      })
      return;
    }else {
      res.status(200).json(show)
    }
  })

}

function create(req, res) {

}

function show(req, res) {

}

function update(req, res) {

}

function destroy(req, res) {

}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

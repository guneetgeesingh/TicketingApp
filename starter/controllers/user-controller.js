var {User} = require('../models/user')
var _ = require("lodash");


function index(req, res) {
  User.find().exec(function (err, users) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not find user because of ${err}`
      })
      return;
    } else if (users.length == 0) {
      res.status(404).json({
        errorMessage: "No users found"
      })
      return;
    } else {
      res.status(200).json(users)
    }
  })
}

function create(req, res) {
  User.find().where('email').equals(req.body.email).exec(function (err, users) {
    if (users.length > 0) {
      res.status(409).json({
        errorMessage: `a user already exists with that email account`
      })
    } else if (err) {
      res.status(500).json({
        errorMessage: `could not perform task because: ${err}`
      })
    } else {
      var newUser = new User(req.body)
      newUser.save(function (err, user) {
        if (err) {
          res.status(200).json({
            errorMessage: `There was an error with when saving the rocrd to the DB: ${err}`
          })
        } else {
          res.status(200).json(user);
        }

      })
    }
  })
}

function show(req, res) {
  var id = req.params.id
  User.findById(id).exec(function (err, user) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not find user because of ${err}`
      })
    } else if (!user) {
      res.status(404).json({
        errorMessage: "No users found"
      })
    } else {
      res.status(200).json(user)
    }
  })
}

function update(req, res) {
  var id = req.params.id;
  var body = _.pick(req.body, ["firstName", "lastName", "email", "phone", "dob", "address1", "address2", "city", "state", "zip", "cardNumber", "cardType", "security"])
  User.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }, function (err, user) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not find user because of ${err}`
      })
    } else if (!user) {
      res.status(404).json({
        errorMessage: `No users found ${id}`
      })
    } else {
      res.status(200).json(user)
    }
  })
}

function destroy(req, res) {
  var id = req.params.id
  User.findByIdAndRemove(id, function (err, user) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not delete user because of ${err}`
      })
    } else if (!user) {
      res.status(404).json({
        errorMessage: `No users found ${id}`
      })
    } else {
      res.status(200).json(user)
    }
  })
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
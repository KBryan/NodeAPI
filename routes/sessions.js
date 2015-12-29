var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var constants = require('../config/constants');
var User = require('../models/user');

router.post('/', (req,res) => {
  User.findOne({ username:req.body.user.username}).then(
    (user) => {

      if (user) {
        bcrypt.compare(req.body.user.pwd, user.passhash,(err,matches) => {
          if (matches) {
             var sessionToken = jwt.sign(user._id,constants.JWT_SECRET, { expiresIn: 60 * 60 });
             res.json({
               user:user,
               message:'successfully authed',
               sessionToken:sessionToken
             });
          } else {
            res.json({
              user:{},
              message:'failed to auth',
              sessionToken:''
            });
          }
        });
      } else {
        res.json({
          user:{},
          message:'failed to auth',
          sessionToken:''
        });
      }
    }, (err) => {
        res.json(err);
    }
  )
})

module.exports = router;

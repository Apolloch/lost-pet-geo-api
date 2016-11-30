'use strict';
var Bluebird = require('bluebird');
module.exports = function(router, Users , Pets) {

  router.get('/', getAll);
  router.get('/:id', getOne);
  router.get('/:id/pets', getPets);
  router.put('/:id',updateUser);

  function getAll(req, res) {
    res.json(Users.findAsync());
  }

  function getOne(req, res) {
    //TODO user exclude salt && hashed_password
    return Users.findOneAsync({_id: req.params.id})
        .spread(function (user) { return res.json(user); });
  }

  function getPets(req, res) {
    return Bluebird.props({
        user: Users.findOneAsync({_id: req.params.id}),
        pets: Pets.findAsync({userId: req.params.id})
    })
        .then(function(resp) {
            console.log(resp.user);
            console.log(resp.pets);
            if (resp.pets != null && resp.user!=null) {
                return res.status(200).json(resp.pets);
            }
            else{
                return res.status(404).json({code: 404, message: 'unable to find user'});
            }
        })
        .catch(function(err){
            return res.status(404).json(err);
        });
  }

  function updateUser(req,res) {
    var id = req.params.id ;
    Users.findOneAsync({_id : id}).then(function (user) {
      if (user != null) {
        Users.updateAsync({_id : user._id}, {
          firstName: (req.body.firstName || user.firstName),
          lastName: (req.body.lastName || user.lastName),
          birthdate: (req.body.birthdate || user.birthdate),
        })
            .then(function (result) {
                  return res.status(200).json(result);
                },
                function (err) {
                  return res.status(500).json(err);
                });
      }
      else{
        return res.status(404).json({code: 404, message: 'unable to find user'});
      }
    },function (err) {
      return res.status(404).end('unable to find user');
    });
  }

  return {
    getPets: getPets,
    updateUser: updateUser,
    getOne: getOne,
    getAll: getAll
  };
};

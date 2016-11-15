'use strict';

module.exports = function(router, Users) {

  router.get('/', getAll);
  router.get('/:id', getOne);
  router.get('/:id/pets', getPets);

  router.put('/:id',updateUser);
  function getAll(req, res) {
    res.json(Users.findAsync());
  }

  function getOne(req, res) {
    return Users.findAsync({_id: req.params.id})
      .spread((user) => res.json(user));
  }

  function getPets(req, res) {
    return res.json([
      {
        accountId: req.params.id,
        id: 1,
        photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
        pet: {
          type: 'chien',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc',
        }
      },
      {
        accountId: req.params.id,
        id: 2,
        photo: 'http://previews.123rf.com/images/bartkowski/bartkowski1203/bartkowski120300005/12612383-Noir-petit-chaton-assis-un-sur-un-fond-blanc-Banque-d\'images.jpg',
        pet: {
          type: 'chat',
          name: 'chaton',
          race: '',
          color: 'noir'
        }
      }
    ]);
  }

  function updateUser(req,res) {
    var id = req.params.id ;
    Users.findOneAsync({id : id}).then(function (user) {
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
};

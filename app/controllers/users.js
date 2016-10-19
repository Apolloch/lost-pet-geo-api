'use strict';

module.exports = function(router, Users) {

  router.get('/', getAll);
  router.get('/:id', getOne);
  router.get('/:id/pets', getPets);

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

};

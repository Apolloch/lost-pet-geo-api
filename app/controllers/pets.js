'use strict';

module.exports = function(router, Users) {

  router.get('/', getAll);
  router.get('/species', getSpecies);
  router.get('/species/:specie/breeds', getBreeds);
  router.get('/:id', getOne);

  function getAll(req, res) {
    return res.json([
      {
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


  function getSpecies(req, res) {
    return res.json([
      'lapin',
      'chien',
      'chat',
      'other'
    ]);
  }

  function getBreeds(req, res) {
    var specie = req.params.specie;
    // Get all races http://wamiz.com/chiens/race-chien/races
    return {
      specie: 'chien',
      breeds: [
        'teckel',
        'yorkshire',
        'berger allemand'
      ]
    };
  }


  function getOne(req, res) {
    // res.json(Users.findAsync({_id: req.params.id}));
    return res.json({
      id:   req.params.id,
      type: 'chien',
      photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
      name: 'toutou',
      race: 'bichon',
      color: 'blanc'
      /*vaccins: {
       rage: 'ok'
       }*/
    });
  }

};

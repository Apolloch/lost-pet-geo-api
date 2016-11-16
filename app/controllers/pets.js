'use strict';

module.exports = function(router, Users , Pets) {

  router.get('/', getAll);
  router.get('/species', getSpecies);
  router.get('/species/:specie/breeds', getBreeds);
  router.get('/:id', getOne);

  function getAll(req, res) {
    return  res.json(Pets.findAsync());
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
    return res.json({
      specie: specie,
      breeds: [
        'teckel',
        'yorkshire',
        'berger allemand'
      ]
    });
  }


    function getOne(req, res) {
        res.json(Pets.findAsync({_id: req.params.id}));
    }

};

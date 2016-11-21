'use strict';

module.exports = function(router, Users , Pets ,Species,Breeds) {

  router.get('/', getAll);
  router.get('/species', getSpecies);
  router.get('/species/:speciesId/breeds', getBreeds);
  router.get('/:id', getOne);
  router.post('/species' , addSpecies)
  router.post('/species/:speciesId/breeds', addBreed);
  router.post('/', addPet);

  function getAll(req, res) {
    return  res.json(Pets.findAsync());
  }

  function getSpecies(req, res) {
    return res.json(Species.findAsync());
  }

  function getBreeds(req, res) {
    var speciesId = req.params.speciesId;
    // Get all races http://wamiz.com/chiens/race-chien/races
    return res.json(Breeds.findAsync({speciesId : speciesId})
        .then(
            function(breeds) {
              return res.json(breeds)
            },
            function (err) {
              return res.status(404).json({code: 404, message: 'unable to find species'});
            }
        ));
  }


  function getOne(req, res) {
    return res.json(Pets.findAsync({_id: req.params.id}).then(
        function(breeds) {
          return res.json(breeds)
        },
        function (err) {
          return res.status(404).json({code: 404, message: 'unable to find the pet'});
        }
    ));
  }

  function addSpecies(req,res) {
    var name = req.body.name
    if(name != null ){
      var species = new Species({name : name})
      species.saveAsync()
          .spread(function (species) {
            return res.status(200).json(species)
          })
          .catch(function (err) {
            return res.status(500).json(err)

          })
    }

    else{
      return res.status(400).json({code:400,message:'missing the \'name\' body parameter'})
    }
  }

  function addBreed(req,res) {
    var speciesId = req.params.speciesId
    console.log(req.param)
    var breedName = req.body.name
    if(breedName != null ) {
      Species.findOneAsync({_id: speciesId}).then(function (species) {
        if (species != null) {
          var breed = new Breeds({name : breedName,speciesId : speciesId})
          breed.saveAsync()
              .spread(function (breed) {
                return res.status(200).json(breed)
              })
              .catch(function (err) {
                return res.status(500).json(err)
              })
        }
        else{
          return res.status(404).json({code: 404, message: 'unable to find species'});
        }
      },function (err) {
        return res.status(404).json({code: 404, message: 'unable to find species'});

      })
    }
    else{
      return res.status(400).json({code: 400, message:'missing the \'name\' body parameter'})
    }

  }

  function addPet(req,res) {
    var name = req.body.name
    var photos= req.body.photos
    var breedId = req.body.breedId
    var speciesId = req.body.speciesId
    var color = req.body.color
    var userId = req.body.userId
    if(name != null && breedId !=null && speciesId!=null && color !=null && userId != null ) {
        Users.findOneAsync({_id: userId}).then(function (user) {
            if (user != null) {
                Species.findOneAsync({_id: speciesId}).then(function (species) {
                    if (species != null) {
                        Breeds.findOneAsync({_id: breedId}).then(function (breed) {
                            if (breed != null){
                                var pet = new Pets({
                                    name: name,
                                    photos: photos || '',
                                    breedId: breedId,
                                    speciesId: speciesId,
                                    color: color,
                                    userId: userId
                                });
                                pet.saveAsync()
                                    .spread(function (pet) {
                                        return res.status(200).json(pet)
                                    })
                                    .catch(function (err) {
                                        return res.status(500).json(err)
                                    })
                            }
                            else{
                                return res.status(404).json({code: 404, message: 'unable to find breed'});
                            }
                        },function (err) {
                            return res.status(404).json({code: 404, message: 'unable to find breed'});
                        })
                    }
                    else{
                        return res.status(404).json({code: 404, message: 'unable to find species'});
                    }
                },function (err) {
                    return res.status(404).json({code: 404, message: 'unable to find species'});
                });
            }
            else{
                return res.status(404).json({code: 404, message: 'unable to find user'});
            }
        },function (err) {
            return res.status(404).json({code: 404, message: 'unable to find user'});

        })
    }
    else{
        return res.status(400).json({code: 400, message:'missing some body parameter .Should have name,color,speciesId,breedId,userId at least'})
    }

  }


};


'use strict';

module.exports = function(router, Users) {

  router.get('/', getAll);
  router.get('/:id', getOne);

  function getAll(req, res) {
    return res.json([{
      id: 1,
      userId : "5807394d416656001d4012e7",
      state: 'Perdu',
      photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
      date: '10-08-2016',
      comment: 'J\'ai perdu mon chien ... :',
      pet: {
        details: {
          type: 'chien',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc'
        }      
      }
    }]);
  }

  function getOne(req, res) {
    // res.json(Users.findAsync({_id: req.params.id}));
    return res.json({
      id: req.params.id,
      userId : "5807394d416656001d4012e7",
      state: 'Perdu',
      photo: 'http://www.apagi.fr/media/filer_public/37/85/3785774d-1d65-4a7c-8f44-e6175f92a603/jumper-chien-male-yorkshire-noir-et-feu-1.jpg',
      date: '10-08-2016',
      comment: 'J\'ai perdu mon chien ... :',
      pet: {
        details: {
          type: 'chien',
          name: 'toutou',
          race: 'bichon',
          color: 'blanc'
        }      
      }
    });
  }

};

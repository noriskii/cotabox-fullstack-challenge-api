const Contributor = require('../models/contributor');

module.exports = {

  async index(req, res) {
    await Contributor.find((err, contributors) => {
      if(err) { 
        console.log(err);
        return res.status(500).json(err);
      }

      return res.status(200).json(contributors);
    });
  },

  async reset(req, res) {
    await Contributor.deleteMany({}, (err, contributor) => {
      if(err) { 
        console.log(err);
        return res.status(500).json(err);
      }

      return res.status(200).json(contributor);
    });
  },

  async store(req, res) {
    const { firstName, lastName, contribution } = req.body;

    const userExists = await Contributor.findOne({ firstName, lastName });

    if(userExists) {
      return res.json({'error':'Contributor already Exists!'});
    }
    
    await Contributor.create({
      firstName,
      lastName,
      contribution
    }, (err, contributor) => {
      if(err) { 
        console.log(err);
        return res.status(500).json(err);
      }

      return res.status(200).json(contributor);
    });    
  },


  async remove(req, res) {
    const { firstName, lastName } = req.body;

    const userExists = await Contributor.findOne({ firstName, lastName });

    if(!userExists) {
      return res.json({'error':'Contributor doesn\'t Exists!'});
    }

    await Contributor.deleteOne({
      firstName,
      lastName
    }, (err, contributor) => {
      if(err) { 
        console.log(err);
        return res.status(500).json(err);
      }
        return res.status(200).json(contributor);
    });    
  },

  async percentage(req, res) {
    const percentage = await Contributor.aggregate([{
      $match : { },
    },{
      $group : {
        _id: null,
        total : {
            $sum : "$contribution"
        }
      }
    }]);

    return res.status(200).json(percentage[0]);
  }

}
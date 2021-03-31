const { User } = require('../../database/models')

const getProducts = async (req, res, next) => {
   let user = await User.create({
       firstName: "Imran",
       lastName: 'Hossain',
       email: 'gargzimran@gmail.com2'
   })
    res.send(user)

}




module.exports = {
    getProducts
}

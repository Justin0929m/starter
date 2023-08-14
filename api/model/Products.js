const db = require('../config');

class Products{

    fetchProducts(req, res){
        const query = 'SELECT * FROM Prods'

        db.query(query, (err, results) =>{
            if(err) throw err
            res.render('index', { results })
        })
    }
}

module.exports = Products
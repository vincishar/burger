const con = require('./connection');

module.exports = {
    selectAll: (req, res) => {
        con.query(`SELECT * FROM burgers;`, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.render('index', { burgers: result })
            }
        });
    },

    insertOne: (req, res) => {
        con.query(`INSERT INTO burgers (burger_name) VALUES ('${req.body.burgerName}');`, (err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        });
    },

    updateOne: (req, res) => {
        con.query(`UPDATE burgers SET devoured = true WHERE id=${req.params.id};`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    },

    deleteOne: (req, res) => {
        con.query(`DELETE from burgers WHERE id=${req.params.id};`, (err, result) => {
            if (err) {
                res.send(err) 
            } else {
                res.redirect('/')
            }
        })
    }
}


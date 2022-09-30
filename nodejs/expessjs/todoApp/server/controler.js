const Todo = require("./model")

module.exports = {

    home: function (req, res) {
        res.send("Welcome todoapp restfulAPIv2.0");
    },

    todos: function (req, res) {
        if (req.query.title !== undefined && req.query.user !== undefined) {
            Todo.find({ title: { $regex: req.query.title }, user: req.query.user })
                .then(results => {
                    res.json({
                        message: 'title and user',
                        todos: results
                    })
                })
        } else if (req.query.title !== undefined) {
            Todo.find({ title: { $regex: req.query.title } })
                .then(results => {
                    res.json({
                        message: 'title',
                        todos: results
                    })
                })

        } else {
            Todo.find({})
                .then(todos => res.json({ message: 'ok', todos: todos }))
        }
    },
    dltone: function (req, res) {
        const { _id } = req.params //get id
        Todo.findByIdAndDelete(_id)
            .then(result => {
                res.json({
                    message: 'deleted',
                    data: result
                })
            })
    }
}
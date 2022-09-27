module.exports={
home:function(req, res) {
    res.send(" restfulAPIv1.0");
  },

todos:function  (req, res)  {
    console.log(req.query.username)
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
}
}
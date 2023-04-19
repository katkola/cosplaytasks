const User = require('../models/user.model');

module.exports = {
    meowTest: (request, response) => {
        response.json({
            message: "Take 2"
        });
    },
    createUser: (request, response) => {
        const { name } = request.body;
        User.create({
            name: name
        })
            .then(user => response.json(user))
            .catch(err => response.status(400).json(err))
    },
    getAll: (request, response) => {
        User.find()
            .then(users => {
                console.log(users);
                response.json(users);
            })
            .catch(err => {
                console.log(err)
                response.json(err)
            })
    },
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    }

    ,
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);
                res
                    .cookie("usertoken", userToken, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    getOne: (request, response) => {
        User.findOne({ _id: request.params.id })
            .then(user => response.json(user))
            .catch(err => response.status(400).json(err))
    },
    updateUser: (request, response) => {
        User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then(updatedUser => response.json(updatedUser))
            .catch(err => response.json(err))
    },
    deleteUser: (request, response) => {
        User.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
}
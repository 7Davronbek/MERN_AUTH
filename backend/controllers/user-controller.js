const User = require('../model/User')

const signup = async (req, res, next) => {

    const { name, email, password } = req.body

    let existingUser

    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        console.log(err);
    }

    if (existingUser) {
        return res.status(400).json({ message: 'User already exist' })
    }

    const user = new User({
        name,
        email,
        password
    })

    try {
        await user.save()
    } catch (err) {
        console.log(err);
    }

    // const { ...password } = user

    return res.status(201).json({ message: user })
}

exports.signup = signup
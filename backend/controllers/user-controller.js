const User = require('../model/User')
const bcrypt = require('bcryptjs')

// SIGN UP
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

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    try {
        await user.save()
    } catch (err) {
        console.log(err);
    }

    // const { ...password } = user

    return res.status(201).json({ message: user })
}

// LOGIN
const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser

    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        console.log(err);
    }

    if (!existingUser) {
        return res.status(400).json({ message: 'User not found, Singup please' })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid Email / Password' })
    }

    return res.status(200).json({ message: 'Successfully Logged in' })

}

exports.signup = signup
exports.login = login
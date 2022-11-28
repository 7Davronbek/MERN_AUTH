const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30s'
    })

    if(req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = ''
    }

    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: 'lax'
    })

    return res.status(200).json({ message: 'Successfully Logged in', user: existingUser, token })

}

const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie
    const token = cookies.split('=')[1]
    // const headers = req.headers[`authorization`]
    // const token = headers.split(' ')[1]

    if (!token) {
        return res.status(404).json({ message: 'Token not found' })
    }

    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({ message: 'Invalid token' })
        }
        req.id = user.id
    })
    next()
}

const getUser = async (req, res, next) => {

    const userId = req.id
    let user

    try {
        user = await User.findById(userId, '-password')
    } catch (err) {
        return new Error(err)
    }

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json({ user })
}

const refreshToken = (req, res, next) => {
    const cookies = req.headers.cookie
    const prevToken = cookies.split('=')[1]
    if (!prevToken) {
        return res.status(400).json({ message: "Coundn't find token" })
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: 'Authentication failed' })
        }

        res.clearCookie(`${user.id}`)
        req.cookies[`${user.id}`] = ""

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '30s'
        })

        res.cookie(String(user.id), token, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: 'lax'
        })

        req.id = user.id
        next()

    })
}

exports.signup = signup
exports.login = login
exports.verifyToken = verifyToken
exports.getUser = getUser
exports.refreshToken = refreshToken
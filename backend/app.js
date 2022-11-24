// import mongoose from 'mongoose'
// import express from 'express'
const mongoose = require('mongoose')
const express = require('express')
// const dotenv = require('dotenv')
require('dotenv').config()

const app = express()

mongoose.connect(`mongodb+srv://mern_auth:${process.env.MONGO_PASSWORD}@cluster0.gn7dyr9.mongodb.net/mern_auth?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000)
        console.log('Database is connected');
    })
    .catch((err) => {
        console.log(err);
    })
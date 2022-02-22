const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const { JWT_PRIVATE_KEY } = process.env

router.get('/validate/:registrationCode', async (req, res) => {
    const code = req.params.registrationCode

    let result
    try {
        result = await userRepository.getUserByRegistrationCode(code)
    } catch (error) {
        res.status(500)
        res.end(error.message)
        return
    }
    if (!result) {
        res.status(404)
        res.end('Código de registro inválido')
        return
    }
    res.status(200)
    res.send('OK')
})
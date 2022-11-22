const { Router } = require('express');
const { Diet } = require('../db');

const router = Router();

router.post('/', async(req, res, next) => {
    try {
        //req por body viajan los datos por json
        const { name } = req.body
        const newTypeDieta = await Diet.create({
            name
        })

        res.status(200).send(newTypeDieta)
    } catch (error) {
        next(error)
    };
});


module.exports = router;
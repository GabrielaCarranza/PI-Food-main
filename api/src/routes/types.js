const { Router } = require('express');
const { getDbType } = require('../controllers/types')
    /* const db = require("../db"); */
    /* const { Diet } = require('../db'); */

const router = Router();

router.get('/', async(req, res, next) => {
    try {
        let allTypes = await getDbType();
        return res.status(200).send(allTypes);

    } catch (error) {
        next(error)
    }
})



module.exports = router;
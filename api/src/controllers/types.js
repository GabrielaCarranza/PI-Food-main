const { Diet } = require("../db");

const getDbType = async() => {
    return await Diet.findAll()
};

module.exports = {
    getDbType
}
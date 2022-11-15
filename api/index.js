const { Sequelize } = require('sequelize');
require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// Syncing all the models at once.
/* conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
}); */

async function main() {
    try {
        await conn.sync();
        /*  await conn.authenticate(); */
        console.log("Connection has been established successfully.");
        server.listen(3001, () => {
            console.log('Server is listening on port 3001');
        })
    } catch (error) {
        console.error("Unable to connect to the database".error);
    }
}

main();
require('dotenv').config();
const app = require('express')();
const cors = require('cors');

app.use(cors());
app.use(require('./src/config/middlewares/base'));

const port = parseInt(process.env.PORT, 10) || 3000;
app.set("port", port);

// Db Connection
// require('./src/app/dataAccess/dbHelper');

app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});
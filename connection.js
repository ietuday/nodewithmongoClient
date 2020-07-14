const {MongoClient} = require('mongodb');
const {listDatabases}  = require('./listdb');
const assert = require('assert');

    exports.main = async() => {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    const uri = "mongodb://localhost:27017";
    const dbName = 'eMarket'

    const client = 
        new MongoClient(
            uri, 
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
              
                const db = client.db(dbName);
                console.log("#################",db);
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
        // await client.close();
    }
}

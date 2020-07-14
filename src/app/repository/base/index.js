const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// const {listDatabases}  = require('../../../../listdb');
const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const client =
    new MongoClient(
        url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

exports.insertDocuments = async (collName, insObject, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collName)
                    .insertMany(insObject, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log("Inserted a document into the " + collName + " collection.", result, err);
                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.findDocument = async (collname, query, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .find(query).toArray((err, result) => {
                        if (err) {
                            console.log(err)
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log("$$$$$$$$$$", result);

                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.findOneDocument = async (collname, query, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .findOne(query, (err, result) => {
                        if (err) {
                            console.log(err)
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log("$$$$$$$$$$", result);

                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};


exports.findDocumentFields = async (collname, query, fields, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .find(query, fields).toArray((err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        callback(result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};



exports.findDocumentFieldsLimit = async (collname, query, fields, limit, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .find(query, fields).limit(limit).toArray((err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        callback(result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};


exports.findDocumentFieldsLimitReverse = async (collname, query, fields, limit, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .find(query, fields).sort({ $natural: -1 }).limit(limit).toArray((err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        callback(result);
                        //client.close
                    })
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.findDocumentSort = async (collname, query, sort, direction, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .find(query).sort(sort).toArray((err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                //  assert.equal(err, null);
                            }
                        }
                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.updateArrayDocumentPull = async (collname, query, pullObj, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .update(query, { $pull: pullObj }, { "$upsert": true }, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log(" Inserted object into Array", result, err);
                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.updateArrayDocument = async (collname, query, pushObj, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .update(query, { $push: pushObj }, { "$upsert": true }, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log(" Inserted object into Array", result, err);
                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};



exports.updateOldArrayDocument = async (collname, query, updateObject, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .updateMany(query, { $set: updateObject }, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        // console.log(" Updated object into Array", result, err);
                        callback(err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};


exports.updateOldArrayDocument1 = async (collname, query, updateObject, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .updateOne(query, { $set: updateObject }, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log(" Updated object into Array", result, err);
                        callback(query, err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.updateOldArrayDocument1 = async (collname, query, updateObject, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .updateOne(query, { $set: updateObject }, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log(" Updated object into Array", result, err);
                        callback(query, err, result);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

exports.insertDocument = async (collname, insObj, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .insertOne(insObj, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log("Inserted a document into the " + collname + " collection.", result, err);
                        callback(err, result.ops);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};


exports.updateDocumentUpsert = async (collname, query, setValues, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .updateOne(query, { $set: setValues }, { "$upsert": true }, (err, result) => {
                        if (err) {
                            console.log(err);
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        console.log("Updated a document into the " + collname + " collection.", result, err);
                        callback(result, query, setValues);
                        //client.close
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};


exports.deleteDocument = async (collname, obj, callback) => {
    try {
        // Connect to the MongoDB cluster
        await client.connect()
            .then((err) => {
                // assert.equal(null, err);
                console.log("Connected successfully to server");
                const db = client.db(dbName);
                db.collection(collname)
                    .deleteOne(obj, (err, result) => {
                        console.log(err);
                        if (err) {
                            if (JSON.stringify(err).indexOf('timed out') === -1) {
                                assert.equal(err, null);
                            }
                        }
                        callback(err, result);
                        //client.close()
                    });
            })
            .catch((err) => {
                console.log("Not Able to connect");
                console.log(err);
                // assert.equal(err, err);
            })
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Close Called");
    }
};

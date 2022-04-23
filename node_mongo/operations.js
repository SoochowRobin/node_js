const assert = require('assert');

exports.insertOneDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection);
	coll.insert(document, (err, result) => {

		assert.equal(err, null);

		console.log("Inserted " + result.result.n + " documents into the collection " + collection);
		callback(result);
	});

};


exports.findDocuments = (db, collection, callback) => {
	const coll = db.collection(collection);
	coll.find({}).toArray((err, docs) => {
		assert.equal(err, null);
		callback(docs);
	});
};


exports.removeDocuments = (db, document, collection, callback) =>{
	const coll = db.collection(collection);
	coll.removeOne(document, (err, result) => {
		assert.equal(err, null);

		console.log("Remove the document ", document);
		callback(result);
	});

};

exports.updateDocument = (db, document, update, collection, callback) => {
	const coll = db.collection(collection);
	coll.updateOne(document, {$set: update}, null, (err, result) =>{
		assert.equal(err, null);
		console.log("Update the document with ", update);
		callback(result);
	});

};
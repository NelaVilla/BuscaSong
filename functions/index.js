const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
//Coleccion Canciones Favoritas
router.get("/cancionesFav/:favorita", async (req, res) => {
  const favorita = await admin
    .firestore()
    .collection("cancionesFav")
    .doc(req.params.favorita)
    .get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(favorita);
});
router.get("/cancionesFav", async (req, res) => {
  const cancionesFav = await admin
    .firestore()
    .collection("cancionesFav")
    .get();
  var lista = [];
  cancionesFav.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});
router.post("/favorita", async (req, res) => {
  const favorita = await admin
    .firestore()
    .collection("cancionesFav")
    .add(req.body)
    .then(docRef => {
      return docRef.id
    });
  res.send(favorita);
});
router.put("/favorita/:id", async (req, res) => {
  const favorita = await admin
    .firestore()
    .collection("cancionesFav")
    .doc(req.params.id)
    .update(req.body).then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    } else { 
        console.log("No such document!");
        return {}
    }
  });
  res.send(favorita);
});
router.delete("/favorita/:id", async (req, res) => {
  const favorita = await admin
    .firestore()
    .collection("cancionesFav")
    .doc(req.params.id)
    .delete();
  res.send(favorita);
});

exports.cancionesFav = functions.https.onRequest(router);



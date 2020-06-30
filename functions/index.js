const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
//Coleccion Canciones Favoritas
router.get("/usuarios/:user", async (req, res) => {
  const user = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.user)
    .get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(user);
});
router.get("/usuarios", async (req, res) => {
  const usuarios = await admin
    .firestore()
    .collection("usuarios")
    .get();
  var lista = [];
  usuarios.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});
router.post("/user", async (req, res) => {
  const user = await admin
    .firestore()
    .collection("usuarios")
    .add(req.body)
    .then(docRef => {
      return docRef.id
    });
  res.send(user);
});
router.put("/user/:id", async (req, res) => {
  const user = await admin
    .firestore()
    .collection("usuarios")
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
  res.send(user);
});
router.delete("/user/:id", async (req, res) => {
  const user = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.id)
    .delete();
  res.send(user);
});

exports.usuarios = functions.https.onRequest(router);



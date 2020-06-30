const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
//Coleccion Canciones Favoritas
router.get("/usuarios/:usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.usuario)
    .get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(usuario);
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
router.post("/usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .add(req.body)
    .then(docRef => {
      return docRef.id
    });
  res.send(usuarios);
});
router.put("/usuario/:id", async (req, res) => {
  const usuario = await admin
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
  res.send(usuario);
});
router.delete("/usuario/:id", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.id)
    .delete();
  res.send(usuario);
});
exports.usuarios = functions.https.onRequest(router);
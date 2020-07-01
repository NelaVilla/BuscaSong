const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))
router.get("prueba", async (req, res) => {
  res.send('probando..');
});
//Coleccion Canciones Favoritas
router.get("/usuarios/:id", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.id)
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
router.post("/usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.body.email)
    .set(req.body.favoritas) //falta ponera algo aca
    .then(() => {
      console.log('vamos bien') 
    });
    res.send(usuario)
});
/*  router.put("/usuario/:id", async (req, res) => {
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
}); */
 exports.usuarios = functions.https.onRequest(router);
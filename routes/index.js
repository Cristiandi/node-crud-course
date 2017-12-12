var express = require('express');
var router = express.Router();

const mongoose = require('./../config/conexion');
const Persona = require('./../models/persona');

/* GET home page. */
router.get('/', function(req, res, next) {
  Persona.find((err, personas) => {
    console.log(`Personas: ${personas}`);
    if (err) throw err;
    res.render('index', { 
      titulo: 'Indice personas',
      personas: personas
      });
  });
});

router.get('/persona/nuevo', (req, res, next) => {
  res.render('personaForm', {});
});

router.get('/persona/modificar/:id', (req, res, next) => {
  const idPersona = req.params.id;
  Persona.findOne({ _id: idPersona }, (err, persona) => {
    console.log(`Persona ${persona}`);
    if (err) throw err;
    res.render('personaForm', { persona : persona});
  });
});

router.get('/persona/eliminar/:id', (req, res, next) => {
  const idPersona = req.params.id;
  Persona.remove({ _id: idPersona }, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;

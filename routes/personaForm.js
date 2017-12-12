var express = require('express');
var router = express.Router();

const mongoose = require('./../config/conexion');
const Persona = require('./../models/persona');

router.post('/persona/operar',(req, res, next) => {
  console.log(`body de la peticion ${JSON.stringify(req.body)}`);
  if(req.body._id === ''){
    const per = new Persona({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      edad: req.body.edad
    });
    per.save();
  } else {
    Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const personaSchema = new Schema({
    id: { type: String },
    nombres: { type: String },
    apellidos: { type: String },
    edad: { type: Number, min: 0 }
}, { versionKey: false });

const Persona = mongoose.model('personas', personaSchema);

module.exports = Persona;
const {model, Schema} = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    extension: Number,
    num_hab: Number,
    alquilado: Boolean,
    nombre: String,
    mail: String
},{timestamps: true })



module.exports = model('inmueble', inmuebleSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;
// Schema para modelar o tenga un esquema como van a lucir los datos
const Task = new Schema({
    title: String,
    description: String
});
// modelo con el nombre que les quier darle
module.exports = mongoose.model('Task', Task);

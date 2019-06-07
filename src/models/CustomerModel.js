const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({

            name: String,
            title:{
                type: String,
                required: true,
                unique:true
            }

});

// module.exports = {Category: mongoose.model('category',CategorySchema)};
module.exports = mongoose.model('Customer',CustomerSchema);




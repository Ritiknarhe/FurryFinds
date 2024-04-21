const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is requires"],
  },
  email: {
    type: String,
    required: [true, "email is requires"],
  },
  password: {
    type: String,
    required: [true, "password is requires"],
  },
},
{timestamps:true});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;

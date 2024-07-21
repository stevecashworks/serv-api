import { Schema , model} from "mongoose";
const userModel = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,

  },

});

export default model("users", userModel)
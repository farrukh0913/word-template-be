import { Schema, model } from 'mongoose';

let signUp:Schema = new Schema({
    name: { type: String, required: true },
    email:{ type: String, required: true},
    password:{ type: String, required: true},
})

const SignUp = model('SignIn', signUp);
export default SignUp
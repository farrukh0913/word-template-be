import { Schema, model } from 'mongoose';

let signUp:Schema = new Schema({
    firstName: { type: String, required: true },
    lastName:{ type: String, required: true},
    signature: { type: String, required: true },
    title:{ type: String, required: true},
    email:{ type: String, required: true},
    password:{ type: String, required: true},
})

const SignUp = model('SignUp', signUp);
export default SignUp
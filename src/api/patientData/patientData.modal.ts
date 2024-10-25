import { Schema, model } from 'mongoose';

let patient:Schema = new Schema({
    firstName: { type: String, required: true },
    lastName:{ type: String, required: true},
    dateOfBirth:{ type: String, required: true},
    email:{ type: String, required: true},
    phoneNumber:{ type: String, required: true},
    gender:{ type: String, required: true},
})

const Patient = model('Patient', patient);
export default Patient
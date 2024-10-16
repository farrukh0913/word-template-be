import { Schema, model } from 'mongoose';

let template:Schema = new Schema({
    templateName: { type: String, required: true },
    templateContent: { type: String, required: true }
})

const Template = model('Template', template);
export default Template
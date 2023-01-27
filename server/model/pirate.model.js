import { model, Schema } from "mongoose";

const PirateSchema = new Schema({
    name: {
        type: String,
        min: 5,
        required: [true, 'Please enter name']
    },
    image: {
        type: String,
        required: [true, 'Please enter image url']
    },
    chests: {
        type: Number,
        required: [true, 'Please enter number of treasure chests']
    },
    phrase: {
        type: String,
        required: [true, 'Please enter catch phrase']
    },
    position: {
        type: String,
        required: true
    },
    pegLeg: {
        type: Boolean,
        default: true,
        //This isnt necessary because of the default value but I might as well add it
        required: [true]
    },
    eyePatch: {
        type: Boolean,
        default: true,
        //This isnt necessary because of the default value but I might as well add it
        required: [true]
    },
    hook: {
        type: Boolean,
        default: true,
        //This isnt necessary because of the default value but I might as well add it
        required: [true]
    }
})



const Pirate = model('Pirate', PirateSchema)
export default Pirate




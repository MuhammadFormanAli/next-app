import mongoose, { Schema, models } from "mongoose";
const storySchema = new Schema ({

    storyName: {
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
    },
    story: {
        type: String,
        required: true,
    },
    writerName: {
        type: String,
        required: true,
    },
    storyImage: {
        type: String,
        required: true,
    },
    thumbImage: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },

},{timestamps: true})

const Story = models.Story || mongoose.model('Story',storySchema);

export default Story;
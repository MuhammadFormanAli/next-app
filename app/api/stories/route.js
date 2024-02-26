import { connectMongoDB } from "@/lib/mongodb";
import Story from "@/models/story";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET (req){
//     await connectMongoDB()
//   return NextResponse.json({message: "life is beautiful"})
// }

export async function GET(req) {
    try {
        await connectMongoDB();

        const url = new URL(req.url)
        const searchParams = new URLSearchParams(url.searchParams)
        const popular = searchParams.get('popular')
        const id = searchParams.get('id')
        const email = searchParams.get('email')

        if (popular === 'true') {
            // Fetch popular stories (e.g., top 4 stories by views)
            const popularStories = await Story.find().sort({ views: -1 }).limit(4);
            return NextResponse.json(popularStories);
        } else if (id) {
            try {
                // Fetch a specific story by ID
                const story = await Story.findById(id);
                if (!story) {
                    return NextResponse.json({ message: "Nod Found" })
                }
                return NextResponse.json(story);
            } catch (error) {
                if (error instanceof mongoose.Error.CastError) {
                    return NextResponse.json({ message: "invalid Id" })
                }
            }
        } else if (email) {
            try {
                // Fetch stories by email
                const story = await Story.find({ writerEmail: email });
                if (!story) {
                    return NextResponse.json({ message: "Nod Found" })
                }
                return NextResponse.json(story);
            } catch (error) {
                if (error instanceof mongoose.Error.CastError) {
                    return NextResponse.json({ message: "Invalid Email" })
                }
            }
        }
        else {
            // Fetch all stories
            const stories = await Story.find();
            return NextResponse.json(stories);
        }
    } catch (error) {
        console.error('Error fetching stories:', error);
        return NextResponse.status(500).json({ error: 'Internal server error' });
    }
}


export async function POST(req) {
    try {
        const { storyName, description, story, writerName, writerEmail, storyImage, thumbImage } = await req.json()
        console.log('writer Email', writerEmail)

        await connectMongoDB()
        const newStory = await Story.create({ storyName, description, story, writerName, writerEmail, storyImage, thumbImage })
        return NextResponse.json(newStory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}

export async function DELETE(req) {

    const { id, email } = await req.json()

    try {
        await connectMongoDB()

        if (!id || !email) {
            return NextResponse.json({ message: 'Delete Rejected' })
        } else {
            // Fetch a specific story by ID
            const story = await Story.findById(id);
            if (!story) {
                return NextResponse.json({ message: "Nod Found" })
            }

            if (story.writerEmail === email) {
                const result = await Story.deleteOne({_id: id});
                console.log(result)
                return NextResponse.json(result)
            }
            else {
                return NextResponse.json({ message: "Delete Rejected Because Of Invalid Email" })
            }

        }


    } catch (error) {

    }
    console.log(id, email)

    return NextResponse.json({ message: 'deleted success' })

}
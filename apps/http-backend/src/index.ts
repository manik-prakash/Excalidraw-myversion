import 'dotenv/config';
import express from "express";
import authRoute from "./Routes/authRoute"
import { errorHandler } from './Middlewares/errorHandler';
import { verify } from './Middlewares/auth';
import prisma from '@repo/db/client';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/ping", (req, res) => {
    res.send("pong , working.");
})

app.use("/auth", authRoute);

app.post("/room", verify, async (req, res) => {

    const { userID, slug } = req.body;

    if (!slug) {
        res.status(401).json({ message: "enter a valid name." });
        return;
    }

    const result = await prisma.room.create({
        data: {
            slug: slug,
            ownerId: userID
        }
    });

    res.json({
        message: "room created",
        roomId: result.id
    })

})

app.get('/chats/:roomId',async (req,res)=>{
    const roomId = Number(req.params.roomId);
    const messages = await prisma.chat.findMany({
        where:{
            roomId : roomId
        },
        orderBy:{
            id : "desc"
        },
        take:50
    })

    res.json({
        messages
    });
})

app.get('/rooms/:slug',async (req,res) =>{
    const slug = req.params.slug;
    const response = await prisma.room.findFirst({
        where : {
            slug : slug
        }
    })

    res.json({
        response
    })
})

app.use(errorHandler);

app.listen(5000, () => {
    console.log("server running on port : 5000");
});

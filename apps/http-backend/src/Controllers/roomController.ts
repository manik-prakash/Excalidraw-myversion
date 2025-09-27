import prisma from '@repo/db/client';
import { Request, Response, NextFunction } from "express";

export const createRoom = async (req : Request, res : Response) => {

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

}
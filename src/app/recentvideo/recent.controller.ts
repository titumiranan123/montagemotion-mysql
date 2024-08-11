import { Request, Response } from "express";
import * as recentService from "./recent.services";

import { v4 as uuidv4 } from "uuid";

// Get all recent videos
export const getAllRecentVideo = async (_req: Request, res: Response) => {
    try {
        const videos = await recentService.getAllRecentVideos();
        res.status(200).json({
            success: true,
            message: "All videos retrieved successfully",
            data: videos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve videos",
            data: ''
        });
    }
};

// Get a single video by ID
export const getSingleVideo = async (req: Request, res: Response) => {
    try {
        const video = await recentService.getSingleVideo(req.params.id);
        res.status(200).json({
            success: true,
            message: "Video retrieved successfully",
            data: video
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve video",
            data: ''
        });
    }
};

// Create a new video
export const createVideo = async (req: Request, res: Response) => {
    try {
        const recentVideo = {
            _id: uuidv4(),
            thumbnail: req.body.thumbnail,
            video_category: req.body.video_category,
            video_link: req.body.video_link
        };
        const uploadVideo = await recentService.createRecentVideo(recentVideo);
        res.status(201).json({
            success: true,
            message: "Video uploaded successfully",
            data: uploadVideo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Video creation failed",
            data: ''
        });
    }
};

// Update a video by ID
export const updateRecentVideo = async (req: Request, res: Response) => {
    try {
        const data = {
            _id: req.params.id,
            ...req.body
        }
        const updateData = await recentService.updateRecentVideo(req.params.id, data);
        res.status(200).json({
            success: true,
            message: "Video updated successfully",
            data: updateData
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Video update failed",
            data: ''
        });
    }
};

// Delete a video by ID
export const deleteRecentVideo = async (req: Request, res: Response) => {
    try {
        await recentService.deleteRecentVideo(req.params.id);
        res.status(200).json({
            success: true,
            message: "Video deleted successfully",
            data: ''
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Video deletion failed",
            data: ''
        });
    }
};

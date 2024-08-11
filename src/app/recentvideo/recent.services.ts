import db from "../../db/db";
import { recentVideos } from "./recent.interface";

// Get all recent videos
export const getAllRecentVideos = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM recentvideos", (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Get a single video by ID
export const getSingleVideo = (_id: string) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM recentvideos WHERE _id = ?", [_id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Create a new recent video
export const createRecentVideo = (recentVideo: recentVideos) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO recentvideos SET ?", recentVideo, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Update an existing recent video by ID
export const updateRecentVideo = (_id: string, recentVideo: recentVideos) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE recentvideos SET ? WHERE _id = ?", [recentVideo, _id], (err, result) => {
            if (err) {
                console.log(err)
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Delete a recent video by ID
export const deleteRecentVideo = (_id: string) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM recentvideos WHERE _id = ?", [_id], (err, result) => {
            if (err) {

                reject(err);
            } else {

                resolve(result);
            }
        });
    });
};

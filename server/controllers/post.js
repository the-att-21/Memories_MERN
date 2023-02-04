import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    // res.send('This Works');
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req, res) => {
    res.send('post created');
}
import express from "express";
import { editPost,getAllPosts,getSinglePost,createPost,deletePost } from "../controllers/postController.js";
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "post one",
    body: "this is post one",
  },
  {
    id: 2,
    title: "post two",
    body: "this is post one",
  },
  {
    id: 3,
    title: "post three",
    body: "this is post one",
  },
  {
    id: 4,
    title: "post four",
    body: "this is post one",
  },
];

//To get all posts
//To fetch specific limit of posts
router.get("/",getAllPosts);

//To get single Post by id
router.get("/:id",getSinglePost);
//To Create Post
router.post("/", createPost);

//Edit a post
router.put("/:id",editPost);

// Delete Post
router.delete("/:id",deletePost);

export default router;

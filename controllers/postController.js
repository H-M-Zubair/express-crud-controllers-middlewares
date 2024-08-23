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


//controller to get all posts
export const getAllPosts  =(req, res) => {
    console.log(req.query.limit);
        const limit = parseInt(req.query.limit);
    console.log(limit);
        if( !isNaN( limit ) && limit > 0 ){
    
            res.status(200).json(posts.slice(0,limit));
        }else{
            res.status(200).json(posts);
        }
    }


//Controller to Create a Post
export const createPost=(req, res) => {
    console.log(req.body);
    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
      body: req.body.body,
    };
    console.log(newPost);
    if (!req.body.title || !req.body.body) {
      res.status(400).json({ message: "title and body are required" });
    } else {
      posts.push(newPost);
      res.status(201).json(newPost);
    }
  }

//controller to get specific post
export const getSinglePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post =(posts.filter((post) => 
     post.id == id
  
    ));
    console.log("Post is",post);
    if(post.length > 0){
      res.status(200).json(post);
    }
  
    else{
      res.status(404).json({ message: "post not found" });
    }
  }


  //Controller to Edit Post
  export const editPost = (req,res)=>{
    const id =parseInt(req.params.id);
    console.log(id);
    const post =(posts.filter((post) => 
     post.id == id
    ));
    console.log("Post is",post);
    if(!post){
        res.status(404).json({message: "post not found"});
    }
    else{
        post.title = req.body.title;
        post.body = req.body.body;
        res.status(200).json({message:"post is successfully updated",post});
    }
}

//Controller to delete post
export const deletePost=(req, res) => {
    const id = parseInt(req.params.id);
    console.log("ID to delete:", id);

    // Find the post
    const post = posts.find(post => post.id === id);

    console.log("Post is", post);

    if (!post) {
        // If the post is not found, return a 404 response
        return res.status(404).json({ message: "Post not found" });
    }

    // Filter out the post to be deleted
    posts = posts.filter(post => post.id !== id);

    // Return a success message
    res.status(200).json({ message: "Post successfully deleted", deletedPost: post });
}
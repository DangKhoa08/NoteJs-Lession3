import express from "express";

const v2Router = express.Router();
export default v2Router;
//khai bao route cho path: /v1/posts -get
v2Router.get("/v1/posts", (req, res)=>{
    res.end("danh sach Posts");
});

//khai bao route cho path: /v1/posts -POST
v2Router.post("/v1/posts", (req, res)=>{
    res.end("tao POST");
});

//khai bao route cho path: /v1/posts/:id -get
///v1/posts/1
///v1/posts/1123
///v1/posts/abc
v2Router.get("/v1/posts/:id", (req, res)=>{
    const params = req.params;
    const id = params.id;
    res.end("lay Posts"+ id);
});


//khai bao route cho path: /v1/posts/:id -PUT
///cap nhat post
v2Router.put("/v1/posts/:id", (req, res)=>{
    const params = req.params;
    const id = params.id;
    res.end("cap nhat Post"+ id);
});

//khai bao route cho path: /v1/posts/:id -DELETE
///XOA POST

v2Router.delete("/v1/posts/:id", (req, res)=>{
    const params = req.params;
    const id = params.id;
    res.end("xoa Posts"+ id);
});
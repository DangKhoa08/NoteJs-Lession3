import express from "express";

const v1Router = express.Router();
export default v1Router;


//khai bao route cho path: /v1/posts -get
v1Router.get("/v1/posts", (req, res)=>{
    res.end("danh sach Posts");
});

//khai bao route cho path: /v1/posts -POST
v1Router.post("/v1/posts", (req, res)=>{
    res.end("tao POST");
});

//khai bao route cho path: /v1/posts/:id -get
///v1/posts/1
///v1/posts/1123
///v1/posts/abc
v1Router.get("/v1/posts/:id", (req, res)=>{
    const params = req.params;
    const id = params.id;
    res.end("lay Posts"+ id);
});


//khai bao route cho path: /v1/posts/:id -PUT
///cap nhat post
v1Router.put("/v1/posts/:id", (req, res)=>{
    const params = req.params;
    const id = params.id;
    res.end("cap nhat Post"+ id);
});

//khai bao route cho path: /v1/posts/:id -DELETE
///XOA POST

v1Router.delete("/v1/posts/:id", (req, res)=>{
    const params = req.params;
    const id = params.id;
    res.end("xoa Posts"+ id);
});
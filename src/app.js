import express from "express";
import v1Router from "./routers/v1.routers.js";
import v2Router from "./routers/v2.routers.js";
//khoi tao app express
const app = express();

//khai bao route


// //khai bao route cho path: /v1/posts -get
// app.get("/v1/posts", (req, res)=>{
//     res.end("danh sach Posts");
// });

// //khai bao route cho path: /v1/posts -POST
// app.post("/v1/posts", (req, res)=>{
//     res.end("tao POST");
// });

// //khai bao route cho path: /v1/posts/:id -get
// ///v1/posts/1
// ///v1/posts/1123
// ///v1/posts/abc
// app.get("/v1/posts/:id", (req, res)=>{
//     const params = req.params;
//     const id = params.id;
//     res.end("lay Posts"+ id);
// });


// //khai bao route cho path: /v1/posts/:id -PUT
// ///cap nhat post
// app.put("/v1/posts/:id", (req, res)=>{
//     const params = req.params;
//     const id = params.id;
//     res.end("cap nhat Post"+ id);
// });

// //khai bao route cho path: /v1/posts/:id -DELETE
// ///XOA POST

// app.delete("/v1/posts/:id", (req, res)=>{
//     const params = req.params;
//     const id = params.id;
//     res.end("xoa Posts"+ id);
// });

// //cach 2
// app.route("/v2/posts").get((req, res) =>{
//     console.log("Danh sach Post");
// }).post((req,res)=>{
//     console.log("tao Post");
// });

// //cach 3
// const v3Router = express.Router();
// v3Router.get("/v3/posts", (req, res)=>{
//     res.end("tao Posts");
// });


// app.use("/", v3Router); // /v3/posts

app.use("/",v1Router);
app.use("/",v2Router);
app.use((req, res)=> {
    console.log(">>>>App -level-midleware 01");
    next();
});
app.get("/test",(req,res)=>{
    console.log(">>>>App -level-midleware 01");
    next();
});
//run app express
app.listen(3000, ()=>{
    console.log(">>>app is running on port 3000");
});
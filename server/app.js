//core modules
const fs = require("fs");
const path = require("path");

//koa modules and middlewares
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");

const app = new Koa();
const router = new Router();

app.use(serve("__build__"));

router.get("/", (ctx) => {
    let html = fs.readFileSync("index.html");
    ctx.set({"content-type":"text/html"});
    ctx.body = html;
});
  
app.use(router.routes());
app.listen(8080);

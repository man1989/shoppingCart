//core modules
const fs = require("fs");
const path = require("path");

//webpack runtime
const webpack = require("webpack");
const config = require("../webpack.config");

//koa modules and middlewares
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");

const app = new Koa();
const router = new Router();
const compiler = webpack(config);

compiler.watch({}, (err, res)=>{app.listen(8080);});

router.get("/", (ctx) => {
    let html = fs.readFileSync("index.html");
    ctx.set({"content-type":"text/html"});
    ctx.body = html;
});

app.use(serve("__build__"));
app.use(router.routes());
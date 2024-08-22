const app = require("express")();

const config = require("./config.js");
const SysInfo = require("./sysinfo.js");

app.get("/", (req, res) => {
    res.sendFile("/www/public/index.html", config.path);
});

app.get(/.*\.(js|html|css)$/, async (req, res) => {
    res.sendFile("/www/public" + req.url, config.path);
});

app.get(/^\/info\/(.*)$/, async (req, res) => {
    res.send(SysInfo.match(req.url).toString());
});

app.get("/syslogo.png", (req, res) => {
    res.sendFile(SysInfo.logo(), config.path);
});

app.listen(8125);
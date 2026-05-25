const http = require("http");
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const srcRoot = path.join(projectRoot, "src");
const imagesRoot = path.join(projectRoot, "images");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

const sendFile = (response, filePath) => {
  fs.readFile(filePath, (error, fileBuffer) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const contentType = contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": contentType });
    response.end(fileBuffer);
  });
};

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);

  if (pathname === "/" || pathname === "/index.html") {
    sendFile(response, path.join(srcRoot, "index.html"));
    return;
  }

  if (pathname.startsWith("/images/")) {
    sendFile(response, path.join(imagesRoot, pathname.slice("/images/".length)));
    return;
  }

  const safePath = path.normalize(pathname).replace(/^\.{2,}[\\/]/, "");
  const candidatePath = path.join(srcRoot, safePath);

  if (!candidatePath.startsWith(srcRoot)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.stat(candidatePath, (error, stats) => {
    if (!error && stats.isDirectory()) {
      sendFile(response, path.join(candidatePath, "index.html"));
      return;
    }

    sendFile(response, candidatePath);
  });
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});
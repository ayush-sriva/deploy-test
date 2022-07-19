/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */
// src/index.js

if (typeof window !== "undefined") {
    const { worker } = require("./browser");
    worker.start();
}

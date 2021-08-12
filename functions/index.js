const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JNM6tSBbBEhHakvKK7WF6sTw1xjNm2WuaHfc53UI140BmEYb0m0QTrEWAEyhf5O9sRumpuTkfh4ELt4MgiIB1iG00KYlZYbAy"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

// - Listen command
exports.api = functions.https.onRequest(app);

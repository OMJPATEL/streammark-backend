import express from "express";
import { corsMiddleware } from "./config/cors";

import likedRoutes from "./api/v1/routes/liked.routes";
import educationalRoutes from "./api/v1/routes/educational.routes";

import movieRoutes from "./api/v1/routes/movie.routes";

import funFactsRoutes from "./api/v1/routes/funfacts.routes";

import musicRoutes from "./api/v1/routes/music.routes";

import { ClerkExpressWithAuth, ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";


export const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(ClerkExpressWithAuth());
app.get("/api/v1/protected", ClerkExpressRequireAuth(), (req: any, res) => {
  res.json({
    message: "You are authenticated!",
    userId: req.auth.userId,
  });
});
app.use("/api/v1/liked", likedRoutes);
app.use("/api/v1/educational", educationalRoutes);

app.use("/api/v1/movies", movieRoutes);

app.use("/api/v1/funfacts", funFactsRoutes);

app.use("/api/v1/music", musicRoutes);
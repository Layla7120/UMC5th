// user.route.js

import express from "express";
import asyncHandler from "express-async-handler";

import {
  addingShop,
  addingReview,
  addingMissions,
} from "../controllers/region.controller.js";

export const regionRouter = express.Router({ mergeParams: true });

regionRouter.post("/shops", asyncHandler(addingShop));
regionRouter.post("/shops/reviews", asyncHandler(addingReview));
regionRouter.post("/shops/missions", asyncHandler(addingMissions));

regionRouter.get("/shops/reviews", asyncHandler(reviewPreview));

import { NextFunction, Request, Response } from "express";
import ratelimit from "../config/upstash";

const rateLimiter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit"); // todo: need to fetch and pass userId here

    if (!success) {
      res
        .status(429)
        .json({ message: "Too many requests. Please try again later" });
      return;
    }

    next();
  } catch (error) {
    console.error("Failed to rate limit ", error);
    next(error);
  }
};

export default rateLimiter;

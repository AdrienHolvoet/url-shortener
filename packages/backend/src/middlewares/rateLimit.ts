import rateLimit from "express-rate-limit";

export const rateLimitMiddleware = (options?: { max: number }) =>
  rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    ...options,
  });

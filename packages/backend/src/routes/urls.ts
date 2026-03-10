import { shortenUrlSchema } from "@url-shortener/shared/forms/urls";
import { Router, type IRouter } from "express";
import { validateBody } from "../utils/validation";
import { shortenUrl } from "../services/url";
import { Response } from "express";

export const router: IRouter = Router();

router.post("/shorten", async (req, res: Response<string>) => {
  const { originalUrl } = await validateBody(req.body, shortenUrlSchema);
  const shortenedUrl = await shortenUrl(originalUrl);
  res.status(200).json(shortenedUrl);
});

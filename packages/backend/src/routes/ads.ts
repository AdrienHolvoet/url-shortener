import { Ad } from "@url-shortener/shared/types/ads";
import { Router, type IRouter } from "express";
import { Response, Request } from "express";
import { getStoikAd } from "../thirdParties/StoikAds";
import { validateBody } from "../utils/validation";
import { z } from "zod";

export const router: IRouter = Router();

router.get("/", async (req: Request, res: Response<Ad>) => {
  const { width, height } = await validateBody(
    req.query,
    z.object({ width: z.coerce.number(), height: z.coerce.number() }),
  );

  const ad = await getStoikAd(width, height);
  res.status(200).json(ad);
});

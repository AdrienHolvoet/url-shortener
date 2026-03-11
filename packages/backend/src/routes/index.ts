import { prisma } from "../lib/prisma";
import { IRouter, Request, Response, Router } from "express";
import { router as urlsRouter } from "./urls";
import { rateLimitMiddleware } from "../middlewares/rateLimit";

export const router: IRouter = Router();

router.use("/urls", rateLimitMiddleware(), urlsRouter);

router.get(
  "/:slug",
  rateLimitMiddleware({ max: 200 }),
  async (req: Request<{ slug: string }>, res: Response) => {
    const url = await prisma.url.findUnique({ where: { slug: req.params.slug } });

    if (!url) {
      res.status(404).send("Ce lien n'existe pas");
      return;
    }

    prisma.click.create({ data: { urlId: url.id } }).then(() => {});

    res.redirect(302, url.originalUrl);
  },
);

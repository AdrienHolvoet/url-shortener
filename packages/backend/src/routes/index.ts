import { prisma } from "../lib/prisma";
import { IRouter, Response, Router } from "express";
import { router as urlsRouter } from "./urls";

export const router: IRouter = Router();

router.use("/urls", urlsRouter);

router.get("/:slug", async (req, res: Response) => {
  const url = await prisma.url.findUnique({ where: { slug: req.params.slug } });

  if (!url) {
    res.status(404).send("Ce lien n'existe pas");
    return;
  }

  res.redirect(302, url.originalUrl);
});

import { customAlphabet } from "nanoid";
import { prisma } from "../lib/prisma.js";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);

export const shortenUrl = async (originalUrl: string) => {
  const slug = nanoid(6);
  const url = await prisma.url.create({
    data: { originalUrl, slug },
  });

  return `${process.env.BASE_URL}/${url.slug}`;
};

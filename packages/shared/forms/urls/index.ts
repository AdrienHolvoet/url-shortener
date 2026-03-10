import { z } from "zod";

export const shortenUrlSchema = z.object({
  originalUrl: z.url({ error: "S'il vous plaît entrez une URL valide" }),
});

export type ShortenUrlInput = z.infer<typeof shortenUrlSchema>;

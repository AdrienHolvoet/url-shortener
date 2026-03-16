import { Ad } from "@url-shortener/shared/types/ads";

export const getStoikAd = async (width: number, height: number): Promise<Ad> => {
  const token = process.env.STOIK_ADS_TOKEN;
  const response = await fetch(
    `https://stoik-technical-test-js-admin.vercel.app/api/ads?width=${width}&height=${height}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch ad");
  }
  return response.json();
};

import { useQuery } from "@tanstack/react-query";
import { Ad } from "@url-shortener/shared/types/ads";
import { httpClient } from ".";

export const useGetAdQuery = (width: number, height: number, shouldRefetch: boolean) => {
  return useQuery({
    queryKey: ["ads", width, height],
    queryFn: () => httpClient.get<Ad>("/ads", { params: { width, height } }),
    refetchInterval: shouldRefetch ? 2000 : false,
  });
};

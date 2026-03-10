import { useMutation } from "@tanstack/react-query";
import { httpClient } from "./index";
import type { ShortenUrlInput } from "@url-shortener/shared/forms/urls";

export const useShortenUrlMutation = () =>
  useMutation({
    mutationFn: (data: ShortenUrlInput) => httpClient.post<string>("/urls/shorten", data),
  });

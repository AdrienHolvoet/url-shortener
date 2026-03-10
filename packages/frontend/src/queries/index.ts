import { QueryClient } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";

import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: () => {
        showNotification({
          color: "red",
          title: "Une erreur est survenue",
          message: "Veuillez réessayer plus tard.",
        });
      },
    },
  },
});

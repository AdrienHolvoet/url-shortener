import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes/index.js";
import { queryClient } from "./queries/index.js";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;

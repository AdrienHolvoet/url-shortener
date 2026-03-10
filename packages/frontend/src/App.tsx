import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";
import { AppRoutes } from "./routes/index";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;

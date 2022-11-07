import { ThemeProvider } from "styled-components";
import { Home } from "../pages/Home";
import { CustomTheme } from "../theme/customTheme";
import { PageTheme } from "../theme/pageTheme";
import "./App.css";

const App = () => {
  return (
    <>
      <CustomTheme />
      <ThemeProvider theme={PageTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;

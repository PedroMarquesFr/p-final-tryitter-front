import RoutesTryitter from "./routes";
import GlobalStyles from "./styles/globalStyles";
// require('dotenv').config({path:__dirname+'/./../.env'})
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div>
      <SnackbarProvider
        maxSnack={3}
      >
        <GlobalStyles />
        <RoutesTryitter />
      </SnackbarProvider>
    </div>
  );
}

export default App;

import { Theme } from "@radix-ui/themes";
import AppRouter from "./providers/Router/Router";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Theme>
      <AppRouter />
    </Theme>
  );
}

export default App;

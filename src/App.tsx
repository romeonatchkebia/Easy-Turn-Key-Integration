import TurnKey from "./components/Turn_key_integration/TurnKey";
import { BusinessTypeProvider } from "./contexts/BusinessTypeContext";

function App() {
  return (
    <BusinessTypeProvider>
      <TurnKey />
    </BusinessTypeProvider>
  );
}

export default App;

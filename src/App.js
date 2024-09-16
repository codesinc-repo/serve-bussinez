import AOSInitializer from "./AOSInitializer";
import Routes from "./Routes";
import { AuthProvider } from "./AuthContext";
import { OrderProvider } from "./Context/OrderContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <AOSInitializer>
          <OrderProvider>
            <Routes />
          </OrderProvider>
        </AOSInitializer>
      </AuthProvider>
    </div>
  );
}

export default App;

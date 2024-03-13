import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/routesMain";
import { GlobalStyles } from "./styles/globalStyles"
import { ResetGlobalStyle } from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <RoutesMain />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ResetGlobalStyle />
        <GlobalStyles />
      </UserProvider>
    </>
  );
}

export default App;
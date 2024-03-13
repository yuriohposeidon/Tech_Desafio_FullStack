import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { PublicRoutes } from "./publicRoutes";
import { ContactProvider } from "../providers/ContactContext";
import { HomePage } from "../pages/homePage";
import { ProtectRoutes} from "./protectRoutes"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/home" element={<ProtectRoutes />}>
        <Route
          index
          element={
            <ContactProvider>
              <HomePage />
            </ContactProvider>
          }
        />
      </Route>
    </Routes>
  );
};
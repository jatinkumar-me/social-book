import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilPage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
   const mode = useSelector((state) => state.mode);
   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
   const isAuth = useSelector((state) => state.token);

   const router = createBrowserRouter([
      {
         path: "/",
         element: <LoginPage />,
      },
      {
         path: "/home",
         element: isAuth ? <HomePage /> : <Navigate to= "/"/>,
      },
      {
         path: "/profile/:userId",
         element: isAuth ? <ProfilPage /> : <Navigate to= "/"/>,
      },
   ]);

   return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
         <RouterProvider router={router} />
      </ThemeProvider>
   );
}

export default App;

<<<<<<< HEAD
import HomeScreen from './presentation/screen/home/HomeScreen'


function App() {


  return (
    <>
      <HomeScreen />
    </>
  )
}

export default App
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./components/navigation/PrivateRoute";
import { LoginScreen } from "./presentation/screen/auth/login/LoginScreen";
import { useSelector } from "react-redux";
import { authSelector } from "./store/auth/slice";
import { ProfileScreen } from "./presentation/screen/profile/ProfileScreen";
import { ConfiguracionScreen } from "./presentation/screen/configuration/ConfiguracionScreen";
import { HomeScreen } from "./presentation/screen/home/HomeScreen";

function App() {
  const { state } = useSelector(authSelector);

  return (
    <>
      <Router>
        <Routes>
          {/* Ruta Pública */}
          <Route
            path="/login"
            element={
              state === "authenticated" ? (
                <Navigate to="/home" replace />
              ) : (
                <LoginScreen />
              )
            }
          />

          {/* Ruta Privada */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomeScreen />
              </PrivateRoute>
            }
          />

          {/* Ruta Privada */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
              <ProfileScreen />
              </PrivateRoute>
            }
          />

          {/* Ruta Privada */}
          <Route
            path="/configuration"
            element={
              <PrivateRoute>
                <ConfiguracionScreen />
              </PrivateRoute>
            }
          />

          {/* Ruta por defecto */}
          <Route
            path="*"
            element={
              <Navigate to={state === "authenticated" ? "/home" : "/login"} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
>>>>>>> c9b6ef7 (first commit)

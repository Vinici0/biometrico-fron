import { authSelector } from "@/store/auth/slice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // Selecciona el estado de autenticación desde Redux
  const { state: authState } = useSelector(authSelector);

  // Si el usuario está autenticado, permite acceder a la ruta privada
  if (authState === "authenticated") {
    return <>{children}</>;
  }

  // Si no está autenticado, redirige al login
  return <Navigate to="/login" replace />;
};

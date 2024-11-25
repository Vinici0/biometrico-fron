<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, UserIcon, ClipboardListIcon, SettingsIcon, LogOutIcon } from "lucide-react";
=======
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MenuIcon,
  UserIcon,
  ClipboardListIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";
>>>>>>> c9b6ef7 (first commit)
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CONTROL DE HORAS Y ASISTENCIA LABORAL</h1>
=======
import { logout } from "@/store/auth/slice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Despachar la acción de cerrar sesión
    dispatch(logout());
    // Redirigir al usuario a la página de inicio de sesión
    navigate("/login");
  };

  const handleProfile = () => navigate("/profile");
  const handleSettings = () => navigate("/settings");

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          CONTROL DE HORAS Y ASISTENCIA LABORAL
        </h1>
>>>>>>> c9b6ef7 (first commit)
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Button variant="ghost" className="justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Empleados
                </Button>
                <Button variant="ghost" className="justify-start">
                  <ClipboardListIcon className="mr-2 h-4 w-4" />
                  Registros
                </Button>
                <Button variant="ghost" className="justify-start">
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Configuración
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserIcon className="h-6 w-6" />
                <span className="sr-only">Abrir menú de usuario</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
<<<<<<< HEAD
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
=======
              <DropdownMenuItem onClick={handleProfile}>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettings}>
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
>>>>>>> c9b6ef7 (first commit)
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

"use client";

import axios, { AxiosResponse } from "axios";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useForm } from "react-hook-form";
import { DownloadIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchAdapter } from "@/config/adapters/fetch.adapter";
import { Header } from "@/components/layout/Header";

interface Employee {
  id: string;
  Nombre: string;
  Fecha: string;
  Entrada: string;
  Salida: string;
  Numero: string;
  Departamento: string;
  TotalHorasRedondeadas: number;
  DiaSemana: string;
}

interface EmployeeResponse {
  data: Employee[];
}

export default function HomeScreen() {
  const { register, watch } = useForm();

  const [status, setStatus] = useState("");
  console.log(status);
  
  const [isLoading, setIsLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const fetchEmployees = async (
    startDate: string,
    endDate: string,
    page = 1,
    pageSize = 10,
    name = ""
  ) => {
    setIsLoading(true);
    try {
      const response = await fetchAdapter.post<EmployeeResponse>(
        name
          ? "/reports/search-attendance-by-name"
          : "/reports/monthly-attendance-report",
        {
          startDate,
          endDate,
          page,
          pageSize,
          name,
        }
      );
      const data = response;
      setEmployeeData(data.data);
      console.log("Empleados:", data.data);
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!startDate || !endDate) {
      setAlertMessage(
        "Por favor, seleccione ambas fechas para realizar la búsqueda."
      );
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setAlertMessage(
        "La fecha de inicio no puede ser mayor que la fecha de fin."
      );
      return;
    }

    setAlertMessage(""); // Clear any alert messages
    fetchEmployees(startDate, endDate, page, pageSize, searchTerm);
  }, [startDate, endDate, page, pageSize, searchTerm]);

  const handlePageChange = (newPage = 1) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setPageSize(Number(e.target.value));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleDownload = async (): Promise<void> => {
    if (employeeData.length === 0) return; // No permite descargar si no hay datos

    try {
      setIsLoading(true);

      // Realiza la solicitud directamente con Axios y espera un Blob como respuesta
      const response: AxiosResponse<Blob> = await axios.get(
        `/reports/download-excel`,
        {
          params: {
            startDate,
            endDate,
          },
          responseType: "blob", // Configura responseType como 'blob' para recibir el archivo
          headers: {
            Accept:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
          baseURL: "http://localhost:3000/api", // Asegúrate de definir el baseURL aquí
        }
      );

      console.log("Respuesta de descarga:", response);

      // Crear un blob para el archivo descargado
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = url;
      link.download = "ReporteAsistencia_Firma.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatus("¡Archivo descargado exitosamente!");
    } catch (error: unknown) {
      console.error("Error al descargar el archivo:", error);
      setStatus("Error al descargar el archivo");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">
          {alertMessage && (
            <div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
              role="alert"
            >
              <p>{alertMessage}</p>
            </div>
          )}
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6">
              <aside className="w-full md:w-64 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Filtros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Fecha de Inicio</Label>
                        <Input
                          id="start-date"
                          type="date"
                          {...register("startDate")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end-date">Fecha de Fin</Label>
                        <Input
                          id="end-date"
                          type="date"
                          {...register("endDate")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="filter">Buscar</Label>
                        <Input
                          id="filter"
                          placeholder="Filtrar por nombre..."
                          type="text"
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="page-size">Registros por página</Label>
                        <select
                          id="page-size"
                          value={pageSize}
                          onChange={handlePageSizeChange}
                          className="w-full p-2 border rounded"
                        >
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Resumen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Total de registros: {employeeData?.length}</p>
                  </CardContent>
                </Card>
              </aside>

              <div className="flex-grow space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Datos de Entrada/Salida de Empleados
                    </CardTitle>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleDownload}
                          disabled={isLoading || employeeData?.length === 0}
                        >
                          <DownloadIcon className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Descargar datos como Excel</p>
                      </TooltipContent>
                    </Tooltip>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nombre</TableHead>
                          <TableHead>Fecha</TableHead>
                          <TableHead>Entrada</TableHead>
                          <TableHead>Salida</TableHead>
                          <TableHead>Departamento</TableHead>
                          <TableHead>Horas</TableHead>
                          <TableHead>Día</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {employeeData?.map((employee) => (
                          <TableRow key={employee.id}>
                            <TableCell>{employee.Nombre}</TableCell>
                            <TableCell>
                              {new Date(employee.Fecha).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{employee.Entrada}</TableCell>
                            <TableCell>{employee.Salida}</TableCell>
                            <TableCell>{employee.Departamento}</TableCell>
                            <TableCell>
                              {employee.TotalHorasRedondeadas}
                            </TableCell>
                            <TableCell>{employee.DiaSemana}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="flex justify-between items-center mt-4">
                      <Button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                      >
                        Anterior
                      </Button>
                      <span>Página {page}</span>
                      <Button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={employeeData?.length < pageSize}
                      >
                        Siguiente
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-muted text-muted-foreground">
          <div className="container mx-auto px-4 py-4 text-center">
            <p>
              &copy; 2023 Sistema de Empleados. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

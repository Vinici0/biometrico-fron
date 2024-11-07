export interface EmployeeResponse {
    status:  string;
    message: string;
    data:    Employee[];
}

export interface Employee {
    id:                    number;
    Numero:                string;
    Nombre:                string;
    Fecha:                 string;
    Entrada:               string;
    Salida:                string;
    Departamento:          string;
    TotalHorasRedondeadas: number;
    DiaSemana:             string;
}
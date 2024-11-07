// import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// export const FilterForm = ({ onSubmit }) => {
//   const { register, handleSubmit } = useForm();

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div className="space-y-2">
//         <Label htmlFor="start-date">Fecha de Inicio</Label>
//         <Input id="start-date" type="date" {...register("startDate")} />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="end-date">Fecha de Fin</Label>
//         <Input id="end-date" type="date" {...register("endDate")} />
//       </div>
//       <Button type="submit">Aplicar Filtros</Button>
//     </form>
//   );
// };

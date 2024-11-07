// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// export const EmployeeTable = ({ data }) => {
//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Nombre</TableHead>
//           <TableHead>Fecha</TableHead>
//           <TableHead>Check-In</TableHead>
//           <TableHead>Check-Out</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {data.map((employee) => (
//           <TableRow key={employee.id}>
//             <TableCell>{employee.name}</TableCell>
//             <TableCell>
//               {new Date(employee.date).toLocaleDateString()}
//             </TableCell>
//             <TableCell>
//               {new Date(employee.checkIn).toLocaleTimeString()}
//             </TableCell>
//             <TableCell>
//               {new Date(employee.checkOut).toLocaleTimeString()}
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

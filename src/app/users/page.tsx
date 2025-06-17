"use client";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
const users = [
  { id: 1, name: "Nguyễn Văn A", email: "a@example.com", role: "Admin" },
  { id: 2, name: "Trần Thị B", email: "b@example.com", role: "Editor" },
];
export default function UsersPage() {
  return (
    <Card elevation={2} component={Paper}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Quản lý người dùng
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Tên</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Vai trò</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(u => (
                <TableRow key={u.id}>
                  <TableCell>{u.id}</TableCell>
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
} 
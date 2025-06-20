"use client";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Paper } from "@mui/material";
const users = [
  { id: 1, name: "Nguyễn Văn A", permissions: ["Xem", "Sửa"] },
  { id: 2, name: "Trần Thị B", permissions: ["Xem"] },
];
export default function UserRolePage() {
  return (
    <Card elevation={2} component={Paper} sx={{ maxWidth: 700, mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Phân quyền theo cá nhân
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Người dùng</TableCell>
                <TableCell align="center">Xem</TableCell>
                <TableCell align="center">Sửa</TableCell>
                <TableCell align="center">Xóa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  {["Xem", "Sửa", "Xóa"].map(perm => (
                    <TableCell align="center" key={perm}>
                      <Checkbox checked={user.permissions.includes(perm)} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" sx={{ mt: 2 }}>Lưu thay đổi</Button>
      </CardContent>
    </Card>
  );
} 
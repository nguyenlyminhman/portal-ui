"use client";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Paper } from "@mui/material";
const groups = [
  { id: 1, name: "Nhóm Quản trị", permissions: ["Xem", "Sửa", "Xóa"] },
  { id: 2, name: "Nhóm Biên tập", permissions: ["Xem", "Sửa"] },
];
export default function GroupRolePage() {
  return (
    <Card elevation={2} component={Paper} sx={{ maxWidth: 700, mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Phân quyền theo nhóm
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nhóm</TableCell>
                <TableCell align="center">Xem</TableCell>
                <TableCell align="center">Sửa</TableCell>
                <TableCell align="center">Xóa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups.map(group => (
                <TableRow key={group.id}>
                  <TableCell>{group.name}</TableCell>
                  {["Xem", "Sửa", "Xóa"].map(perm => (
                    <TableCell align="center" key={perm}>
                      <Checkbox checked={group.permissions.includes(perm)} />
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
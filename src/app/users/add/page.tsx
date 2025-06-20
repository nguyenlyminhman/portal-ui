"use client";
import { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Alert, Stack, MenuItem } from "@mui/material";
const roles = ["Admin", "Editor", "Viewer"];
export default function UserAddPage() {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };
  return (
    <Card elevation={2} sx={{ maxWidth: 500, mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Thêm mới người dùng
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Tên người dùng" required fullWidth />
            <TextField label="Email" type="email" required fullWidth />
            <TextField label="Vai trò" select required fullWidth>
              {roles.map(role => <MenuItem key={role} value={role}>{role}</MenuItem>)}
            </TextField>
            <Button type="submit" variant="contained" fullWidth>Thêm mới</Button>
            {success && <Alert severity="success">Thêm người dùng thành công!</Alert>}
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
} 
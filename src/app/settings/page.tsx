"use client";
import { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Alert, Stack } from "@mui/material";
export default function SettingsPage() {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };
  return (
    <Card elevation={2} sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Cài đặt
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Mật khẩu cũ" type="password" required fullWidth />
            <TextField label="Mật khẩu mới" type="password" required fullWidth />
            <Button type="submit" variant="contained" fullWidth>Đổi mật khẩu</Button>
            {success && <Alert severity="success">Đổi mật khẩu thành công (giả lập)</Alert>}
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
} 
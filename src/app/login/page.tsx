"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, TextField, Button, Alert, Stack } from "@mui/material";
export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }, 1000);
  };
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" }}>
      <Card elevation={3} sx={{ maxWidth: 350, width: "100%", borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>Đăng nhập CMS</Typography>
          <form onSubmit={onSubmit}>
            <Stack spacing={2}>
              <TextField label="Tên đăng nhập" required fullWidth autoFocus />
              <TextField label="Mật khẩu" type="password" required fullWidth />
              <Button type="submit" variant="contained" fullWidth disabled={loading}>{loading ? "Đang đăng nhập..." : "Đăng nhập"}</Button>
              {success && <Alert severity="success">Đăng nhập thành công!</Alert>}
            </Stack>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 
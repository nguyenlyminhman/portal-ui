"use client";
import { Card, CardContent, Typography } from "@mui/material";
export default function DashboardPage() {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Dashboard
        </Typography>
        <Typography color="text.secondary">
          Đây là trang tổng quan CMS (Material UI).
        </Typography>
      </CardContent>
    </Card>
  );
}

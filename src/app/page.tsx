"use client";
import { Typography } from "antd";
const { Title } = Typography;

export default function DashboardPage() {
  return (
    <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
      <Title level={3}>Dashboard</Title>
      <p>Đây là trang tổng quan CMS.</p>
    </div>
  );
}

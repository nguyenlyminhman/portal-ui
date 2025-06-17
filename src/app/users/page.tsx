"use client";
import { Table, Typography } from "antd";
const { Title } = Typography;

const dataSource = [
  { key: "1", name: "Nguyễn Văn A", email: "a@example.com", role: "Admin" },
  { key: "2", name: "Trần Thị B", email: "b@example.com", role: "Editor" },
];

const columns = [
  { title: "Tên", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Vai trò", dataIndex: "role", key: "role" },
];

export default function UsersPage() {
  return (
    <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
      <Title level={3}>Quản lý người dùng</Title>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
} 
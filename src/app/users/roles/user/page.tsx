"use client";
import { Card, Table, Checkbox, Button } from "antd";
const users = [
  { key: 1, name: "Nguyễn Văn A", permissions: ["Xem", "Sửa"] },
  { key: 2, name: "Trần Thị B", permissions: ["Xem"] },
];
const columns = [
  { title: "Người dùng", dataIndex: "name", key: "name" },
  { title: "Xem", dataIndex: "xem", key: "xem", render: (_, record) => <Checkbox checked={record.permissions.includes("Xem")} /> },
  { title: "Sửa", dataIndex: "sua", key: "sua", render: (_, record) => <Checkbox checked={record.permissions.includes("Sửa")} /> },
  { title: "Xóa", dataIndex: "xoa", key: "xoa", render: (_, record) => <Checkbox checked={record.permissions.includes("Xóa")} /> },
];
export default function UserRolePage() {
  return (
    <Card style={{ maxWidth: 700, margin: "32px auto" }}>
      <h2>Phân quyền theo cá nhân</h2>
      <Table columns={columns} dataSource={users} pagination={false} rowKey="key" />
      <Button type="primary" style={{ marginTop: 16 }}>Lưu thay đổi</Button>
    </Card>
  );
} 
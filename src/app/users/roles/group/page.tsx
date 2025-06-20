"use client";
import { Card, Table, Checkbox, Button } from "antd";
const groups = [
  { key: 1, name: "Nhóm Quản trị", permissions: ["Xem", "Sửa", "Xóa"] },
  { key: 2, name: "Nhóm Biên tập", permissions: ["Xem", "Sửa"] },
];
const columns = [
  { title: "Nhóm", dataIndex: "name", key: "name" },
  { title: "Xem", dataIndex: "xem", key: "xem", render: (_, record) => <Checkbox checked={record.permissions.includes("Xem")} /> },
  { title: "Sửa", dataIndex: "sua", key: "sua", render: (_, record) => <Checkbox checked={record.permissions.includes("Sửa")} /> },
  { title: "Xóa", dataIndex: "xoa", key: "xoa", render: (_, record) => <Checkbox checked={record.permissions.includes("Xóa")} /> },
];
export default function GroupRolePage() {
  return (
    <Card style={{ maxWidth: 700, margin: "32px auto" }}>
      <h2>Phân quyền theo nhóm</h2>
      <Table columns={columns} dataSource={groups} pagination={false} rowKey="key" />
      <Button type="primary" style={{ marginTop: 16 }}>Lưu thay đổi</Button>
    </Card>
  );
} 
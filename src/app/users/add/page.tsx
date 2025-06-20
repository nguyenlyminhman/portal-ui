"use client";
import { useState } from "react";
import { Form, Input, Button, Select, Alert, Card } from "antd";
const { Option } = Select;
const roles = ["Admin", "Editor", "Viewer"];
export default function UserAddPage() {
  const [success, setSuccess] = useState(false);
  const onFinish = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };
  return (
    <Card style={{ maxWidth: 500, margin: "32px auto" }}>
      <h2>Thêm mới người dùng</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Tên người dùng" rules={[{ required: true, message: "Vui lòng nhập tên" }]}> 
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ" }]}> 
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Vai trò" rules={[{ required: true, message: "Vui lòng chọn vai trò" }]}> 
          <Select placeholder="Chọn vai trò">
            {roles.map(role => <Option key={role} value={role}>{role}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Thêm mới</Button>
        </Form.Item>
        {success && <Alert type="success" message="Thêm người dùng thành công!" showIcon />}
      </Form>
    </Card>
  );
} 
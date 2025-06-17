"use client";
import { Typography, Form, Input, Button, message } from "antd";
const { Title } = Typography;

export default function SettingsPage() {
  const onFinish = (values: Record<string, string>) => {
    console.log("Change password values:", values);
    message.success("Đổi mật khẩu thành công (giả lập)");
  };
  return (
    <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
      <Title level={3}>Cài đặt</Title>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item name="oldPassword" label="Mật khẩu cũ" rules={[{ required: true, message: "Vui lòng nhập mật khẩu cũ" }]}> 
          <Input.Password />
        </Form.Item>
        <Form.Item name="newPassword" label="Mật khẩu mới" rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới" }]}> 
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Đổi mật khẩu</Button>
        </Form.Item>
      </Form>
    </div>
  );
} 
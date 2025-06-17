"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Typography, message } from "antd";
const { Title } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = (values: Record<string, string>) => {
    console.log("Login values:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("loggedIn", "true");
      message.success("Đăng nhập thành công!");
      router.push("/");
    }, 1000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    }}>
      <div style={{ maxWidth: 350, width: "100%", padding: 32, background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)", position: "relative" }}>
        <Title level={2} style={{ textAlign: "center" }}>Đăng nhập CMS</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="Tên đăng nhập" rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}> 
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}> 
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>Đăng nhập</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
} 
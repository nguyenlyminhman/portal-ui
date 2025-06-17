"use client";
import { ConfigProvider, Layout, Menu, Button } from "antd";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let selectedKey = "1";
  if (pathname.startsWith("/users")) selectedKey = "2";
  else if (pathname.startsWith("/settings")) selectedKey = "3";

  const [loggedIn, setLoggedIn] = useState(true);
  const router = useRouter();
  const handleLogout = () => {
    setLoggedIn(false);
    router.push("/login");
  };

  if (!loggedIn) {
    return <>{children}</>;
  }

  return (
    <ConfigProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div style={{ height: 32, margin: 16, background: "rgba(255,255,255,0.2)", borderRadius: 6, textAlign: "center", color: "#fff", lineHeight: "32px" }}>
            CMS Logo
          </div>
          <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} items={[
            { key: "1", label: <Link href="/">Dashboard</Link> },
            { key: "2", label: <Link href="/users">Quản lý người dùng</Link> },
            { key: "3", label: <Link href="/settings">Cài đặt</Link> },
          ]} />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0, textAlign: "right" }}>
            <Button type="link" onClick={handleLogout} style={{ marginRight: 24 }}>
              Đăng xuất
            </Button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>CMS ©2024 Created by Ant Design</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
} 
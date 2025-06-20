"use client";
import { ConfigProvider, Layout, Menu, Button } from "antd";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let selectedKey = "1";
  if (pathname === "/users") selectedKey = "2.1";
  else if (pathname === "/users/add") selectedKey = "2.2";
  else if (pathname === "/users/roles/group") selectedKey = "2.3.1";
  else if (pathname === "/users/roles/user") selectedKey = "2.3.2";
  else if (pathname.startsWith("/users")) selectedKey = "2";
  else if (pathname.startsWith("/settings")) selectedKey = "3";

  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, [pathname]);

  const router = useRouter();
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
    router.push("/login");
  };

  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setCollapsed(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!loggedIn) {
    return <>{children}</>;
  }

  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, label: <Link href="/">Dashboard</Link> },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Quản lý người dùng",
      children: [
        { key: "2.1", label: <Link href="/users">Danh sách</Link> },
        { key: "2.2", label: <Link href="/users/add">Thêm mới</Link> },
        {
          key: "2.3",
          label: "Phân quyền",
          children: [
            { key: "2.3.1", label: <Link href="/users/roles/group">Theo nhóm</Link> },
            { key: "2.3.2", label: <Link href="/users/roles/user">Theo cá nhân</Link> },
          ],
        },
      ],
    },
    { key: "3", icon: <SettingOutlined />, label: <Link href="/settings">Cài đặt</Link> },
  ];

  return (
    <ConfigProvider>
      <Layout style={{ minHeight: "100vh" }}>
        {mobile ? null : (
          <Sider
            breakpoint="lg"
            collapsedWidth={mobile ? 0 : 80}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            trigger={null}
          >
            <div style={{ height: 32, margin: 16, background: "rgba(255,255,255,0.2)", borderRadius: 6, textAlign: "center", color: "#fff", lineHeight: "32px" }}>
              CMS Logo
            </div>
            <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} items={menuItems} />
          </Sider>
        )}
        <Layout>
          <Header style={{ background: "#fff", padding: 0, textAlign: "right", display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, textAlign: "left" }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: 20, marginLeft: 16, display: mobile ? "none" : "inline-block" }}
              />
              {mobile && (
                <Button
                  type="text"
                  icon={<MenuUnfoldOutlined />}
                  onClick={() => setCollapsed(true)}
                  style={{ fontSize: 20, marginLeft: 16 }}
                />
              )}
            </div>
            <Button type="link" onClick={handleLogout} style={{ marginRight: 24 }}>
              Đăng xuất
            </Button>
          </Header>
          {mobile && collapsed && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 240,
                height: "100vh",
                background: "#001529",
                zIndex: 1000,
                transition: "transform 0.3s",
                boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ height: 32, margin: 16, background: "rgba(255,255,255,0.2)", borderRadius: 6, textAlign: "center", color: "#fff", lineHeight: "32px" }}>
                CMS Logo
              </div>
              <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[selectedKey]}
                items={menuItems}
                style={{ borderRight: 0 }}
                onClick={() => setCollapsed(false)}
                inlineIndent={24}
                className="custom-ant-menu"
              />
            </div>
          )}
          <Content style={{ margin: "24px 16px 0" }}>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>CMS ©2024 Created by Ant Design</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
} 
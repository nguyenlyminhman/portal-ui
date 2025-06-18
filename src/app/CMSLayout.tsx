"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  Divider,
  CssBaseline,
  ThemeProvider,
  createTheme,
  ListItemButton,
  Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;
const miniDrawerWidth = 56;

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#f5f6fa" },
  },
});

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, href: "/" },
  { text: "Quản lý người dùng", icon: <PeopleIcon />, href: "/users" },
  { text: "Cài đặt", icon: <SettingsIcon />, href: "/settings" },
];

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" ? localStorage.getItem("loggedIn") === "true" : true
  );

  React.useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopDrawerToggle = () => {
    setDesktopOpen(!desktopOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
    router.push("/login");
  };

  if (pathname === "/login") return <>{children}</>;
  if (!loggedIn) return null;

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: desktopOpen ? "space-between" : "center", px: 1 }}>
        {desktopOpen && (
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, letterSpacing: 2 }}>
            CMS
          </Typography>
        )}
        <IconButton onClick={handleDesktopDrawerToggle} sx={{ display: { xs: "none", lg: "inline-flex" } }}>
          {desktopOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <Link href={item.href} passHref legacyBehavior>
              <Tooltip title={!desktopOpen ? item.text : ""} placement="right" arrow>
                <ListItemButton
                  component="a"
                  selected={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                  onClick={() => setMobileOpen(false)}
                  sx={{ justifyContent: desktopOpen ? "flex-start" : "center", px: 2, minHeight: 48 }}
                >
                  <ListItemIcon sx={{ minWidth: 0, mr: desktopOpen ? 2 : "auto", justifyContent: "center" }}>{item.icon}</ListItemIcon>
                  {desktopOpen && <ListItemText primary={item.text} />}
                </ListItemButton>
              </Tooltip>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Tooltip title={!desktopOpen ? "Đăng xuất" : ""} placement="right" arrow>
            <ListItemButton onClick={handleLogout} sx={{ justifyContent: desktopOpen ? "flex-start" : "center", px: 2, minHeight: 48 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: desktopOpen ? 2 : "auto", justifyContent: "center" }}><LogoutIcon color="error" /></ListItemIcon>
              {desktopOpen && <ListItemText primary="Đăng xuất" primaryTypographyProps={{ color: "error" }} />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          color="primary"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            transition: (theme) =>
              theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            ml: { lg: desktopOpen ? `${drawerWidth}px` : `${miniDrawerWidth}px` },
            width: { lg: `calc(100% - ${desktopOpen ? drawerWidth : miniDrawerWidth}px)` },
          }}
        >
          <Toolbar>
            {!desktopOpen && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setDesktopOpen(true)}
                sx={{ mr: 2, display: { xs: "none", lg: "inline-flex" } }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              CMS
            </Typography>
            <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogout} sx={{ display: { xs: "none", lg: "inline-flex" } }}>
              Đăng xuất
            </Button>
          </Toolbar>
        </AppBar>
        {/* Drawer cho mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Mini variant Drawer cho desktop */}
        <Drawer
          variant="permanent"
          open={desktopOpen}
          sx={{
            display: { xs: "none", lg: "block" },
            width: desktopOpen ? drawerWidth : miniDrawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            transition: (theme) => theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            '& .MuiDrawer-paper': {
              width: desktopOpen ? drawerWidth : miniDrawerWidth,
              boxSizing: 'border-box',
              overflowX: 'hidden',
              transition: (theme) => theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{
          flexGrow: 1,
          p: 0,
          minHeight: "100vh",
          bgcolor: "background.default",
          ml: { xs: 0, lg: desktopOpen ? `${drawerWidth}px` : `${miniDrawerWidth}px` },
          maxWidth: { xl: '1200px', lg: '100vw' },
          mx: { xl: 'auto', lg: 0 },
          transition: (theme) =>
            theme.transitions.create(['margin-left', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
} 
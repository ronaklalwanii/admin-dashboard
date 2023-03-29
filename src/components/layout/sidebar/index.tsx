import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

import * as Icon from "@mui/icons-material";

import config from "@/configs/themeConfig";

interface SidebarProps {
  navItems: any[];
}

const Sidebar = ({ navItems }: SidebarProps) => {
  const [hover, setHover] = useState(false);
  const [opened, setOpened] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();

  let hoverFlag = false;
  const theme = useTheme();
  const belowMD = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth =
    collapsed && !hover ? config.collapsedSidebarWidth : config.sidebarWidth;

  const drawerProps = (): DrawerProps => {
    if (belowMD) {
      return {
        open: opened,
        variant: "temporary",
        onClose: () => setOpened(false),
        ModalProps: { keepMounted: true },
        sx: {
          "& .MuiDrawer-paper": {
            width: config.sidebarWidth,
          },
        },
      };
    } else {
      return {
        open: true,
        variant: "permanent",
        PaperProps: { elevation: 1 },
        onMouseLeave: () => (collapsed ? setHover(false) : null),
        onMouseEnter: () => {
          if (hoverFlag || collapsed) {
            setHover(true);
            hoverFlag = false;
          }
        },
        sx: {
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            overflow: "hidden",
            transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          },
        },
      };
    }
  };

  const renderMenuItems = () => {
    return navItems.map((item) => {
      const MenuItemIcon = Icon[item.icon] || Icon.CircleOutlined;

      return (
        <ListItem disablePadding key={item.title}>
          <ListItemButton
            component={Link}
            href={item.url}
            selected={item.url === router.asPath}
          >
            <ListItemIcon>
              <MenuItemIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      );
    });
  };
  return (
    <>
      <Box
        sx={{
          width: { xs: drawerWidth },
          display: {
            xs: "none",
            md: "block",
          },
          transition: "width 0.3s ease",
        }}
      />
      <Box
        component="nav"
        sx={{
          position: "fixed",
          zIndex: 1101,
          width: { sm: drawerWidth },
          display: "flex",
        }}
      >
        <Drawer {...drawerProps()}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon.Abc sx={{ mr: 1, height: 50, width: 50 }} />
            {collapsed && !hover ? null : (
              <>
                <Typography variant="h6">Admin Panel</Typography>
                <IconButton
                  sx={{ ml: "auto" }}
                  onClick={() => setCollapsed((prev) => !prev)}
                >
                  {collapsed ? <Icon.ChevronRight /> : <Icon.ChevronLeft />}
                </IconButton>
              </>
            )}
          </Box>
          {navItems && navItems.length ? (
            <List>{renderMenuItems()}</List>
          ) : null}
        </Drawer>

        <Box sx={{ mt: 1.5, display: { xs: "block", md: "none" } }}>
          <IconButton onClick={() => setOpened((prev) => !prev)}>
            <Icon.MenuRounded />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

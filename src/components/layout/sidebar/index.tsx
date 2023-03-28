import { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

import {
  ChevronLeft,
  ChevronRight,
  MenuRounded,
  Dashboard,
} from "@mui/icons-material";

import config from "@/configs/themeConfig";

const Sidebar = () => {
  const [hover, setHover] = useState(false);
  const [opened, setOpened] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

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
        onclose: () => setOpened(false),
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
              pl: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Dashboards
            <IconButton onClick={() => setCollapsed((prev) => !prev)}>
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            <ListItemButton
              //   component={Link}
              //   to="/"
              //   selected={selectedKey === "/"}
              onClick={() => {
                setOpened(false);
              }}
              sx={{
                pl: 2,
                py: 1,
                "&.Mui-selected": {
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  backgroundColor: "transparent",
                },
                justifyContent: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  minWidth: 36,
                  color: "primary.contrastText",
                }}
              >
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary={"Menu Item 1"} />
            </ListItemButton>
          </Box>
        </Drawer>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: "64px",
            left: "0px",
            borderRadius: "0 6px 6px 0",
            // bgcolor: "secondary.main",
            zIndex: 1199,
            width: "36px",
          }}
        >
          <IconButton
            sx={{ color: "#fff", width: "36px" }}
            onClick={() => setOpened((prev) => !prev)}
          >
            <MenuRounded />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

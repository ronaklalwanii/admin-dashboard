import Box from "@mui/material/Box";

import LayoutNavbar from "./navbar";
import LayoutSidebar from "./sidebar";

import navigationItems from "@/configs/navigation";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="row">
      <LayoutSidebar navItems={navigationItems} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100vh",
        }}
      >
        <LayoutNavbar />
        <Box
          component="main"
          sx={{
            p: { xs: 1, md: 2, lg: 3 },
            flexGrow: 1,
            bgcolor: (theme) => theme.palette.background.default,
          }}
        >
          {children}
        </Box>
        {/* {Footer && <Footer />} */}
      </Box>
      {/* {OffLayoutArea && <OffLayoutArea />} */}
    </Box>
  );
};

export default Layout;

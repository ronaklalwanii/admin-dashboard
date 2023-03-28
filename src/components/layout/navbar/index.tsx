import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => (
  <AppBar color="default" position="sticky" elevation={1}>
    <Toolbar>
      <Stack
        direction="row"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <IconButton
      onClick={() => {
        setMode();
      }}
    >
      {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton> */}
        <Stack direction="row" gap="16px" alignItems="center">
          <Avatar src="/img/user-avatar.png" alt="user-avatar" />
          <Typography variant="subtitle2">Kilmister</Typography>
        </Stack>
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Navbar;

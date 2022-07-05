import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { auth, storage } from "../../helpers/firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [profilePhoto, setProfilePhoto] = React.useState("/");

  React.useEffect(() => {
    if (loggedIn) {
      const profilePhotoRef = ref(
        storage,
        `gs://sda-news-5408b.appspot.com/users/${auth.currentUser.uid}/profile`
      );
      getDownloadURL(profilePhotoRef)
        .then((url) => {
          setProfilePhoto(url);
        })
        .catch((err) => {
          setProfilePhoto(null);
        });
    }
  }, [loggedIn]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 100,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SDA NEWS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography textAlign="center" onClick={handleCloseNavMenu}>
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/search" style={{ textDecoration: "none" }}>
                  <Typography textAlign="center" onClick={handleCloseNavMenu}>
                    Search
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Monospace",
              fontWeight: 100,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SDA NEWS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/search" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Search
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link
              to={`${loggedIn ? "/user" : "/login"}`}
              style={{ textDecoration: "none" }}
            >
              {loggedIn ? (
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
                </IconButton>
              ) : (
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Log in
                </Button>
              )}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

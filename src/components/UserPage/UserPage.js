import React from "react";
import Typography from "@mui/material/Typography";
import { auth } from "../../helpers/firebaseConfig";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
const UserPage = ({ loggedIn }) => {
  return (
    <>
      {loggedIn && (
        <>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              my: "1rem",
              borderBottom: "1px solid #1976d2",
              pb: ".5rem",
            }}
          >
            Your profile
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1rem",
              my: "1rem",
              fontFamily: "Roboto",
              mx: "auto",
              mb: "100px",
            }}
            algin="center"
          >
            Your email: {auth.currentUser.email}
          </Typography>
          <ProfilePhotoForm />
          <Button
            variant="outlined"
            onClick={() => signOut(auth)}
            sx={{ display: "block", mx: "auto", my: "1rem" }}
          >
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default UserPage;

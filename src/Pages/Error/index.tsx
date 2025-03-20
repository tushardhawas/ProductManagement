import { Paper, Typography, Box } from "@mui/material";

const Error = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8d7da",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#721c24",
          color: "#ffffff",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
           Restricted Zone 
        </Typography>
        <Typography variant="body1" mt={1}>
          You have entered a restricted area. Please go back.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Error;

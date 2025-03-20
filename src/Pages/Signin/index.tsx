import { FC, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password should be at least 6 characters long"),
});

const Signin: FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  let navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validateData = signInSchema.safeParse(formData);

    if (!validateData.success) {
      console.log(validateData.error)
      // Extract errors and update state
      const newErrors: { email?: string; password?: string } = {};
      validateData.error.issues.forEach((issue) => {
        if (issue.path[0] === "email") newErrors.email = issue.message;
        if (issue.path[0] === "password") newErrors.password = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});
    console.log("handle submit");
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ padding: 3, marginTop: 10, borderRadius: 4 }}>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            type="email"
            placeholder="@email.com"
            fullWidth
            required
            autoFocus
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2, borderRadius: 4 }}
          />
          <TextField
            type="password"
            placeholder="password"
            fullWidth
            required
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 2, borderRadius: 4 }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signin;

import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import { AuthContext } from "src/auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loader from "components/Loader";
import { FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "components/FormInputText";

export default function AdminLogin(props) {
  const [error, setError] = React.useState(false);
  const { loginUser, user } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: { email: "", password: "" },
  });

  if (user) {
    navigate("/admin", { replace: "true" });
  }

  const onsubmit = async (data) => {
    try {
      setError(false)
      setLoading(true);
      loginUser(data?.email, data?.password)
        .then((result) => {
          reset();
          setLoading(false);
          navigate("/admin", { replace: "true" });
        })
        .catch((error) => {
          setError(true);
          console.log(error);
          setLoading(false);
          console.log(error.message);
        });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      height="100vh"
    >
      <Card variant="outlined" style={{ padding: "30px", width: 350 }}>
        {/* <SitemarkIcon /> */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            textAlign: "center",
          }}
        >
          Sign in
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: 3,
            gap: 3,
          }}
        >
          <FormInputText
            name="email"
            control={control}
            label="Email"
            size="big"
            message="Invalid Email"
            containerSize={{ xs: 12 }}
            inputRef={{
              ...register("email", {
                required: true,
                pattern: `^/\S+@\S+\.\S+/$`,
              }),
            }}
          />
          <FormInputText
            name="password"
            control={control}
            label="Password"
            placeholder="••••••"
            containerSize={{ xs: 12 }}
            size="big"
            type="password"
            message="Invalid Password"
            inputRef={{
              ...register("password", {
                required: true,
              }),
            }}
          />
          {error && (
            <FormHelperText
              error="true"
              style={{ margin: "6px 0", textAlign: "center" }}
            >
              Invalid credentials!
            </FormHelperText>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit(onsubmit)}
          >
            Sign in
          </Button>
        </Grid>
      </Card>
      {loading && <Loader />}
    </Grid>
  );
}

import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Link,
  Avatar,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FC } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../FormInput/FormInput.tsx";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";

// 👇 SignUp Schema with Zod
const signupSchema = object({
  name: string().min(1, "Name is required").max(70),
  email: string().min(1, "Email is required").email("Email is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

// 👇 Infer the Schema to get TypeScript Type
type ISignUp = TypeOf<typeof signupSchema>;

interface SignupPageProps {
  handleSubmit: (values: ISignUp) => void;
}

const SignupPage: FC<SignupPageProps> = ({ handleSubmit }) => {
  // 👇 Default Values
  const defaultValues: ISignUp = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  // 👇 Object containing all the methods returned by useForm
  const methods = useForm<ISignUp>({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });

  // 👇 Form Handler
  const onSubmitHandler: SubmitHandler<ISignUp> = (values: ISignUp) => {
    handleSubmit(values);
  };

  // 👇 Returned JSX
  return (
    <Container
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: { xs: "#fff", md: "#f4f4f4" } }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid
          item
          sx={{ maxWidth: "70rem", width: "100%", backgroundColor: "#fff" }}
        >
          <Grid
            container
            sx={{
              boxShadow: { sm: "0 0 5px #ddd" },
              py: "6rem",
              px: "1rem",
            }}
          >
            <FormProvider {...methods}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  mb: "1.5rem",
                  pb: { sm: "3rem" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    m: 2,
                    bgcolor: "secondary.main",
                  }}
                >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
              </Box>
              ;
              <Grid
                item
                container
                justifyContent="space-between"
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: "45rem" },
                  marginInline: "auto",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderRight: { sm: "1px solid #ddd" } }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ paddingRight: { sm: "3rem" } }}
                    onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <Typography
                      variant="h6"
                      component="h1"
                      sx={{ textAlign: "center", mb: "1.5rem" }}
                    >
                      Create new your account
                    </Typography>

                    <FormInput
                      label="Name"
                      type="text"
                      name="name"
                      focused
                      required
                    />
                    <FormInput
                      label="Enter your email"
                      type="email"
                      name="email"
                      focused
                      required
                    />
                    <FormInput
                      type="password"
                      label="Password"
                      name="password"
                      required
                      focused
                    />
                    <FormInput
                      type="password"
                      label="Confirm Password"
                      name="passwordConfirm"
                      required
                      focused
                    />

                    <LoadingButton
                      loading={false}
                      type="submit"
                      variant="contained"
                      sx={{
                        py: "0.8rem",
                        mt: 2,
                        width: "80%",
                        marginInline: "auto",
                      }}
                    >
                      Sign Up
                    </LoadingButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{}}>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      paddingLeft: { sm: "3rem" },
                      mb: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    Sign up using another provider:
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{ paddingLeft: { sm: "3rem" }, rowGap: "1rem" }}
                  ></Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Stack sx={{ mt: "3rem", textAlign: "center" }}>
                  <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Typography>
                </Stack>
              </Grid>
            </FormProvider>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupPage;
"use client";
import { authService } from "@/fsd/shared/api";
import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
const RegistrationForm = () => {
  const onClickRegistration = async () => {
    try {
      const resp = await authService.register("2", "2", "3");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="flex flex-col items-center justify-center border-white border gap-3 min-w-[320px]"
    >
      <Box className="flex flex-col items-center justify-center">
        <FormControl variant="filled">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" placeholder="Name" />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-simple">Login</InputLabel>
          <Input id="component-simple" placeholder="Login" />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input id="component-simple" placeholder="Password" />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-simple">Repeat password</InputLabel>
          <Input id="component-simple" placeholder="Repeat password" />
        </FormControl>
      </Box>
      <Box className="flex flex-row gap-2 px-4 pb-4">
        <Button variant="contained" onClick={onClickRegistration}>
          Registration
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;

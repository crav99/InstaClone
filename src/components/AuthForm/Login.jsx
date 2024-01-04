import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Input placeholder="Email" fontSize={14} type="email" value={inputs.email} size={"sm"} onChange={(value) => setInputs({ ...inputs, email: value.target.value })} />
      <Input placeholder="Password" fontSize={14} type="password" value={inputs.password} size={"sm"} onChange={(value) => setInputs({ ...inputs, password: value.target.value })} />
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log In
      </Button>
    </>
  );
}

export default Login;

import { useState } from "react";
import { Button, TextView, InputView } from "../../core-components";
import { type } from "os";

type RegisterError = {
  name?: string;
  email?: string;
  password?: string;
  cnfpswd?: string;
};

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cnfpswd, setConfPswd] = useState<string>("");
  const [error, setError] = useState<RegisterError>({});

  function onRegister() {

    let err = {}
    if(name.length === 0){
      err = { ...error, name: "should not empty" }
    }

    if(name.length > 8){
      err = { ...error, name: "length should not exceed 8" }
    }

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.length === 0 || !filter.test(email)){
      err = { ...error, email: "enter the valid email" } 
    }
  
    
    if(password.length == 0 || password.length > 8 ){
      err = { ...error, password: "Enter vaild password and not exceed 8 chars" } 
    }

  

    if (password !== cnfpswd) {
      err = { ...error, cnfpswd: "password not match" }
    } 

    if(Object.keys(err).length > 0){
      setError(err)
      setTimeout(() => {
        setError({});
      }, 5000);
      return;
    }

    alert("Your are register with us.")

    setName("");
    setEmail("");
    setConfPswd("");
    setPassword("");
  }

  return (
    <div
      style={{
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        backgroundSize: "cover",
        backgroundImage:
          'url("https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=")',
      }}
    >
      <div
        style={{
          //  backgroundImage:'linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef),linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef)',
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          marginTop: "20vh",
          marginBottom: "20vh",
        }}
      >
        <div
          style={{
            width: "30%",
            textAlign: "center",
            color: "white",
            justifyContent: "space-between",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundSize: "cover",
            backgroundImage: 'url("https://freedesignfile.com/upload/2017/06/Pretty-girl-portrait-Stock-Photo-02.jpg")',
          }}
        >
          <TextView fontSize={25}>SIGN UP</TextView>
          <TextView>Privacy Policy and Terms of Condition</TextView>
        </div>
        <div
          style={{ width: "40%", backgroundColor: "white", flexDirection: "column", display: "flex", padding: "10px" }}
        >
          <InputView
            name={"username"}
            type={"text"}
            placeholder="Enter username"
            title={"Username"}
            value={name}
            onTextChange={(name) => {
              setName(name);
            }}
            error={error?.name}
          />
          <InputView
            name={"email"}
            type={"email"}
            title={"Email"}
            placeholder="Enter email"
            value={email}
            onTextChange={(email) => setEmail(email)}
            error={error?.email}
          />
          <InputView
            name={"password"}
            type={"password"}
            title={"Password"}
            placeholder="Enter password"
            value={password}
            onTextChange={(password) => setPassword(password)}
            error={error?.password}
          />
          <InputView
            name={"com-password"}
            type={"password"}
            title={"Confirm Password"}
            placeholder="Enter password"
            value={cnfpswd}
            onTextChange={(cnfpswd) => setConfPswd(cnfpswd)}
            error={error?.cnfpswd}
          />
          <div style={{ flexDirection: "row", display: "flex", justifyContent: "center", padding: "10px" }}>
            <Button varient="contained" size="lg" onPress={onRegister}>
              Register
            </Button>
            <Button varient="text" size="lg">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

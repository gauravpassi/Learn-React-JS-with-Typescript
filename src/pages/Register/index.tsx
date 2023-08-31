import { useState } from "react";
import { Button, TextView, InputView } from "../../core-components";

export default function Register() {

  const [name, setName] = useState<string>("User");


  return (
    <div
      style={{
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        backgroundSize: 'cover',
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
            backgroundSize: 'cover',
            backgroundImage:
              'url("https://freedesignfile.com/upload/2017/06/Pretty-girl-portrait-Stock-Photo-02.jpg")',
        
            
          }}
        >
          <TextView fontSize={25}>SIGN UP</TextView>
          <TextView>Privacy Policy and Terms of Condition</TextView>
        </div>
        <div
          style={{ width: "40%", backgroundColor: "white", flexDirection: "column", display: "flex", padding: "10px" }}
        >
          <InputView name={"username"} type={'text'} title={"Username"} value={name} onTextChange={(name)=>{ setName(name)}} />
          <InputView name={"email"} type={'email'} title={"Email"} />
          <InputView name={"password"} type={'password'} title={"Password"} />
          <InputView name={"com-password"} type={'password'}  title={"Confirm Password"} />
          <div style={{ flexDirection: "row", display: "flex", justifyContent: "center", padding: "10px" }}>
            <Button varient="contained" size="lg" onPress={()=>{
              alert(name)
            }}>
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

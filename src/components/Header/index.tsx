import { Button, TextView } from "../../core-components";

export default function Header() {
  return (
    <div style={{ height: 100, background: "#c1c1c1" }}>
      <div style={{textAlign:'center'}}>
        <TextView fontSize={35} color="red">Fun With Dhruvit</TextView>
      </div>
      <div style={{flexDirection:'row', display:'flex'}}>
      <div style={{ marginLeft:'10px'}} >
        <Button varient="text">LOGO</Button>
      </div>
      <div style={{flexDirection:'row', display:'flex', justifyContent:'right', width:'90%'}}>
      <Button varient="text" size="lg">Home</Button>
        <Button varient="text" size="lg">About Us</Button>
        <Button varient="text" size="lg">Our Services</Button>
        <Button varient="text" size="lg">Portfolio</Button>
        <Button varient="text" size="lg">Contact</Button>
        <Button varient="outlined" size="lg">Login</Button>
        <Button varient="contained" size="lg">SignUp</Button>
        </div>
      </div>
    </div>
  );
}

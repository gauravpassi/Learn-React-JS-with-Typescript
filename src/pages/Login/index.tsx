import { url } from "inspector";
import { Button, InputView, TextView } from "../../core-components";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundImage:
          'url("https://wp-mktg.prod.getty1.net/istockcontentredesign/wp-content/uploads/sites/5/bfi_thumb/2021_iStock_LatestBGTrends_Hero.jpg-37hacs394rfnlye6q17b1otbsizghpa9fhni65z6lb6gploak.jpeg")',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "white",
          margin: "5px",
          height: "80vh",
        }}
      >
        <div
          style={{
            backgroundColor: "GrayText",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            padding: "5px",
            margin: "15px",
          }}
        >
          <div style={{ flexDirection: "column", display: "flex" }}>
            <TextView>LOGIN</TextView>
            <TextView>Doesn't have an account yet? Sign Up</TextView>
          </div>
          <div style={{ flexDirection: "column", display: "flex", width: "70%" }}>
            <InputView name={"email"} type={'email'}  title="Email Address"></InputView>
            <TextView>Remember Me</TextView>
            <Button varient="contained">Login</Button>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2kiIIUjfhIlFjjei6vHQo3MyuXE7AO2N92NmtooRP1Hae7wH0qyTRTnrr48wtUkzhvg&usqp=CAU")',
            display: "flex",
            flexDirection: "column",
            backgroundSize: "cover",
            width: '100%'
          }}
        />
      </div>
    </div>
  );
}

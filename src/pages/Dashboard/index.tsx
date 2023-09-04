import DashboardSVG from "../../assets/svg/backgroud";
import MobileSVG from "../../assets/svg/mobile";
import { Footer, Header } from "../../components";
import { Button, TextView, InputView } from "../../core-components";
import Register from "../Register/index";

export default function Dashboard() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
        <div style={{ flexDirection: "column", display: "flex", width: "50%", justifyContent: "center" }}>
          <div style={{ lineHeight: "40px", letterSpacing: "1px", color: "091133", margin: "30px" }}>
            <TextView fontSize={50}>INTRODUCE YOUR PRODUCT QUICKLY & EFFECTIVELY</TextView>
          </div>
          <div style={{ letterSpacing: "0px", color: "505F98", margin: "10px" }}>
            <TextView fontSize={18}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </TextView>
          </div>
          <div style={{ flexDirection: "row", display: "flex", margin: "20px", justifyContent: "center" }}>
            <Button varient="contained" size="lg">
              hello
            </Button>
            <Button varient="contained" size="lg">
              hello
            </Button>
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <DashboardSVG />
        </div>
      </div>

      <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
        <div style={{ flexDirection: "column", display: "flex", width: "50%", justifyContent: "center" }}>
          <div style={{ lineHeight: "40px", letterSpacing: "1px", color: "091133", margin: "30px" }}>
            <TextView fontSize={50}>Light Fast And Powerful</TextView>
          </div>
          <div style={{ letterSpacing: "0px", color: "6F7CB2", margin: "10px" }}>
            <TextView fontSize={18}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </TextView>
          </div>
          <div style={{ flexDirection: "row", display: "flex", margin: "20px", justifyContent: "center" }}>
            <Button varient="contained" size="lg">
              hello
            </Button>
            <Button varient="contained" size="lg">
              hello
            </Button>
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <MobileSVG />
        </div>
      </div>

      <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
        <div style={{ width: "45%" }}>
          <MobileSVG />
        </div>
        <div style={{ flexDirection: "column", display: "flex", width: "50%", justifyContent: "center" }}>
          <div style={{ lineHeight: "40px", letterSpacing: "1px", color: "091133", margin: "30px" }}>
            <TextView fontSize={50}>Light Fast And Powerful</TextView>
          </div>
          <div style={{ letterSpacing: "0px", color: "6F7CB2", margin: "10px" }} className="w-[70%] bg-slate-500">
            <TextView fontSize={18}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </TextView>
          </div>
        </div>
      </div>
      <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
        <div style={{ width: "45%" }}>
          <MobileSVG />
        </div>
        <div style={{ flexDirection: "column", display: "flex", width: "50%", justifyContent: "center" }}>
          <div style={{ lineHeight: "40px", letterSpacing: "1px", color: "091133", margin: "30px" }}>
            <TextView fontSize={50}>Light Fast And Powerful</TextView>
          </div>
          <div style={{ letterSpacing: "0px", color: "6F7CB2", margin: "10px" }}>
            <TextView fontSize={18}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </TextView>
          </div>
          <div style={{ flexDirection: "row", display: "flex", margin: "20px", justifyContent: "center" }}>
            <Button varient="contained" size="lg">
              hello
            </Button>
          </div>
        </div>
      </div>

      <div style={{ flexDirection: "column", display: "flex", width: "100%", alignItems: "center", margin: "20px" }}>
        <div style={{ lineHeight: "40px", letterSpacing: "1px", color: "091133" }}>
          <TextView fontSize={50}>Light Fast And Powerful</TextView>
        </div>
        <div style={{ letterSpacing: "0px", color: "6F7CB2", margin: "10px", justifyContent: "center", width: "30%" }}>
          <TextView fontSize={18}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </TextView>
        </div>
        <div style={{ flexDirection: "row", display: "flex", margin: "20px", justifyContent: "center" }}>
          <Button varient="contained" size="lg">
            hello
          </Button>
        </div>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

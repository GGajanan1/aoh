import Logo from "../Components/HeaderComponents/Logo";
import Name from "../Components/HeaderComponents/Name";
import swayam from "../assets/swayam.png";
import aohLogo from "../assets/aohLogo.png";

export default function Head() {
    return (
        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Logo url={swayam} />
            <Logo url={aohLogo} />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "8rem" }}>
                <Name name={"HOME"} />
                <Name name={"ABOUT"} />
                <Name name={"BLOGS"} />
                <Name name={"TEAM"} />
                <Name name={"EVENTS"} />
                <Name name={"PODCAST"} />
                <Name name={"GET INVOLVED"} />
                <Name name={"CONTACT"} />
            </div>
        </div>
    );
}

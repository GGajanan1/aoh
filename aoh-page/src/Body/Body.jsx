import BodyHeader from "./BodyHeader"
import NameTemplate from "./NameTemplate";
import './Body.css';
export default function Body(){
    return(
        <div>
            <BodyHeader/>
            <div className="flex-container">
            <NameTemplate  name={"Deepthi Raavula"} post={"CEO, WeHub"} slogan={"really good setup, nice set of people"}/>
            <NameTemplate name={"Suraj Pusarla"} post={"Founder, The Rage Rooms"} slogan={"great work very productive"}/>
            <NameTemplate name={"Charan Lakkaraju"} post={"Founder, Student Tribe"} slogan={"strong setup, good work"}/>
            <NameTemplate name={"Niharika Gollapalli"} post={"Founder, Eat Confetti"} slogan={""}/>
            <NameTemplate name={"Manasa Varanasi"} post={"Miss India, 2020"} slogan={"creating fun and educative content, great initiative by swayam"}/>
            </div>
        </div>
    );

}
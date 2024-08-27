import Template from "./Template";
import bgAoh from "../assets/bgAoh.png";

export default function BodyHeader(){
    let p1="Our podcast is our ecell initiative, which aims at showing the success journey of some of the most successful individuals/entrepreneurs and other alumni with their vision in the form of episodes."
    let p2="These podcasts aims at nurturing the entrepreneurial spirit in the young minds and help them understand the stages, and difficulties experienced in this journey all of which will be available to them on different streaming platforms which provide convenience to listen to the podcasts anytime and anywhere."
    let p3="These podcasts help students, especially the students who want to become entrepreneurs, to understand how the entrepreneurial world works and to gain first-hand knowledge from the best in the business and get inspiration from their experiences, to start their own businesses."
    let p4="Every episode will feature some of the most successful entrepreneurs, which will be in the range from 20-30 minutes. Each episode will be out every month, on major platforms like YouTube and Spotify, Amazon Music on Swayam's accounts."
    return(
        <div style={{
            backgroundImage: `url(${bgAoh})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            imageRendering: "crisp-edges",
            backgroundRepeat: "no-repeat", 
            padding: "8rem 10rem 10rem 10rem",
            borderRadius: "10px"}}
        >
            <Template title={"About Us"} content={p1}/>
            <Template title={"Purpose"} content={p2}/>
            <Template title={"Impact"} content={p3}/>
            <Template title={"Process"} content={p4}/>
        </div>
    );

}
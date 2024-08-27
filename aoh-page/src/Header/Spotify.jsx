import spotify from "../assets/spotify.png"
import Logo from "../Components/HeaderComponents/Logo"
export default function Spotify() {
    return(
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",marginTop:"5rem"}}>
            <div style={{height:"16rem",width:"30rem",backgroundColor:"gray",marginBottom:"2rem"}}></div>
            <div>
                <h2>Browse All Podcasts &gt;&gt;&gt;</h2>
                <Logo url={spotify}/>
            </div>
        </div>
    );
}
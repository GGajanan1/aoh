import Circle from "../Components/BodyComponents/Circle"
import Name from "../Components/BodyComponents/Name"
import Post from "../Components/BodyComponents/Post"
import Slogan from "../Components/BodyComponents/Slogan"

export default function NameTemplate({name,post,slogan}){
    return(
        <div className="flex-item" style={{display:"flex",flexDirection:"row"}}>
            <div>
                <Circle/>
            </div>
            <div style={{marginTop:"1.75rem"}}>
                <Name name={name}/>
                <Post post={post}/>
                <Slogan slogan={slogan}/>
            </div>
        </div>
        

    );
}
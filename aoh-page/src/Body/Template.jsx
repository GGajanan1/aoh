import Title from "../Components/BodyComponents/Title";
import Content from "../Components/BodyComponents/Content";
export default function Template({title,content}) {
    return(
        <>
            <Title title={title}/>
            <Content content={content}/>
        </>
        
    );
}
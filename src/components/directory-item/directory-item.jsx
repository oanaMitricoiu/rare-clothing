import { useNavigate } from "react-router-dom";
import  {DirectoryItemcontainer, BackgroundImage, Body} from "./directory-item.styles.jsx";

const DirectoryItem = ({category:{title, imageUrl, route}}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemcontainer onClick = {onNavigateHandler}>
       <BackgroundImage  imageUrl= {imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <p>Buy now</p>
        </Body>
      </DirectoryItemcontainer>
    )
}

export default DirectoryItem;
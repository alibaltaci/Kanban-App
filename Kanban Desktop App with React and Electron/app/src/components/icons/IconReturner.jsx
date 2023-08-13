import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import InstagramIcon from "./InstagramIcon";
import YouTubeIcon from "./YouTubeIcon";
import LinkedInIcon from "./LinkedInIcon"
import GitHubIcon from "./GitHubIcon";
import MediumIcon from "./MediumIcon";
// https://iconscout.com/

export default function IconReturner({icon}){
    // ["instagram", "linkedin", "github", "medium", "youtube"]
    const WrapperIconComponent = 
        icon === "delete"
            ? DeleteIcon
            : icon === "edit"
            ? EditIcon
            : icon === "instagram"
            ? InstagramIcon 
            : icon === "youtube"
            ? YouTubeIcon
            : icon === "linkedin"
            ? LinkedInIcon
            : icon === "github"
            ? GitHubIcon
            : MediumIcon
            
    
    return(
        <WrapperIconComponent /> 
    )
}
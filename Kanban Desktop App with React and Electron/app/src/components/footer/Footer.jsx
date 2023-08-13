import Typography from "../ui/Typography/Typography";
import { StyledFooter } from "./Footer.styled";
import footerData from "../../data/data.json"

export default function Footer(){
    const data = footerData.footer
    return(
        <StyledFooter>
            <Typography elementType="h3" 
                text={data.content}
                margin="5rem 2rem 3rem" 
                textalign= "center"
                fontFamily = "vibe"
            />
            {/* <SocialIconContainer data={data} /> */}
            <Typography text={data.name} marginBottom="1rem"  />
        </StyledFooter>
    )
}
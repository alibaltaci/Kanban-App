import { StyledSocialIconContainer } from "../icons/Icon.styled";
import IconReturner from "../icons/IconReturner";

export default function SocialIconContainer({data}){
    return(
        <StyledSocialIconContainer>
            {
                data.socialData.map((icon) =>( 
                    <a key={icon} href={icon.link}  target="_blank" rel="noopener noreferrer" title={icon.type} >
                        <IconReturner icon={icon.type} />
                    </a>
                ))
            }
        </StyledSocialIconContainer>
    )
}
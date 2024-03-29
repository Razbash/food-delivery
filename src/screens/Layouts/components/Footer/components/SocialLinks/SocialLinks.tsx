import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../../../../../../ui/icons';
import './socialLinks.scss';

const SocialLinks = () => {
    const socialIcons = [<FacebookIcon/>, <TwitterIcon/>, <InstagramIcon/>, <YoutubeIcon/>, <LinkedinIcon/>];

    return(
        <div className="social-network">
            {socialIcons.map((element, index) => {
                return(
                    <div className="social-network__item" key={index}>
                        {element}
                    </div>
                );
            })}
        </div>
    );
};

export default SocialLinks;
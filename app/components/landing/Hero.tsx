import style from "./hero.module.css";
import { Link } from "react-router";
// ICONS
import Cv from "@/components/icons/cv";
import Github from "@/components/icons/github";
import Instagram from "@/components/icons/instagram";
import Linkedin from "@/components/icons/linkedin";

// ASSETS
import Button from  "../Button/Button"
import SvgIconHelper from "@/components/helpers/SvgIconHelper";

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.contentLeft}>
        <p>Hello, Im Bogdan</p>
        <h1>Full-stack developer</h1>
        <p>
          I want to share the knowledge that I have acquired so far and I am
          willing to learn many new things.
        </p>
        <div className={style.buttonGroup}>
          <Link to="/projects">
            <div>
              <Button text="My work" fill="var(--accent)" colortxt="white" />
            </div>
          </Link>
          <Link to="/contact">
            <div>
              <Button text="Contact" hover={false} colortxt="var(--accent)" />
            </div>
          </Link>
        </div>
      </div>
      <div className={style.contentRight}>
        <div className={style.subPhotoSection}>
          <div className={style.imageContainer}>
            <img
              className={style.ImageHero}
              src={"images/misc/profile.JPG"}
              alt="bogdandraghia"
            />
          </div>
          <div className={style.IconShortcutContainer}>
            <SvgIconHelper
              name="cv"
              icon={<Cv width="60px" height="60px" />}
              pass={"https://publicviewportfolio.s3.eu-west-3.amazonaws.com/Bogdan-Cristian-Draghia-Resume.pdf"}
            />
            <SvgIconHelper
              name="Linkedin"
              icon={<Linkedin width="60px" height="60px" />}
              pass={"https://www.linkedin.com/in/bogdandraghia/"}
            />
            <SvgIconHelper
              name="github"
              icon={<Github width="60px" height="60px" />}
              pass={"https://github.com/bogdandraghia"}
            />
            <SvgIconHelper
              name="Instagram"
              icon={<Instagram width="60px" height="60px" />}
              pass={"https://www.instagram.com/bogdan_draghia/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

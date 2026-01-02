import style from './hero.module.css';
import { Link } from 'react-router';
// ICONS
import Github from '@/components/icons/github';
import Instagram from '@/components/icons/instagram';
import Linkedin from '@/components/icons/linkedin';

// ASSETS
import Button from '@ui/Button';
import SvgIcon from '@/components/helpers/SvgIcon';

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.contentLeft}>
        <p>Hello, I'm Bogdan</p>
        <h1>Full-stack developer</h1>
        <div className={style.buttonGroup}>
          <Link to="/blog">
            <Button text="Blog" />
          </Link>
          <Link to="/contact">
            <Button text="Contact" variant={'secondary'} />
          </Link>
        </div>
      </div>
      <div className={style.contentRight}>
        <div className={style.subPhotoSection}>
          <div className={style.imageContainer}>
            <img className={style.ImageHero} src={'images/misc/profile.JPG'} alt="bogdandraghia" />
          </div>
          <div className={style.IconShortcutContainer}>
            <SvgIcon
              name="Linkedin"
              icon={<Linkedin width="60px" height="60px" />}
              link={'https://www.linkedin.com/in/bogdandraghia/'}
            />
            <SvgIcon
              name="github"
              icon={<Github width="60px" height="60px" />}
              link={'https://github.com/bogdandraghia'}
            />
            <SvgIcon
              name="Instagram"
              icon={<Instagram width="60px" height="60px" />}
              link={'https://www.instagram.com/bogdan_draghia/'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

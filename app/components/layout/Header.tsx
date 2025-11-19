import { useEffect, useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Moon from '@/components/assets/moon';
import Logo from '@/components/assets/logo';
import { NavLink, Link } from 'react-router';
import style from './layout.module.css';

const Header = () => {
  const ref = useRef<HTMLLIElement>(null);
  const variants = {
    darkMotion: { x: 0 },
    lightMotion: { x: 22 },
  };
  const variantsDropDown1 = {
    up: { rotate: -40 },
    down: { rotate: 0 },
  };
  const variantsDropDown2 = {
    up: { rotate: 40 },
    down: { rotate: 0 },
  };
  const dropwdownBlock = {
    up: { height: 0, opacity: 0 },
    down: { height: 'fit-content', opacity: 1 },
  };

  const [changeTheme, setChangeTheme] = useState(true);
  const [renderDropdown, setRenderDropdown] = useState(false);
  const [stateBurger, setStateBurger] = useState(false);
  // FUNCTIONS

  useEffect(() => {
    if (renderDropdown && !stateBurger) {
      const clickedOut = (e: MouseEvent): void => {
        if (renderDropdown && ref.current && !ref.current.contains(e.target as Node)) {
          setRenderDropdown(false);
        }
      };
      document.addEventListener('mousedown', clickedOut as unknown as EventListener);
      return () => {
        document.removeEventListener('mousedown', clickedOut as unknown as EventListener);
      };
    }
  }, [renderDropdown, stateBurger]);
  useEffect(() => {
    let savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'darkmode') {
      document.body.classList.add('darkmode');
      setChangeTheme(false);
    } else {
      document.body.classList.add('lightmode');
      setChangeTheme(true);
    }
  }, []);
  const ToggleButtonDropdown = () => {
    setRenderDropdown(!renderDropdown);
  };
  const toggleButtonBurger = () => {
    setStateBurger(!stateBurger);
  };
  const changethemeHandler = () => {
    if (changeTheme) {
      document.body.classList.remove('lightmode');
      document.body.classList.add('darkmode');
      window.localStorage.setItem('theme', 'darkmode');
      window.dispatchEvent(new Event('storage'));
    } else {
      document.body.classList.remove('darkmode');
      document.body.classList.add('lightmode');
      window.localStorage.setItem('theme', 'lightmode');
      window.dispatchEvent(new Event('storage'));
    }
    setChangeTheme(!changeTheme);
  };

  return (
    <nav className={style.center}>
      <div className={style.navbar}>
        <Logo />
        <div
          className={
            stateBurger
              ? `${style.openNavMenu} ${style.navMenuWrap}`
              : `${style.closedNavMenu} ${style.navMenuWrap}`
          }
        >
          <ul className={`${style.navMenu} ${stateBurger ? style.color1 : style.color2}`}>
            {/* <AnimatePresence>
              <li className={style.listItem} ref={ref} onClick={() => ToggleButtonDropdown()}>
                <div className={style.dropdownBlock}>
                  <div>My work</div>
                  <div className={style.dropdownArrow}>
                    <motion.div
                      transition={{
                        type: 'spring',
                        default: { duration: 0.05 },
                      }}
                      animate={renderDropdown ? 'down' : 'up'}
                      initial={false}
                      variants={variantsDropDown2}
                      className={style.dropdownArrowLine1}
                    ></motion.div>
                    <motion.div
                      initial={false}
                      transition={{
                        duration: 0.5,
                        default: { duration: 0.05 },
                      }}
                      animate={renderDropdown ? 'down' : 'up'}
                      variants={variantsDropDown1}
                      className={style.dropdownArrowLine2}
                    ></motion.div>
                  </div>
                </div>

                <motion.ul
                  animate={renderDropdown ? 'down' : 'up'}
                  variants={dropwdownBlock}
                  initial={false}
                  className={style.dropdownItems}
                >
                  <Link to="/projects">
                    <li onClick={() => toggleButtonBurger()}>Projects</li>
                  </Link>
                  <Link to="/illustrations">
                    <li onClick={() => toggleButtonBurger()}>Illustrations</li>
                  </Link>
                  <li onClick={() => toggleButtonBurger()}>Others</li>
                </motion.ul>
              </li>
            </AnimatePresence> */}

            {/* <li onClick={() => toggleButtonBurger()}>
              <Link to="/projects" className={style.menuText}>
                Projects
              </Link>
            </li> */}
            <li onClick={() => toggleButtonBurger()}>
              <Link to="/blog" className={style.menuText}>
                Blog
              </Link>
            </li>
            <li onClick={() => toggleButtonBurger()}>
              <Link to="/contact" style={{ color: '#6aa7e8' }} className={style.menuText}>
                Contact
              </Link>
            </li>
            <li className={style.changethemeli}>
              <div className={style.changeTheme} onClick={() => changethemeHandler()}>
                <motion.div
                  initial={false}
                  animate={changeTheme ? 'darkMotion' : 'lightMotion'}
                  variants={variants}
                  className={style.circlechange}
                >
                  <Moon className={style.MoonVar} style={{ height: '20px', rotate: '40deg' }} />
                </motion.div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={`${style.burgerMenu} ${style.transitionSmooth} `}
          onClick={() => toggleButtonBurger()}
        >
          <div
            className={
              !stateBurger ? style.burgerLine : `${style.burgerLine} ${style.bgLineAnimate1}`
            }
          ></div>
          <div
            className={
              !stateBurger ? style.burgerLine : `${style.burgerLine} ${style.bgLineAnimate2}`
            }
          ></div>
          <div
            className={
              !stateBurger ? style.burgerLine : `${style.burgerLine} ${style.bgLineAnimate3}`
            }
          ></div>
        </div>
      </div>
    </nav>
  );
};
export default Header;

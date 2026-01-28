import { Link } from "react-router";
import { useEffect } from "react";
import styles from "./mobile-menu.module.css";
import { useLanguage } from "../../contexts/language-context";
import homeIcon from "/icons/home-icon.png";
import cakeDoodle from "/icons/cake-doodle.png";
import dessertDoodle from "/icons/dessert-doodle.png";
import utensilsDoodle from "/icons/utensils-doodle.png";
import chefVenera from "/icons/chef-venera.png";
import deliveryDoodle from "/icons/delivery-doodle.png";
import messageIcon from "/icons/message-icon.png";
import closeDoodle from "/icons/close-doodle.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.overlay} data-open={isOpen} onClick={onClose} />
      <div className={styles.menu} data-open={isOpen}>
        <div className={styles.header}>
          <img src="/vrfood-logo-new.png" alt="VRfood" className={styles.logo} />
          <button className={styles.closeButton} onClick={onClose} aria-label={t.nav.closeMenu}>
            <img src={closeDoodle} alt="" className={styles.closeIcon} />
          </button>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink} onClick={onClose}>
                <img src={homeIcon} alt="" className={styles.navIcon} />
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link to="/cakes" className={styles.navLink} onClick={onClose}>
                <img src={cakeDoodle} alt="" className={styles.navIcon} />
                {t.nav.cakes}
              </Link>
            </li>
            <li>
              <Link to="/desserts" className={styles.navLink} onClick={onClose}>
                <img src={dessertDoodle} alt="" className={styles.navIcon} />
                {t.nav.desserts}
              </Link>
            </li>
            <li>
              <Link to="/fillings" className={styles.navLink} onClick={onClose}>
                <img src={dessertDoodle} alt="" className={styles.navIcon} />
                Начинки
              </Link>
            </li>
            <li>
              <Link to="/food" className={styles.navLink} onClick={onClose}>
                <img src={utensilsDoodle} alt="" className={styles.navIcon} />
                {t.nav.food}
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink} onClick={onClose}>
                <img src={chefVenera} alt="" className={styles.navIcon} />
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link to="/delivery" className={styles.navLink} onClick={onClose}>
                <img src={deliveryDoodle} alt="" className={styles.navIcon} />
                {t.nav.delivery}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink} onClick={onClose}>
                <img src={messageIcon} alt="" className={styles.navIcon} />
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

import { Link } from "react-router";
import { useState } from "react";
import styles from "./header.module.css";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { useLanguage } from "../../contexts/language-context";
import homeIcon from "/icons/home-icon.png";
import cakeDoodle from "/icons/cake-doodle.png";
import dessertDoodle from "/icons/dessert-doodle.png";
import utensilsDoodle from "/icons/utensils-doodle.png";
import chefVenera from "/icons/chef-venera.png";
import deliveryDoodle from "/icons/delivery-doodle.png";
import messageIcon from "/icons/message-icon.png";
import menuDoodle from "/icons/menu-doodle.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src="/vrfood-logo-new.png" alt="VRfood" className={styles.logoImage} />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link to="/" className={styles.navLink}>
                  <img src={homeIcon} alt="" className={styles.navIcon} />
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/cakes" className={styles.navLink}>
                  <img src={cakeDoodle} alt="" className={styles.navIcon} />
                  {t.nav.cakes}
                </Link>
              </li>
              <li>
                <Link to="/desserts" className={styles.navLink}>
                  <img src={dessertDoodle} alt="" className={styles.navIcon} />
                  {t.nav.desserts}
                </Link>
              </li>
              <li>
                <Link to="/food" className={styles.navLink}>
                  <img src={utensilsDoodle} alt="" className={styles.navIcon} />
                  {t.nav.food}
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.navLink}>
                  <img src={chefVenera} alt="" className={styles.navIcon} />
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/delivery" className={styles.navLink}>
                  <img src={deliveryDoodle} alt="" className={styles.navIcon} />
                  {t.nav.delivery}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.navLink}>
                  <img src={messageIcon} alt="" className={styles.navIcon} />
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.actions}>
            <button className={styles.menuButton} onClick={() => setMobileMenuOpen(true)} aria-label={t.nav.openMenu}>
              <img src={menuDoodle} alt="" className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

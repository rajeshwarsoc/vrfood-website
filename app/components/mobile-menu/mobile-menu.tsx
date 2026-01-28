import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./mobile-menu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  if (!isOpen) return null;

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/" onClick={onClose}>Home</Link>
        </li>
        <li>
          <Link to="/cakes" onClick={onClose}>Cakes</Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;


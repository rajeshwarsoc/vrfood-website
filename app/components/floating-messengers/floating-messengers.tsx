import styles from "./floating-messengers.module.css";
import { Send, MessageCircle } from "lucide-react";

export function FloatingMessengers() {
  return (
    <div className={styles.container}>
      <a
        href="https://t.me/VR_FooD9"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.telegram}`}
        aria-label="Contact us on Telegram"
      >
        <Send size={28} />
      </a>
      <a
        href="https://wa.me/79099056417"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

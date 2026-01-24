import type { Route } from "./+types/contact";
import { Instagram, Mail, Phone, Square } from "lucide-react";
import styles from "./contact.module.css";
import { Header } from "~/components/header/header";
import { useLanguage } from "~/contexts/language-context";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Свяжитесь со мной — VRfood" },
    {
      name: "description",
      content: "Свяжитесь с VRfood через Instagram, ВКонтакте или WhatsApp. Я всегда на связи для ваших заказов.",
    },
  ];
}

export default function Contact() {
  const { t } = useLanguage();

  // VK custom icon component
  const VKIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.customIcon}>
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.73c-.37.49-1.08.93-2.11.93-.65 0-1.31-.17-1.98-.5-.58-.29-1.16-.63-1.73-.97-.48-.29-.95-.58-1.4-.83-.34-.19-.73-.28-1.12-.28-.66 0-1.21.22-1.64.65-.22.22-.4.48-.54.77-.22.48-.33 1.03-.33 1.63v.12c0 .11-.09.2-.2.2h-1.6c-.11 0-.2-.09-.2-.2 0-1.23.22-2.33.66-3.27.66-1.41 1.84-2.12 3.52-2.12.65 0 1.31.17 1.98.5.58.29 1.16.63 1.73.97.48.29.95.58 1.4.83.34.19.73.28 1.12.28.66 0 1.21-.22 1.64-.65.22-.22.4-.48.54-.77.22-.48.33-1.03.33-1.63v-.12c0-.11.09-.2.2-.2h1.6c.11 0 .2.09.2.2 0 1.23-.22 2.33-.66 3.27-.21.44-.47.84-.78 1.19z"/>
    </svg>
  );

  const contactChannels = [
    {
      id: "instagram",
      icon: Instagram,
      label: t.contact.instagram.label,
      description: t.contact.instagram.description,
      href: "https://www.instagram.com/venerka_cakes",
      color: "#E4405F",
      gradientFrom: "#833AB4",
      gradientTo: "#FD1D1D",
      disabled: false,
    },
    {
      id: "vk",
      icon: VKIcon,
      label: t.contact.vk.label,
      description: t.contact.vk.description,
      href: "https://vk.ru/venerka_cakes",
      color: "#0077FF",
      disabled: false,
    },
    {
      id: "whatsapp",
      icon: Phone,
      label: t.contact.whatsapp.label,
      description: t.contact.whatsapp.description,
      href: "https://wa.me/79099056417",
      color: "#25D366",
      disabled: false,
    },
    {
      id: "telegram",
      icon: Mail,
      label: t.contact.telegram.label,
      description: t.contact.telegram.description,
      href: "https://t.me/VR_FooD9",
      color: "#0088cc",
      disabled: false,
    },
    {
      id: "email",
      icon: Mail,
      label: t.contact.email.label,
      description: t.contact.email.description,
      href: "mailto:Venerka_87@mail.ru",
      color: "#EA4335",
      disabled: false,
    },
    {
      id: "phone",
      icon: Phone,
      label: t.contact.phone.label,
      description: t.contact.phone.description,
      href: "tel:+79099056417",
      color: "#34B7F1",
      disabled: false,
    },
    {
      id: "max",
      icon: Square,
      label: t.contact.max.label,
      description: t.contact.max.description,
      href: "#",
      color: "#A8DADC",
      disabled: true,
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.contact.title}</h1>
          <p className={styles.subtitle}>{t.contact.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            const CardElement = channel.disabled ? "div" : "a";

            return (
              <CardElement
                key={channel.id}
                href={channel.disabled ? undefined : channel.href}
                target={channel.disabled ? undefined : "_blank"}
                rel={channel.disabled ? undefined : "noopener noreferrer"}
                className={`${styles.card} ${channel.disabled ? styles.disabled : ""}`}
                style={
                  {
                    "--channel-color": channel.color,
                    "--gradient-from": channel.gradientFrom,
                    "--gradient-to": channel.gradientTo,
                  } as React.CSSProperties
                }
              >
                <div
                  className={`${styles.iconWrapper} ${channel.id === "instagram" ? styles.instagramGradient : ""}`}
                >
                  <Icon className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardLabel}>{channel.label}</h3>
                  <p className={styles.cardDescription}>{channel.description}</p>
                </div>
              </CardElement>
            );
          })}
        </div>
      </div>
    </div>
  );
}

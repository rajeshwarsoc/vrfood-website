export type Language = "ru" | "en";

export const LANGUAGES = {
  ru: { code: "ru", name: "Русский", flag: "🇷🇺" },
  en: { code: "en", name: "English", flag: "🇬🇧" },
} as const;

export const translations = {
  ru: {
    // Header & Navigation
    nav: {
      home: "Главная",
      cakes: "Торты",
      desserts: "Другие десерты",
      food: "Домашняя еда",
      fillings: "Начинки",
      about: "О Венере",
      delivery: "Доставка",
      contact: "Контакты",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    // Home page
    home: {
      hero: {
        title: "Домашние торты и десерты",
        subtitle: "Создано с любовью и заботой",
        cta: "Посмотреть торты",
      },
      featured: {
        title: "Популярные категории",
        viewAll: "Смотреть все",
      },
      categories: {
        wedding: "Свадебные торты",
        birthday: "Детские торты",
        holiday: "Праздничные торты",
      },
      reviews: {
        title: "Отзывы",
        subtitle: "Что говорят наши клиенты",
      },
    },
    // Cakes page
    cakes: {
      title: "Торты",
      subtitle: "Выберите дизайн торта",
      categories: {
        all: "Все торты",
        wedding: "Свадебные",
        birthday: "Детские",
        holiday: "Праздничные",
      },
      customize: "Настроить",
    },
    // Configurator
    configurator: {
      title: "Настройте ваш торт",
      design: "Дизайн",
      weight: "Вес торта",
      weightHelper: "Стандартные размеры: 2-5 кг",
      add500g: "Добавить +500 грамм",
      add500gHelper: "Добавить дополнительные 500 грамм к выбранному весу",
      filling: "Начинка",
      selectFilling: "Выберите начинку",
      price: "Итоговая цена",
      pricePerKg: "цена за кг",
      order: "Заказать в Telegram",
      total: "всего",
    },
    // Fillings page
    fillings: {
      title: "Начинки для тортов",
      subtitle: "Выберите идеальную начинку для вашего торта",
    },
    // Desserts page
    desserts: {
      title: "Другие десерты",
      subtitle: "Исследуйте нашу коллекцию домашних десертов",
    },
    // Food page
    food: {
      title: "Домашняя еда",
      subtitle: "Вкусные домашние блюда на заказ",
    },
    // About page
    about: {
      title: "О Венере",
      subtitle: "Страсть к выпечке и кулинарии",
      story: {
        title: "Моя история",
        text: "С детства я влюблена в искусство выпечки. Каждый торт, который я создаю — это результат многолетнего опыта, любви к кулинарии и внимания к деталям.",
      },
      quality: {
        title: "Качество и забота",
        text: "Я использую только свежие, качественные ингредиенты и уделяю внимание каждой детали, чтобы ваш торт был не только красивым, но и невероятно вкусным.",
      },
      approach: {
        title: "Индивидуальный подход",
        text: "Каждый заказ уникален. Я работаю с вами, чтобы создать идеальный торт для вашего особенного события.",
      },
    },
    // Delivery page
    delivery: {
      title: "Доставка и заказ",
      subtitle: "Как заказать торт",
      howToOrder: {
        title: "Как заказать",
        step1: {
          title: "Выберите дизайн",
          text: "Просмотрите нашу галерею и выберите понравившийся дизайн торта",
        },
        step2: {
          title: "Настройте детали",
          text: "Выберите вес, начинку и другие параметры в конфигураторе",
        },
        step3: {
          title: "Свяжитесь со мной",
          text: "Нажмите кнопку 'Заказать в Telegram' для оформления заказа",
        },
        step4: {
          title: "Получите торт",
          text: "Заберите торт самостоятельно или закажите доставку",
        },
      },
      deliveryInfo: {
        title: "Информация о доставке",
        pickup: "Самовывоз",
        pickupText: "Бесплатный самовывоз из моей кондитерской",
        delivery: "Доставка",
        deliveryText: "Доставка по городу — стоимость обсуждается индивидуально",
        timing: "Сроки",
        timingText: "Пожалуйста, делайте заказ минимум за 3-5 дней",
      },
      contact: {
        title: "Связаться со мной",
        cta: "Написать в Telegram",
      },
    },
    // Common
    common: {
      kg: "кг",
      from: "от",
      currency: "₽",
      loading: "Загрузка...",
      error: "Ошибка",
      notFound: "Не найдено",
    },
    // Contact page
    contact: {
      title: "Свяжитесь со мной",
      subtitle: "Выберите удобный способ общения",
      instagram: {
        label: "Instagram",
        description: "Следите за новинками и вдохновением",
      },
      vk: {
        label: "ВКонтакте",
        description: "Галерея работ и отзывы клиентов",
      },
      whatsapp: {
        label: "WhatsApp",
        description: "Быстрые сообщения в любое время",
      },
      telegram: {
        label: "Telegram",
        description: "Обсудите заказ напрямую",
      },
      email: {
        label: "Электронная почта",
        description: "Для официальных запросов",
      },
      phone: {
        label: "Позвонить",
        description: "Личная консультация по телефону",
      },
      max: {
        label: "Max Messenger",
        description: "Скоро будет доступно",
      },
    },
    // Error messages
    errors: {
      pageNotFound: "Запрашиваемая страница не найдена.",
      unexpected: "Произошла непредвиденная ошибка.",
      oops: "Упс!",
    },
  },
  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      cakes: "Cakes",
      desserts: "Other Desserts",
      food: "Home Food",
      fillings: "Fillings",
      about: "About Venera",
      delivery: "Delivery",
      contact: "Contact Us",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    // Home page
    home: {
      hero: {
        title: "Homemade Cakes & Desserts",
        subtitle: "Made with love and care",
        cta: "View Cakes",
      },
      featured: {
        title: "Popular Categories",
        viewAll: "View All",
      },
      categories: {
        wedding: "Wedding Cakes",
        birthday: "Birthday Cakes",
        holiday: "Holiday Cakes",
      },
      reviews: {
        title: "Reviews",
        subtitle: "What our customers say",
      },
    },
    // Cakes page
    cakes: {
      title: "Cakes",
      subtitle: "Choose your cake design",
      categories: {
        all: "All Cakes",
        wedding: "Wedding",
        birthday: "Birthday",
        holiday: "Holiday",
      },
      customize: "Customize",
    },
    // Configurator
    configurator: {
      title: "Customize Your Cake",
      design: "Design",
      weight: "Cake Weight",
      weightHelper: "Standard sizes: 2-5 kg",
      add500g: "Add +500 grams",
      add500gHelper: "Add an extra 500 grams to the selected weight",
      filling: "Filling",
      selectFilling: "Choose a filling",
      price: "Total Price",
      pricePerKg: "price per kg",
      order: "Order via Telegram",
      total: "total",
    },
    // Fillings page
    fillings: {
      title: "Cake Fillings",
      subtitle: "Choose the perfect filling for your cake",
    },
    // Desserts page
    desserts: {
      title: "Other Desserts",
      subtitle: "Explore our collection of homemade desserts",
    },
    // Food page
    food: {
      title: "Home Food",
      subtitle: "Delicious homemade dishes to order",
    },
    // About page
    about: {
      title: "About Venera",
      subtitle: "Passion for baking and cooking",
      story: {
        title: "My Story",
        text: "Since childhood, I've been in love with the art of baking. Every cake I create is the result of years of experience, love for cooking, and attention to detail.",
      },
      quality: {
        title: "Quality and Care",
        text: "I use only fresh, quality ingredients and pay attention to every detail to ensure your cake is not only beautiful but also incredibly delicious.",
      },
      approach: {
        title: "Individual Approach",
        text: "Every order is unique. I work with you to create the perfect cake for your special occasion.",
      },
    },
    // Delivery page
    delivery: {
      title: "Delivery & Ordering",
      subtitle: "How to order a cake",
      howToOrder: {
        title: "How to Order",
        step1: {
          title: "Choose a Design",
          text: "Browse our gallery and select your preferred cake design",
        },
        step2: {
          title: "Customize Details",
          text: "Choose weight, filling, and other parameters in the configurator",
        },
        step3: {
          title: "Contact Me",
          text: "Click 'Order via Telegram' to place your order",
        },
        step4: {
          title: "Receive Your Cake",
          text: "Pick up your cake or arrange delivery",
        },
      },
      deliveryInfo: {
        title: "Delivery Information",
        pickup: "Pickup",
        pickupText: "Free pickup from my bakery",
        delivery: "Delivery",
        deliveryText: "City delivery — cost discussed individually",
        timing: "Timing",
        timingText: "Please order at least 3-5 days in advance",
      },
      contact: {
        title: "Contact Me",
        cta: "Message on Telegram",
      },
    },
    // Common
    common: {
      kg: "kg",
      from: "from",
      currency: "₽",
      loading: "Loading...",
      error: "Error",
      notFound: "Not Found",
    },
    // Contact page
    contact: {
      title: "Get in Touch",
      subtitle: "Choose your preferred way to connect",
      instagram: {
        label: "Instagram",
        description: "Follow for inspiration and updates",
      },
      vk: {
        label: "VKontakte",
        description: "Gallery and customer reviews",
      },
      whatsapp: {
        label: "WhatsApp",
        description: "Quick messages anytime",
      },
      telegram: {
        label: "Telegram",
        description: "Discuss your order directly",
      },
      email: {
        label: "Email",
        description: "For formal inquiries",
      },
      phone: {
        label: "Call Us",
        description: "Personal phone consultation",
      },
      max: {
        label: "Max Messenger",
        description: "Coming soon",
      },
    },
    // Error messages
    errors: {
      pageNotFound: "The requested page was not found.",
      unexpected: "An unexpected error occurred.",
      oops: "Oops!",
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang];
}

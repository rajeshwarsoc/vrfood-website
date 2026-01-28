export interface Dessert {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  priceUnit: string;
  images: string[];
}

export const DESSERTS: Dessert[] = [
  {
    id: "cupcake-1",
    category: "Капкейки",
    name: "Классические капкейки",
    description: "Ванильные капкейки с кремом",
    price: 150,
    priceUnit: "шт",
    images: [
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80",
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80",
    ],
  },
  {
    id: "cupcake-2",
    category: "Капкейки",
    name: "Шоколадные капкейки",
    description: "С шоколадным кремом",
    price: 170,
    priceUnit: "шт",
    images: ["https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80"],
  },
  {
    id: "cakepop-1",
    category: "Кейкпопсы",
    name: "Кейкпопсы ассорти",
    description: "Набор из 6 штук",
    price: 600,
    priceUnit: "набор",
    images: ["https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80"],
  },
  {
    id: "trifle-1",
    category: "Трайфлы",
    name: "Ягодный трайфл",
    description: "Слоеный десерт в стакане",
    price: 350,
    priceUnit: "шт",
    images: ["https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80"],
  },
  {
    id: "mini-cake-1",
    category: "Мини-торты",
    name: "Мини-торт классический",
    description: "Идеален для 2-3 человек",
    price: 1200,
    priceUnit: "шт",
    images: ["https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80"],
  },
  {
    id: "marshmallow-1",
    category: "Зефир",
    name: "Домашний зефир",
    description: "Классический ванильный",
    price: 100,
    priceUnit: "шт",
    images: ["https://images.unsplash.com/photo-1599785209796-786432b228bc?w=800&q=80"],
  },
];

export const DESSERT_CATEGORIES = ["Капкейки", "Кейкпопсы", "Трайфлы", "Мини-торты", "Зефир"];

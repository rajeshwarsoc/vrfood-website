export interface FoodItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: "soup-1",
    category: "Супы",
    name: "Борщ домашний",
    description: "Классический рецепт со сметаной",
    price: 350,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
  },
  {
    id: "soup-2",
    category: "Супы",
    name: "Куриный суп с лапшой",
    description: "Легкий и питательный",
    price: 300,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
  },
  {
    id: "salad-1",
    category: "Салаты",
    name: "Оливье",
    description: "Традиционный праздничный салат",
    price: 400,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "salad-2",
    category: "Салаты",
    name: "Цезарь с курицей",
    description: "Свежий и сытный",
    price: 450,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
  },
  {
    id: "lunch-1",
    category: "Обеды",
    name: "Котлеты с пюре",
    description: "Домашние котлеты и картофельное пюре",
    price: 500,
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
  },
  {
    id: "lunch-2",
    category: "Обеды",
    name: "Плов",
    description: "Узбекский плов с говядиной",
    price: 550,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
  },
  {
    id: "dinner-1",
    category: "Ужины",
    name: "Запеченная курица",
    description: "С овощами и травами",
    price: 600,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
  },
  {
    id: "dinner-2",
    category: "Ужины",
    name: "Рыба на пару",
    description: "С гарниром из овощей",
    price: 650,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
  },
];

export const FOOD_CATEGORIES = ["Супы", "Салаты", "Обеды", "Ужины"];

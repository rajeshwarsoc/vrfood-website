export interface CakeCategory {
  id: string;
  name: string;
  image: string;
}

export interface CakeDesign {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  basePrice: number;
}

export interface Filling {
  id: string;
  name: string;
  description: string;
  image: string;
  pricePerKg: number;
  tier: "basic" | "premium" | "special";
}

export interface Decoration {
  id: string;
  name: string;
  price: number;
}

export const CAKE_CATEGORIES: CakeCategory[] = [
  { id: "kids", name: "Детские торты", image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80" },
  {
    id: "characters",
    name: "Торты с героями",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80",
  },
  {
    id: "corporate",
    name: "Корпоративные торты",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
  },
  {
    id: "wedding",
    name: "Свадебные торты",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  { id: "men", name: "Торты для мужчин", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80" },
  {
    id: "women",
    name: "Торты для женщин",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
  },
  { id: "berry", name: "Ягодные торты", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80" },
  { id: "bento", name: "Бенто торты", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80" },
  { id: "open", name: "Открытый торт", image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?w=800&q=80" },
  {
    id: "holiday",
    name: "Праздничные торты",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
  },
];

export const CAKE_DESIGNS: CakeDesign[] = [
  {
    id: "kids-1",
    categoryId: "kids",
    name: "Радужный единорог",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80",
    basePrice: 3500,
  },
  {
    id: "kids-2",
    categoryId: "kids",
    name: "Веселые зверята",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80",
    basePrice: 3200,
  },
  {
    id: "kids-3",
    categoryId: "kids",
    name: "Принцесса",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
    basePrice: 3800,
  },
  {
    id: "characters-1",
    categoryId: "characters",
    name: "Человек-паук",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    basePrice: 4000,
  },
  {
    id: "characters-2",
    categoryId: "characters",
    name: "Холодное сердце",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80",
    basePrice: 4200,
  },
  {
    id: "wedding-1",
    categoryId: "wedding",
    name: "Классический белый",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    basePrice: 5500,
  },
  {
    id: "wedding-2",
    categoryId: "wedding",
    name: "Нежные цветы",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    basePrice: 6000,
  },
  {
    id: "berry-1",
    categoryId: "berry",
    name: "Лесные ягоды",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    basePrice: 3600,
  },
  {
    id: "berry-2",
    categoryId: "berry",
    name: "Клубничный рай",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    basePrice: 3400,
  },
  {
    id: "men-1",
    categoryId: "men",
    name: "Автомобиль",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    basePrice: 4500,
  },
  {
    id: "women-1",
    categoryId: "women",
    name: "Цветочная элегантность",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    basePrice: 4200,
  },
  {
    id: "bento-1",
    categoryId: "bento",
    name: "Минималистичный бенто",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80",
    basePrice: 2800,
  },
];

export const FILLINGS: Filling[] = [
  {
    id: "vanilla-berry",
    name: "Ваниль–ягоды",
    description: "Классическое сочетание",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
    pricePerKg: 0,
    tier: "basic",
  },
  {
    id: "chocolate",
    name: "Шоколадный",
    description: "Насыщенный вкус",
    image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?w=400&q=80",
    pricePerKg: 0,
    tier: "basic",
  },
  {
    id: "milk-girl",
    name: "Молочная девочка",
    description: "Нежная карамель",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
    pricePerKg: 0,
    tier: "basic",
  },
  {
    id: "tiramisu",
    name: "Тирамису",
    description: "Кофейный классик",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    pricePerKg: 0,
    tier: "basic",
  },
  {
    id: "pistachio-raspberry",
    name: "Фисташка–малина",
    description: "Изысканное сочетание",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80",
    pricePerKg: 300,
    tier: "premium",
  },
  {
    id: "mango-passion",
    name: "Манго–маракуйя",
    description: "Тропический взрыв",
    image: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?w=400&q=80",
    pricePerKg: 350,
    tier: "premium",
  },
  {
    id: "chocolate-cherry",
    name: "Шоколад–вишня",
    description: "Классика с изюминкой",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
    pricePerKg: 250,
    tier: "premium",
  },
  {
    id: "snickers",
    name: "Сникерс",
    description: "Арахис и карамель",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
    pricePerKg: 300,
    tier: "premium",
  },
  {
    id: "sugar-free",
    name: "Без сахара",
    description: "По запросу",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    pricePerKg: 0,
    tier: "special",
  },
  {
    id: "gluten-free",
    name: "Без глютена",
    description: "По запросу",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80",
    pricePerKg: 0,
    tier: "special",
  },
  {
    id: "egg-free",
    name: "Без яиц",
    description: "По запросу",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
    pricePerKg: 0,
    tier: "special",
  },
];

export const DECORATIONS: Decoration[] = [
  { id: "fresh-berries", name: "Свежие ягоды", price: 500 },
  { id: "inscription", name: "Надпись", price: 300 },
  { id: "mini-decor", name: "Мини-декор", price: 400 },
];

export const CAKE_WEIGHTS = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export const BENTO_WEIGHTS = [0.5, 1, 1.5];

export interface WeightConfig {
  minWeight: number;
  allowsFilling: boolean;
}

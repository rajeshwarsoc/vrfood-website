import type { Route } from "./+types/configurator.$designId";
import { Link, useParams } from "react-router";
import { ChevronRight, Check } from "lucide-react";
import { useState } from "react";
import styles from "./configurator.$designId.module.css";
import { Header } from "~/components/header/header";
import { CAKE_DESIGNS, FILLINGS, DECORATIONS, CAKE_CATEGORIES } from "~/data/cakes";
import IMG_2833 from "/IMG_2833.jpeg";
import { useLanguage } from "~/contexts/language-context";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({ params }: Route.MetaArgs) {
  const design = CAKE_DESIGNS.find((d) => d.id === params.designId);
  return [
    { title: `Конфигуратор: ${design?.name || "Торт"} | VRfood` },
    { name: "description", content: "Настройте свой торт: выберите начинку, вес и украшения" },
  ];
}

export default function Configurator() {
  const { t } = useLanguage();
  const { designId } = useParams();
  const design = CAKE_DESIGNS.find((d) => d.id === designId);
  const category = CAKE_CATEGORIES.find((c) => c.id === design?.categoryId);

  const [selectedFilling, setSelectedFilling] = useState<string | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<number>(category?.id === "bento" ? 0.5 : 2);
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);

  const isBentoCake = category?.id === "bento";
  const minWeight = isBentoCake ? 0.5 : 2;
  const maxWeight = isBentoCake ? 1.5 : 20;

  const incrementWeight = (amount: number) => {
    setSelectedWeight((prev) => {
      const newWeight = prev + amount;
      if (newWeight > maxWeight) return maxWeight;
      if (newWeight < minWeight) return minWeight;
      return Math.round(newWeight * 10) / 10;
    });
  };

  const decrementWeight = (amount: number) => {
    setSelectedWeight((prev) => {
      const newWeight = prev - amount;
      if (newWeight < minWeight) return minWeight;
      return Math.round(newWeight * 10) / 10;
    });
  };

  const calculateTotalPrice = (): number | null => {
    if (!design) return null;

    if (!selectedFilling) return null;

    const price_per_kg = design.basePrice;
    const total_selected_weight = selectedWeight;

    const filling = FILLINGS.find((f) => f.id === selectedFilling);
    const filling_modifier_per_kg = filling?.pricePerKg || 0;

    const decorations_total = selectedDecorations.reduce((sum, decorationId) => {
      const decoration = DECORATIONS.find((d) => d.id === decorationId);
      return sum + (decoration?.price || 0);
    }, 0);

    const final_total = (price_per_kg + filling_modifier_per_kg) * total_selected_weight + decorations_total;

    return final_total;
  };

  const totalPrice = calculateTotalPrice();

  const toggleDecoration = (decorationId: string) => {
    setSelectedDecorations((prev) =>
      prev.includes(decorationId) ? prev.filter((id) => id !== decorationId) : [...prev, decorationId],
    );
  };

  const generateTelegramMessage = () => {
    if (!design) return "";
    
    const filling = FILLINGS.find((f) => f.id === selectedFilling);
    const decorations = selectedDecorations
      .map((id) => DECORATIONS.find((d) => d.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const weightText = isBentoCake
      ? `${selectedWeight * 1000} г`
      : `${selectedWeight} ${t.common.kg}`;

    const finalPrice = totalPrice !== null ? totalPrice : design.basePrice * selectedWeight;

    const message = `Здравствуйте! Хочу заказать торт:

Категория: ${category?.name}
Дизайн: ${design?.name}
Начинка: ${filling?.name || "не выбрана"}
Вес: ${weightText}
Украшения: ${decorations || "без украшений"}

Итоговая цена: ${finalPrice.toLocaleString("ru-RU")} ₽`;

    return `https://t.me/VR_FooD9?text=${encodeURIComponent(message)}`;
  };

  if (!design || !category) {
    return null;
  }

  const basicFillings = FILLINGS.filter((f) => f.tier === "basic");
  const premiumFillings = FILLINGS.filter((f) => f.tier === "premium");
  const specialFillings = FILLINGS.filter((f) => f.tier === "special");

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <Link to="/cakes">{t.nav.cakes}</Link>
          <ChevronRight />
          <Link to={`/cakes/${category.id}`}>{category.name}</Link>
          <ChevronRight />
          <span>{design.name}</span>
        </div>

        <div className={styles.designSection}>
          <img src={IMG_2833} alt={design.name} className={styles.designImage} loading="lazy" />
          <h1 className={styles.designName}>{design.name}</h1>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.configurator.weight}</h2>
          <div className={styles.weightControls}>
            <div className={styles.weightDisplay}>
              <span className={styles.weightLabel}>Вес:</span>
              <span className={styles.weightValue}>
                {isBentoCake ? `${selectedWeight * 1000} г` : `${selectedWeight} кг`}
              </span>
            </div>
            <div className={styles.weightButtons}>
              <button
                type="button"
                className={styles.weightButton}
                onClick={() => decrementWeight(1)}
                disabled={selectedWeight <= minWeight}
              >
                -1 кг
              </button>
              <button
                type="button"
                className={styles.weightButton}
                onClick={() => incrementWeight(1)}
                disabled={selectedWeight >= maxWeight}
              >
                +1 кг
              </button>
              <button
                type="button"
                className={styles.weightButton}
                onClick={() => incrementWeight(0.5)}
                disabled={selectedWeight >= maxWeight}
              >
                +500 г
              </button>
            </div>
            <div className={styles.weightRange}>
              <span>Мин: {isBentoCake ? `${minWeight * 1000} г` : `${minWeight} кг`}</span>
              <span>Макс: {isBentoCake ? `${maxWeight * 1000} г` : `${maxWeight} кг`}</span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.configurator.selectFilling}</h2>

          <div className={styles.tierLabel}>Базовые начинки</div>
          <div className={styles.fillingsGrid}>
            {basicFillings.map((filling) => (
              <div
                key={filling.id}
                className={styles.fillingCard}
                data-selected={selectedFilling === filling.id}
                onClick={() => setSelectedFilling(filling.id)}
              >
                <img src={filling.image} alt={filling.name} className={styles.fillingImage} loading="lazy" />
                <div className={styles.fillingInfo}>
                  <p className={styles.fillingName}>{filling.name}</p>
                  <p className={styles.fillingDescription}>{filling.description}</p>
                  <p className={styles.fillingPrice}>Без доплаты</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.tierLabel}>Премиум начинки</div>
          <div className={styles.fillingsGrid}>
            {premiumFillings.map((filling) => (
              <div
                key={filling.id}
                className={styles.fillingCard}
                data-selected={selectedFilling === filling.id}
                onClick={() => setSelectedFilling(filling.id)}
              >
                <img src={filling.image} alt={filling.name} className={styles.fillingImage} loading="lazy" />
                <div className={styles.fillingInfo}>
                  <p className={styles.fillingName}>{filling.name}</p>
                  <p className={styles.fillingDescription}>{filling.description}</p>
                  <p className={styles.fillingPrice}>+{filling.pricePerKg} ₽/кг</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.tierLabel}>Специальные начинки</div>
          <div className={styles.fillingsGrid}>
            {specialFillings.map((filling) => (
              <div
                key={filling.id}
                className={styles.fillingCard}
                data-selected={selectedFilling === filling.id}
                onClick={() => setSelectedFilling(filling.id)}
              >
                <img src={filling.image} alt={filling.name} className={styles.fillingImage} loading="lazy" />
                <div className={styles.fillingInfo}>
                  <p className={styles.fillingName}>{filling.name}</p>
                  <p className={styles.fillingDescription}>{filling.description}</p>
                  <p className={styles.fillingPrice}>По запросу</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Украшения (опционально)</h2>
          <div className={styles.decorationsGrid}>
            {DECORATIONS.map((decoration) => (
              <div
                key={decoration.id}
                className={styles.decorationCard}
                data-selected={selectedDecorations.includes(decoration.id)}
                onClick={() => toggleDecoration(decoration.id)}
              >
                <div className={styles.checkbox}>{selectedDecorations.includes(decoration.id) && <Check />}</div>
                <div className={styles.decorationInfo}>
                  <p className={styles.decorationName}>{decoration.name}</p>
                </div>
                <span className={styles.decorationPrice}>+{decoration.price} ₽</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.preorderNote}>⏰ Предзаказ минимум за 3 дня</p>
        </div>
      </div>

      <div className={styles.priceBar}>
        <div className={styles.priceBarContent}>
          <div className={styles.priceInfo}>
            <p className={styles.priceLabel}>{t.configurator.price}</p>
            <p className={styles.priceValue}>
              {totalPrice !== null 
                ? `${totalPrice.toLocaleString("ru-RU")} ${t.common.currency}` 
                : `${t.common.from} ${design.basePrice.toLocaleString("ru-RU")} ${t.common.currency}`
              }
            </p>
          </div>
          <a href={generateTelegramMessage()} target="_blank" rel="noopener noreferrer" className={styles.orderButton}>
            <img src="/icons/telegram-icon.svg" alt="" style={{ width: '20px', height: '20px' }} />
            {t.configurator.order}
          </a>
        </div>
      </div>
    </div>
  );
}

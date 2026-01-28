import { useState } from "react";
import { Button } from "~/components/ui/button/button";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Label } from "~/components/ui/label/label";
import styles from "./review-form.module.css";

interface ReviewFormProps {
  onSuccess?: () => void;
}

export function ReviewForm({ onSuccess }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      rating,
      text: formData.get("text") as string,
    };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setSubmitMessage({
        type: "success",
        text: "Спасибо за ваш отзыв! Он будет опубликован после модерации.",
      });

      // Reset form
      e.currentTarget.reset();
      setRating(5);

      onSuccess?.();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Произошла ошибка. Пожалуйста, попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Оставьте отзыв</h3>

      <div className={styles.field}>
        <Label htmlFor="name">Ваше имя *</Label>
        <Input id="name" name="name" required placeholder="Анна М." />
      </div>

      <div className={styles.field}>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="anna@example.com"
        />
      </div>

      <div className={styles.field}>
        <Label>Оценка *</Label>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`${styles.star} ${star <= rating ? styles.active : ""}`}
              onClick={() => setRating(star)}
              aria-label={`${star} звезд`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <Label htmlFor="text">Ваш отзыв *</Label>
        <Textarea
          id="text"
          name="text"
          required
          minLength={10}
          maxLength={500}
          rows={4}
          placeholder="Расскажите о вашем опыте..."
        />
      </div>

      {submitMessage && (
        <div
          className={`${styles.message} ${submitMessage.type === "success" ? styles.success : styles.error}`}
        >
          {submitMessage.text}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className={styles.submitButton}>
        {isSubmitting ? "Отправка..." : "Отправить отзыв"}
      </Button>
    </form>
  );
}

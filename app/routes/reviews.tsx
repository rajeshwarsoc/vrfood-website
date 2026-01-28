import type { Route } from "./+types/reviews";
import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";
import { ReviewForm } from "~/components/review-form/review-form";
import { getApprovedReviews } from "~/lib/sanity.server";
import styles from "./reviews.module.css";
import starDoodle from "/icons/star-doodle.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Отзывы клиентов — VRfood" },
    {
      name: "description",
      content: "Читайте отзывы наших клиентов и делитесь своим опытом",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const reviews = await getApprovedReviews();
  return { reviews };
}

export default function Reviews({ loaderData }: Route.ComponentProps) {
  const { reviews } = loaderData;

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Отзывы клиентов</h1>
          <p className={styles.subtitle}>
            Мы ценим каждый отзыв и стремимся делать наши торты и блюда еще лучше
          </p>
        </div>

        <div className={styles.formSection}>
          <ReviewForm />
        </div>

        {reviews.length > 0 && (
          <div className={styles.reviewsSection}>
            <h2 className={styles.sectionTitle}>Что говорят наши клиенты</h2>
            <div className={styles.reviewsGrid}>
              {reviews.map((review) => (
                <div key={review._id} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewName}>{review.name}</span>
                    <div className={styles.stars}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <img key={i} src={starDoodle} alt="" className={styles.starIcon} />
                      ))}
                    </div>
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                  <time className={styles.reviewDate}>
                    {new Date(review.submittedAt).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

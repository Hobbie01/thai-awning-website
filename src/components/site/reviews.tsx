import { customerReviews, reviewsSnapshot } from "@/lib/reviews";
import { ArrowUpRight, Star } from "lucide-react";
import "./reviews.css";

function ReviewStars({ rating }: { rating: number }) {
  return (
    <span
      className="review-stars"
      role="img"
      aria-label={`${rating} จาก 5 ดาว`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={17} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export default function CustomerReviews() {
  return (
    <section
      id="reviews"
      className="section section-soft reviews-section"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        <div className="reviews-heading-row">
          <div>
            <h2 id="reviews-heading" className="section-heading">
              เสียงจากลูกค้าบน Google Maps
            </h2>
            <p className="reviews-source-note">
              ข้อความบางส่วนจากรีวิว · ข้อมูล ณ{" "}
              <time dateTime={reviewsSnapshot.checkedAt}>
                {reviewsSnapshot.checkedDateLabel}
              </time>
            </p>
          </div>
          <div className="reviews-summary">
            <p>
              <strong>{reviewsSnapshot.rating.toFixed(1)}</strong>
              <span> / 5</span>
            </p>
            <ReviewStars rating={reviewsSnapshot.rating} />
            <p>จาก {reviewsSnapshot.totalReviews} รีวิวบน Google Maps</p>
          </div>
        </div>
        <div className="reviews-grid">
          {customerReviews.map((review) => (
            <figure className="review-card" key={review.author}>
              <ReviewStars rating={review.rating} />
              <blockquote>
                <p>{review.excerpt}</p>
              </blockquote>
              <figcaption>
                <span className="review-initials" aria-hidden="true">
                  {review.initials}
                </span>
                <div>
                  <cite>{review.author}</cite>
                  <a
                    href={reviewsSnapshot.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`อ่านรีวิวบน Google Maps จาก ${review.author}`}
                  >
                    Google Maps <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="reviews-all-link">
          <a
            className="text-link"
            href={reviewsSnapshot.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านรีวิวทั้งหมดบน Google Maps{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

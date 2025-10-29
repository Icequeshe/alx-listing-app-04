import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  propertyId: number;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;

      try {
        // If using json-server:
        const response = await axios.get(`http://localhost:5000/reviews?propertyId=${propertyId}`);
        // If using a real API, replace with:
        // const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center text-gray-500">No reviews yet for this property.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">
      <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-4 last:border-none"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium text-gray-900">{review.name}</h3>
              <span className="text-yellow-500 font-semibold">
                ⭐ {review.rating}/5
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

import React, { useEffect, useState } from 'react';
import VaidyaService from './vaidyaService'; // Adjust path as needed

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    VaidyaService.getAllReview()
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
        alert('Failed to load reviews');
      });
  }, []);

  return (
    <div className="review-list-container">
      <h2>All Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <h4>{rev.hospital_name}</h4>
            <p>{rev.review}</p>
            <small>Reviewed on: {new Date(rev.created_at).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}

      <style jsx>{`
        .review-list-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .review-card {
          background: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        h4 {
          margin: 0 0 10px;
        }

        small {
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default AllReviews;


























































































import React, { useState } from 'react';
import VaidyaService from './vaidyaService'; // Ensure correct path

const ReviewHospitals = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [review, setReview] = useState('');
  const [hospitalId, setHospitalId] = useState(null); // can be null or simulated

  const handleSubmitReview = () => {
    if (!hospitalName || !review) {
      alert('Please enter both hospital name and review.');
      return;
    }

    const generatedHospitalId = hospitalId || Math.floor(Math.random() * 1000000);

    const reviewData = {
      hospitalId: generatedHospitalId,
      review: review,
      hospital_name: hospitalName
    };

    VaidyaService.saveReviews(reviewData)
      .then((response) => {
        alert('Review submitted successfully!');
        setReview('');
        setHospitalName('');
        setHospitalId(null); // reset
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
        if (error.response && error.response.data?.message) {
          alert(`Failed to submit review: ${error.response.data.message}`);
        } else {
          alert('Failed to submit review.');
        }
      });
  };

  return (
    <div className="review-container">
      <h2>Review a Hospital</h2>

      <img src="review.jpg" alt="Review Hospitals" className="hospital-image" />

      <div className="input-container">
        <input
          type="text"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          placeholder="Enter hospital name"
          className="hospital-input"
        />
      </div>

      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="review-textarea"
      />

      <button onClick={handleSubmitReview} className="submit-button">
        Submit Review
      </button>

      <style jsx>{`
        .review-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #fafafa;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 0 auto;
        }

        h2 {
          color: #333;
          margin-bottom: 20px;
        }

        .hospital-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .input-container {
          margin-bottom: 20px;
        }

        .hospital-input {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .review-textarea {
          width: 100%;
          height: 150px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ReviewHospitals;



























































































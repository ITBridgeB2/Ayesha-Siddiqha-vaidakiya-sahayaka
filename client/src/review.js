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

























































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reviews = () => {
//   // Hardcoded reviews array
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       hospitalName: 'Green Valley Hospital',
//       review: 'Great hospital with excellent staff and facilities. Highly recommended!'
//     },
//     {
//       id: 2,
//       hospitalName: 'Sunrise Medical Center',
//       review: 'Had a wonderful experience here. The doctors were very caring and thorough.'
//     }
//   ]);

//   // Uncomment this block if you want to fetch reviews from an API
//   /*
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/reviews')
//       .then(response => setReviews(response.data))
//       .catch(error => console.error('Error fetching reviews:', error));
//   }, []);
//   */

//   return (
//     <div>
//       <h3>Reviews</h3>
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <div key={review.id} className="review-container">
//             <h4>Hospital: {review.hospitalName}</h4>
//             <p>Review: {review.review}</p>
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet.</p>
//       )}

//       <style jsx>{`
//         .review-container {
//           margin-bottom: 20px;
//           padding: 15px;
//           background-color: #f9f9f9;
//           border-radius: 8px;
//           box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//         }

//         h3 {
//           color: #333;
//         }

//         h4 {
//           color: #007bff;
//         }

//         p {
//           font-size: 16px;
//           color: #555;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Reviews;


































































































// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Reviews = () => {
// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/reviews')
// //       .then(response => setReviews(response.data))
// //       .catch(error => console.error('Error fetching reviews:', error));
// //   }, []);

// //   return (
// //     <div>
// //       <h3>Reviews</h3>
// //       {reviews.length > 0 ? (
// //         reviews.map((review) => (
// //           <div key={review.id}>
// //             <h4>Hospital: {review.hospitalName}</h4>
// //             <p>Review: {review.review}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No reviews yet.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Reviews;

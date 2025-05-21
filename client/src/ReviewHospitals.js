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


























































































// import React, { useState } from 'react';
// import VaidyaService from './vaidyaService'; // Adjust the path as per your project structure

// const ReviewHospitals = () => {
//   const [hospitalName, setHospitalName] = useState('');
//   const [review, setReview] = useState('');
//   const [selectedHospital, setSelectedHospital] = useState(null);

//   const handleSubmitReview = () => {
//     if (hospitalName && review) {
//       // Find the hospital (optional: you can use an API to verify the hospital)
//       const foundHospital = { id: Date.now(), name: hospitalName }; // Temporary: We assume a new hospital
//       setSelectedHospital(foundHospital); // Update the selected hospital

//       // Post review to the server
//       VaidyaService.saveReviews({
//         hospitalId: foundHospital.id,
//         review,
//       })
//         .then((response) => {
//           alert('Review submitted successfully!');
//           setReview('');
//           setHospitalName('');
//         })
//         .catch((error) => {
//           console.error('Error submitting review:', error);
//           alert('Failed to submit review.');
//         });
//     } else {
//       alert('Please enter a hospital name and write a review.');
//     }
//   };

//   return (
//     <div className="review-container">
//       <h2>Review a Hospital</h2>
//       {/* Display hospital image */}
//       <img src="review.jpg" alt="Review Hospitals" className="hospital-image" />

//       <div className="input-container">
//         <input
//           type="text"
//           value={hospitalName}
//           onChange={(e) => setHospitalName(e.target.value)}
//           placeholder="Enter hospital name"
//           className="hospital-input"
//         />
//       </div>

//       <textarea
//         placeholder="Write your review..."
//         value={review}
//         onChange={(e) => setReview(e.target.value)}
//         className="review-textarea"
//       />

//       <button onClick={handleSubmitReview} className="submit-button">
//         Submit Review
//       </button>

//       {/* Internal CSS */}
//       <style jsx>{`
//         .review-container {
//           font-family: Arial, sans-serif;
//           padding: 20px;
//           background-color: #fafafa;
//           border-radius: 8px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         h2 {
//           color: #333;
//           margin-bottom: 20px;
//         }

//         .hospital-image {
//           width: 100%;
//           height: auto;
//           border-radius: 8px;
//           margin-bottom: 20px;
//         }

//         .input-container {
//           margin-bottom: 20px;
//         }

//         .hospital-input {
//           width: 100%;
//           padding: 10px;
//           border-radius: 5px;
//           border: 1px solid #ccc;
//           font-size: 16px;
//           background-color: #fff;
//         }

//         .review-textarea {
//           width: 100%;
//           height: 150px;
//           padding: 10px;
//           border-radius: 5px;
//           border: 1px solid #ccc;
//           font-size: 16px;
//           margin-bottom: 20px;
//           resize: vertical;
//         }

//         .submit-button {
//           padding: 10px 20px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 16px;
//           transition: background-color 0.3s ease;
//         }

//         .submit-button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ReviewHospitals;
























































































// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ReviewHospitals = () => {
// //   const [hospitals, setHospitals] = useState([
// //     { id: 1, name: 'Green Valley Hospital' },
// //     { id: 2, name: 'Sunrise Medical Center' },
// //     { id: 3, name: 'City Health Hospital' },
// //     { id: 4, name: 'Lakewood Community Hospital' }
// //   ]);
// //   const [review, setReview] = useState('');
// //   const [selectedHospital, setSelectedHospital] = useState(null);

// //   const hardcodedReviews = {
// //     1: 'Great hospital with excellent staff and facilities!',
// //     2: 'The hospital is good, but the wait time is quite long.',
// //     3: 'Clean, efficient, and friendly doctors.',
// //     4: 'I had a great experience with the emergency services.'
// //   };

// //   useEffect(() => {
// //     // Optionally, you can still fetch hospitals if needed.
// //     // axios.get('http://localhost:5000/api/hospitals')
// //     //   .then(response => setHospitals(response.data))
// //     //   .catch(error => console.error('Error fetching hospitals:', error));
// //   }, []);

// //   const handleSubmitReview = () => {
// //     if (selectedHospital && review) {
// //       // You can still make a POST request if necessary (this is for demonstration purposes)
// //       axios.post('http://localhost:5000/api/reviews', {
// //         hospitalId: selectedHospital.id,
// //         review,
// //       })
// //         .then(response => {
// //           alert('Review submitted successfully!');
// //           setReview('');
// //         })
// //         .catch(error => {
// //           console.error('Error submitting review:', error);
// //           alert('Failed to submit review.');
// //         });
// //     } else {
// //       alert('Please select a hospital and write a review.');
// //     }
// //   };

// //   return (
// //     <div className="review-container">
// //       <h2>Review Hospitals</h2>
// //       {/* Display hospital image */}
// //       <img src="review.jpg" alt="Review Hospitals" className="hospital-image" />

// //       <div className="select-container">
// //         <select
// //           onChange={(e) => {
// //             const hospital = JSON.parse(e.target.value);
// //             setSelectedHospital(hospital);
// //             setReview(hardcodedReviews[hospital.id] || '');  // Set hardcoded review if exists
// //           }}
// //           className="hospital-select"
// //         >
// //           <option value="">Select a hospital</option>
// //           {hospitals.map((hospital) => (
// //             <option key={hospital.id} value={JSON.stringify(hospital)}>
// //               {hospital.name}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <textarea
// //         placeholder="Write your review..."
// //         value={review}
// //         onChange={(e) => setReview(e.target.value)}
// //         className="review-textarea"
// //       />

// //       <button
// //         onClick={handleSubmitReview}
// //         className="submit-button"
// //       >
// //         Submit Review
// //       </button>

// //       {/* Internal CSS */}
// //       <style jsx>{`
// //         .review-container {
// //           font-family: Arial, sans-serif;
// //           padding: 20px;
// //           background-color: #fafafa;
// //           border-radius: 8px;
// //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// //           max-width: 600px;
// //           margin: 0 auto;
// //         }

// //         h2 {
// //           color: #333;
// //           margin-bottom: 20px;
// //         }

// //         .hospital-image {
// //           width: 100%;
// //           height: auto;
// //           border-radius: 8px;
// //           margin-bottom: 20px;
// //         }

// //         .select-container {
// //           margin-bottom: 20px;
// //         }

// //         .hospital-select {
// //           width: 100%;
// //           padding: 10px;
// //           border-radius: 5px;
// //           border: 1px solid #ccc;
// //           font-size: 16px;
// //           background-color: #fff;
// //         }

// //         .review-textarea {
// //           width: 100%;
// //           height: 150px;
// //           padding: 10px;
// //           border-radius: 5px;
// //           border: 1px solid #ccc;
// //           font-size: 16px;
// //           margin-bottom: 20px;
// //           resize: vertical;
// //         }

// //         .submit-button {
// //           padding: 10px 20px;
// //           background-color: #007bff;
// //           color: white;
// //           border: none;
// //           border-radius: 5px;
// //           cursor: pointer;
// //           font-size: 16px;
// //           transition: background-color 0.3s ease;
// //         }

// //         .submit-button:hover {
// //           background-color: #0056b3;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ReviewHospitals;

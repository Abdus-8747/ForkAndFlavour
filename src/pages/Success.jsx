import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center animate-fade-in">
          <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-pop" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Order Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Your order has been placed successfully.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition-all"
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;

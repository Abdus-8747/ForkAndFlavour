import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const GitHub = () => {
  const [repo, setRepo] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Abdus-8747")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/Abdus-8747/ForkAndFlavour")
      .then((response) => response.json())
      .then((data) => setRepo(data))
      .catch((error) => console.error("Error fetching repo data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Profile Section */}
      {user && (
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6 text-center">
          <img src={user.avatar_url} alt="Avatar" className="w-37 h-37 rounded-full mx-auto border-4 border-green-500" />
          <h1 className="text-3xl font-bold text-green-600 mt-4">{user.name}</h1>
          <p className="text-gray-600 mt-4 text-xl">{user.bio}</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 text-3xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdus-samad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 text-3xl">
              <FaLinkedin />
            </a>
            <a href="mailto:abdussamadshamsi486@gmail.com" className="text-gray-600 hover:text-green-600 text-3xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
      
      {/* Repository Section */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2">
          <FaGithub className="text-3xl" /> GitHub Repository
        </h2>
        <p className="text-gray-600 mt-2">Source code for Fork & Flavour website.</p>
        {repo ? (
          <div className="mt-6 border border-gray-300 rounded-lg p-4 bg-gray-50 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900">{repo.name}</h2>
            <p className="text-gray-600 mt-1">{repo.description}</p>
            <div className="mt-3 flex items-center gap-4">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-500 font-bold flex items-center gap-1 hover:text-green-700 transition-colors"
              >
                View on GitHub <FiExternalLink />
              </a>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">Loading repository details...</p>
        )}
      </div>
    </div>
  );
};

export default GitHub;

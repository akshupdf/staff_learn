import React from "react";
import { Link } from "react-router-dom";

const StaffPortal = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-5">
          <div className="text-xl font-bold">Staff Portal</div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-800 font-medium hover:text-gray-600">
              Therapist
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-gray-600">
              Customer Service
            </a>
            <a href="#" className="text-gray-800 font-medium hover:text-gray-600">
              Sales
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero flex items-center justify-center bg-gray-200 h-[95vh] ">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl font-light mb-6">Staff Learning Portal</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Access your training materials, SOPs, and development resources all in one place. Designed to help you
            deliver exceptional service to our clients.
          </p>
          <Link
                to="/Staff"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* Training Modules Section */}
      <section id="modules" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center font-light mb-4">Training Modules</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Select your role below to access your personalized learning path and resources.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Therapist Training Card */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-light mb-4">Therapist Training</h3>
              <p className="text-gray-600 mb-4">
                Master our treatment protocols, safety procedures, and client consultation processes.
              </p>
              <ul className="text-gray-600 list-disc list-inside mb-6">
                <li>Treatment Protocols</li>
                <li>Safety & Hygiene</li>
                <li>Client Care Standards</li>
              </ul>
                <Link
                to="/Staff"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
              >
                Access Modules
              </Link>
            </div>

            {/* Customer Service Card */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-light mb-4">Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Learn communication guidelines, booking procedures, and product knowledge.
              </p>
              <ul className="text-gray-600 list-disc list-inside mb-6">
                <li>Communication Guidelines</li>
                <li>Booking Procedures</li>
                <li>Product Knowledge</li>
              </ul>
              <Link
                to="/Staff"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
              >
                Access Modules
              </Link>
            </div>

            {/* Sales Training Card */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-light mb-4">Sales Training</h3>
              <p className="text-gray-600 mb-4">
                Develop your sales techniques, product knowledge, and performance tracking.
              </p>
              <ul className="text-gray-600 list-disc list-inside mb-6">
                <li>Sales Techniques</li>
                <li>Performance Metrics</li>
                <li>Product Training</li>
              </ul>
                <Link
                to="/Staff"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
              >
                Access Modules
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffPortal;

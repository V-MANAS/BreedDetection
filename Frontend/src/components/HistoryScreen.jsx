import { useState } from "react";
import { MapPin, Eye, X } from "lucide-react";

const HistoryScreen = ({ registrations }) => {
  const [selectedReg, setSelectedReg] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-purple-700 flex items-center gap-2">
            📜 Registration History
          </h2>
          <span className="text-sm text-gray-500">
            Total: {registrations.length}
          </span>
        </div>

        {/* Empty State */}
        {registrations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No animals registered yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrations.map((reg) => (
              <div
                key={reg.id}
                className="group bg-gradient-to-b from-white to-purple-50 border border-purple-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* Image */}
                {reg.image && (
                  <div className="relative">
                    <img
                      src={reg.image}
                      alt={reg.breed}
                      className="w-full h-44 object-cover rounded-t-2xl"
                    />
                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {reg.breed}
                    </span>
                  </div>
                )}

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {reg.breed}
                  </h3>
                  <p className="text-sm text-green-700 font-medium mb-2">
                    Confidence: {(reg.confidence * 100).toFixed(1)}%
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-purple-500" />
                      {reg.location}
                    </div>
                    <span className="text-gray-500">{reg.date}</span>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedReg(reg)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold shadow hover:shadow-lg transition"
                  >
                    <Eye size={16} /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

     {/* Details Modal */}
{selectedReg && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    {/* Background overlay with blur */}
    <div
      className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={() => setSelectedReg(null)}
    ></div>

    <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg w-full p-6 transform transition-all scale-100 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={() => setSelectedReg(null)}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
      >
        <X size={22} />
      </button>

      <h3 className="text-2xl font-extrabold text-purple-700 mb-4 flex items-center gap-2">
        🐄 Animal Details
      </h3>

      {/* Image */}
      {selectedReg.image && (
        <img
          src={selectedReg.image}
          alt={selectedReg.breed}
          className="w-full h-56 object-cover rounded-xl mb-4 shadow-md"
        />
      )}

      {/* Info */}
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold text-purple-600">Breed:</span>{" "}
          {selectedReg.breed}
        </p>
        <p>
          <span className="font-semibold text-purple-600">Confidence:</span>{" "}
          {(selectedReg.confidence * 100).toFixed(1)}%
        </p>
        <p>
          <span className="font-semibold text-purple-600">Location:</span>{" "}
          {selectedReg.location}
        </p>
        <p>
          <span className="font-semibold text-purple-600">Date:</span>{" "}
          {selectedReg.date}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button
          onClick={() => alert("Future: More details here")}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
        >
          More Actions
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default HistoryScreen;

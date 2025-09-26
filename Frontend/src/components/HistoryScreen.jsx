import { MapPin, Eye } from "lucide-react";

const HistoryScreen = ({ registrations }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">📜 Registration History</h2>

        {registrations.length === 0 ? (
          <p className="text-gray-600 text-center">No animals registered yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrations.map((reg) => (
              <div
                key={reg.id}
                className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border rounded-xl shadow hover:shadow-lg transition"
              >
               
                {reg.image && (
                  <img
                    src={reg.image}
                    alt={reg.breed}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                )}

                <h3 className="font-bold text-gray-900 text-lg">{reg.breed}</h3>
                <p className="text-sm text-green-700 font-medium">
                  Confidence: {(reg.confidence * 100).toFixed(1)}%
                </p>

               
                <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {reg.location}
                  </div>
                  <span>{reg.date}</span>
                </div>

             
                <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-semibold hover:bg-purple-700 transition">
                  <Eye size={14} /> View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryScreen;



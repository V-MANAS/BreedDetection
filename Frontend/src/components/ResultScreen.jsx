import { Save, CheckCircle } from "lucide-react";

const ResultScreen = ({
  breedResult,
  capturedImage,
  registrations,
  setRegistrations,
  setCurrentScreen,
}) => {
  const handleSave = () => {
    const newEntry = {
      id: Date.now(),
      breed: breedResult?.class || "Unknown",
      confidence: breedResult?.confidence || 0,
      predictions: breedResult?.predictions || [],
      image: capturedImage,
      date: new Date().toLocaleDateString(),
    };
    setRegistrations([newEntry, ...registrations]);
    setCurrentScreen("history");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-3xl p-6 space-y-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-600 w-6 h-6" />
          <h2 className="text-2xl font-bold">Breed Prediction</h2>
        </div>

        {/* Show captured image */}
        {capturedImage && (
          <img
            src={capturedImage}
            alt="Animal"
            className="w-40 h-40 rounded-xl mx-auto shadow"
          />
        )}

        {/* Best match */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-green-700 font-semibold">Best Match:</p>
          <p className="text-lg font-bold text-green-900">
            {breedResult?.class || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            Confidence: {(breedResult?.confidence * 100).toFixed(2)}%
          </p>
        </div>

        {/* Top 3 predictions */}
        {breedResult?.predictions?.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">Top Predictions:</h3>
            {breedResult.predictions.slice(0, 3).map((p, i) => (
              <div
                key={i}
                className="p-3 border rounded-lg bg-gray-50 flex justify-between items-center"
              >
                <span className="font-medium">{p.class}</span>
                <span className="text-sm text-gray-700">
                  {(p.confidence * 100).toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Save button */}
        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow hover:from-blue-700 hover:to-indigo-700"
        >
          <Save /> Save Registration
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;

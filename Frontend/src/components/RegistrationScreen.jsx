import { Save } from "lucide-react";

const RegistrationScreen = ({
  breedResult,
  capturedImage,
  registrations,
  setRegistrations,
  setCurrentScreen,
}) => {
  const handleSave = () => {
    setRegistrations([
      ...registrations,
      { id: Date.now(), breed: breedResult?.name || "Unknown" },
    ]);
    setCurrentScreen("history");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Animal Registration</h2>
      {capturedImage && (
        <img
          src={capturedImage}
          alt="Animal"
          className="w-40 h-40 rounded-lg my-4"
        />
      )}
      <p className="mb-4">Predicted Breed: {breedResult?.name || "N/A"}</p>
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
      >
        <Save size={20} /> Save Registration
      </button>
    </div>
  );
};

export default RegistrationScreen;

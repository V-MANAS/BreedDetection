import { Save } from "lucide-react";
import { useState } from "react";

const RegistrationScreen = ({
  breedResult,
  capturedImage,
  registrations,
  setRegistrations,
  setCurrentScreen,
  setMessage,      // ✅ for toast
  setMessageType,  // ✅ for toast
}) => {
  // ✅ Form fields for extra details
  const [owner, setOwner] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Female");
  const [health, setHealth] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    const newRegistration = {
      id: Date.now(),
      breed: breedResult?.class || breedResult?.name || "Unknown",
      confidence: breedResult?.confidence || 0,
      image: capturedImage,
      location: "Unknown", // you can extend with GPS later
      date: new Date().toISOString().split("T")[0],
      owner,
      age,
      gender,
      health,
      notes,
    };

    setRegistrations([...registrations, newRegistration]);

    // ✅ success toast
    setMessage("✅ Animal registered successfully!");
    setMessageType("success");

    setCurrentScreen("history");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Animal Registration</h2>

      {/* Image */}
      {capturedImage && (
        <img
          src={capturedImage}
          alt="Animal"
          className="w-40 h-40 rounded-lg my-4"
        />
      )}

      {/* Breed + Confidence */}
      <p className="mb-4">
        <strong>Predicted Breed:</strong>{" "}
        {breedResult?.class || breedResult?.name || "N/A"} (
        {(breedResult?.confidence * 100 || 0).toFixed(1)}%)
      </p>

      {/* Form Fields */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Owner Name"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Age (e.g., 5 years)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option>Female</option>
          <option>Male</option>
        </select>
        <input
          type="text"
          placeholder="Health Status"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
      >
        <Save size={20} /> Save Registration
      </button>
    </div>
  );
};

export default RegistrationScreen;

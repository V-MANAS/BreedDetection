import { Camera, Upload, Zap } from "lucide-react";

const HomeScreen = ({ setCurrentScreen, setCapturedImage }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
        setCurrentScreen("analysis");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 p-8 text-center">
      {/* Header */}
      <div className="mb-12">
        <div className="w-28 h-28 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
          <Zap className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-4xl font-extrabold mt-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
          AI-Powered Breed Recognition
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Capture or upload an image to detect cattle breed instantly
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Capture Image */}
        <div
          onClick={() => setCurrentScreen("camera")}
          className="cursor-pointer bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl border hover:border-orange-400 transition transform hover:scale-105"
        >
          <Camera className="w-12 h-12 text-orange-600 mx-auto" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Capture Image
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Use your device camera to capture an image
          </p>
        </div>

        {/* Upload Image */}
        <label className="cursor-pointer bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl border hover:border-green-400 transition transform hover:scale-105">
          <Upload className="w-12 h-12 text-green-600 mx-auto" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Upload Image
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Select an image from your gallery
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-8 rounded-2xl shadow text-center transform hover:scale-105 transition">
          <p className="text-4xl font-extrabold text-orange-600">24</p>
          <p className="text-gray-700 mt-2 font-medium">Animals Registered</p>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-green-200 p-8 rounded-2xl shadow text-center transform hover:scale-105 transition">
          <p className="text-4xl font-extrabold text-green-600">75%</p>
          <p className="text-gray-700 mt-2 font-medium">Accuracy Rate</p>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-2xl shadow text-center transform hover:scale-105 transition">
          <p className="text-4xl font-extrabold text-blue-600">200+</p>
          <p className="text-gray-700 mt-2 font-medium">Supported Breeds</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

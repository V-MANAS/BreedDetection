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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-6 text-center">
      <div className="mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
          <Zap className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold mt-6">AI-Powered Breed Recognition</h1>
        <p className="text-gray-600 mt-2">
          Capture or upload an image to detect cattle breed
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Capture Image */}
        <div
          onClick={() => setCurrentScreen("camera")}
          className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border hover:border-orange-300 transition"
        >
          <Camera className="w-10 h-10 text-orange-600 mx-auto" />
          <h3 className="mt-3 font-semibold">Capture Image</h3>
        </div>

        {/* Upload Image */}
        <label className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border hover:border-green-300 transition">
          <Upload className="w-10 h-10 text-green-600 mx-auto" />
          <h3 className="mt-3 font-semibold">Upload Image</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-2xl font-bold text-orange-600">24</p>
          <p className="text-gray-600">Animals Registered</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-2xl font-bold text-green-600">95%</p>
          <p className="text-gray-600">Accuracy Rate</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-2xl font-bold text-blue-600">20+</p>
          <p className="text-gray-600">Supported Breeds</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

import { useEffect } from "react";
import { Zap } from "lucide-react";
import axios from "axios";

const AnalysisScreen = ({ capturedImage, setBreedResult, setCurrentScreen }) => {
  useEffect(() => {
    if (!capturedImage) return;

    const analyzeWithBackend = async () => {
      try {
        console.log("Sending image to backend...");

        const response = await axios.post("http://localhost:5000/analyze", {
          image: capturedImage, 
        });

        console.log("Backend Response:", response.data);

        if (response.data?.predictions?.length > 0) {
          const bestPrediction = response.data.predictions[0];
          setBreedResult(bestPrediction);
          setCurrentScreen("results");
        } else {
          alert("No breed detected. Please try another image.");
          setCurrentScreen("home");
        }
      } catch (err) {
        console.error("Error calling backend:", err.message);
        alert("Error analyzing image. Please check server.");
        setCurrentScreen("home");
      }
    };

    analyzeWithBackend();
  }, [capturedImage, setBreedResult, setCurrentScreen]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="text-center">
        <Zap className="w-12 h-12 text-blue-600 animate-pulse mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Analyzing Image...</h2>
        <p className="text-gray-600 mb-6">
          Our AI is detecting the breed. Please wait.
        </p>

        {capturedImage && (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-72 h-56 rounded-2xl shadow-lg border mx-auto"
          />
        )}

        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisScreen;

import { useEffect } from "react";
import { Camera, X, Upload } from "lucide-react";

const CameraScreen = ({ videoRef, canvasRef, setCapturedImage, setCurrentScreen }) => {
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();


    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [videoRef]);

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL("image/png");
    setCapturedImage(imageData);

    stopCamera();

    setCurrentScreen("analysis");
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result); 
       
        stopCamera();
        setCurrentScreen("analysis");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    stopCamera();
    setCurrentScreen("home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <video ref={videoRef} autoPlay className="rounded-xl shadow-lg" />
      <canvas ref={canvasRef} width="640" height="480" className="hidden" />

      <div className="flex gap-4 mt-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="bg-red-500 text-white p-3 rounded-full shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Capture Button */}
        <button
          onClick={capturePhoto}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg"
        >
          <Camera className="w-6 h-6" />
        </button>

        {/* Upload Button */}
        <label className="bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer">
          <Upload className="w-6 h-6" />
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default CameraScreen;

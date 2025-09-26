import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import CameraScreen from "./components/CameraScreen";
import AnalysisScreen from "./components/AnalysisScreen";
import ResultScreen from "./components/ResultScreen";
import RegistrationScreen from "./components/RegistrationScreen";
import HistoryScreen from "./components/HistoryScreen";

const GorakshaSavardhanApp = () => {
 const [currentScreen, setCurrentScreen] = useState("login");

  const [user, setUser] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [breedResult, setBreedResult] = useState(null);
  
  const [language, setLanguage] = useState("en");

  const [registrations, setRegistrations] = useState([
  {
    id: "A1001",
    breed: "Gir",
    confidence: 0.92,
    location: "Ahmedabad, Gujarat",
    date: "2025-09-20",
    image:
      "https://imgs.search.brave.com/he_Fg7HFf-tIItJxd2hOJn3a4Is8i4nppmaH56dyfcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9naXItY293/LWZhcm0tcGljLXNr/eS0yNjBudy0yMzIx/MDkyNzAzLmpwZw",
    owner: "Ramesh Patel",
    age: "5 years",
    gender: "Female",
    health: "Healthy, vaccinated",
    notes: "Used mainly for milk production.",
  },
  {
    id: "A1002",
    breed: "Murrah",
    confidence: 0.89,
    location: "Karnal, Haryana",
    date: "2025-09-21",
    image:
      "https://imgs.search.brave.com/jkDdI-lIPMzppg42Gee7COGzeRjDN_qtJbeUvEYf86k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkLzM0/L2QzLzdkMzRkM2Nh/MjdmY2E3YWE2MTM3/ZGIyNDk5ZTUyMzU0/LmpwZw",
    owner: "Suresh Yadav",
    age: "3 years",
    gender: "Male",
    health: "Minor skin infection",
    notes: "Popular for high milk yield.",
  },
  {
    id: "A1003",
    breed: "Sahiwal",
    confidence: 0.95,
    location: "Lucknow, UP",
    date: "2025-09-22",
    image:
      "https://imgs.search.brave.com/9KB7qhEf2zJEVUBKlZX415t0qxPkZKuL-511piZe9KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcGlt/Zy50aXN0YXRpYy5j/b20vMDc4MzE3NTYv/Yi80L1NhaGl3YWwt/Q293LmpwZw",
    owner: "Anita Sharma",
    age: "4 years",
    gender: "Female",
    health: "Excellent",
    notes: "Calm temperament, good for breeding.",
  },
]);


  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />

      {currentScreen === "login" && (
        <LoginScreen setCurrentScreen={setCurrentScreen} setUser={setUser} />
      )}

    {currentScreen === "home" && (
  <HomeScreen
    setCurrentScreen={setCurrentScreen}
    setCapturedImage={setCapturedImage}
    language={language}   
  />
)}
      {currentScreen === "camera" && (
        <CameraScreen
          videoRef={videoRef}
          canvasRef={canvasRef}
          setCapturedImage={setCapturedImage}
          setCurrentScreen={setCurrentScreen}
        />
      )}

     {currentScreen === "analysis" && (
  <AnalysisScreen
    capturedImage={capturedImage}
    setBreedResult={setBreedResult}
    setCurrentScreen={setCurrentScreen}
  />
)}

      {currentScreen === "results" && (
        <ResultScreen
          breedResult={breedResult}
          capturedImage={capturedImage}
          setCurrentScreen={setCurrentScreen}
          registrations={registrations}
          setRegistrations={setRegistrations}
        />
      )}

      {currentScreen === "registration" && (
        <RegistrationScreen
          breedResult={breedResult}
          capturedImage={capturedImage}
          registrations={registrations}
          setRegistrations={setRegistrations}
          setCurrentScreen={setCurrentScreen}
        />
      )}

      {currentScreen === "history" && (
        <HistoryScreen registrations={registrations} />
      )}

      {currentScreen === "settings" && (
        <SettingsScreen setLanguage={setLanguage} language={language} />  
      )}
    </div>
  );
};

export default GorakshaSavardhanApp;

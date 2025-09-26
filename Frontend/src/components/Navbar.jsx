import { Home, Database, Camera, Settings } from "lucide-react";

const Navbar = ({ setCurrentScreen, currentScreen, language, setLanguage }) => {
  const menu = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "camera", icon: <Camera size={20} />, label: "Capture" },
    { id: "history", icon: <Database size={20} />, label: "History" },
  ];

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-green-600 text-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-lg flex items-center gap-2">🌿 Goraksha</h1>

      <div className="flex items-center space-x-6">
        {/* Navigation Menu */}
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex items-center gap-1 hover:text-yellow-300 ${
              currentScreen === item.id ? "underline font-semibold" : ""
            }`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}

        {/* Language Dropdown */}
        <div className="flex items-center gap-2">
          
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border border-white rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

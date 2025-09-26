import { Home, Database, Camera } from "lucide-react";

const Navbar = ({ setCurrentScreen, currentScreen, language, setLanguage }) => {
  const menu = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "camera", icon: <Camera size={20} />, label: "Capture" },
    { id: "history", icon: <Database size={20} />, label: "History" },
  ];

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-orange-600/90 to-green-600/90 text-white shadow-lg px-6 py-3 flex justify-between items-center sticky top-0 z-50 border-b border-white/20">
      {/* Logo / Title */}
      <h1 className="font-extrabold text-xl flex items-center gap-2 tracking-wide">
        🌿 <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">Goraksha</span>
      </h1>

      {/* Right Section */}
      <div className="flex items-center space-x-8">
        {/* Navigation Menu */}
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex items-center gap-2 transition-all relative ${
              currentScreen === item.id
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-200"
            }`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>

            {/* Animated underline for active tab */}
            {currentScreen === item.id && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"></span>
            )}
          </button>
        ))}

        {/* Language Dropdown */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white/20 border border-white/30 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
        >
          <option value="en" className="text-black">English</option>
          <option value="hi" className="text-black">हिन्दी</option>
          <option value="mr" className="text-black">मराठी</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

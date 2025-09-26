const LoginScreen = ({ setCurrentScreen, setUser }) => {
  const handleLogin = () => {
    setUser({ id: "FLW001", name: "Rajesh Kumar" });
    setCurrentScreen("home");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">🐄</span>
          </div>
          <h2 className="text-2xl font-bold">Login to BPA</h2>
          <p className="text-gray-600">Field Worker Access</p>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-orange-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-green-700 transition-all"
        >
          Login
        </button>

        
      </div>
    </div>
  );
};

export default LoginScreen;

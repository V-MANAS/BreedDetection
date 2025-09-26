const MessageBanner = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-14 right-4   /* ✅ positioned below navbar */
                  px-6 py-3 rounded-lg shadow-lg z-50
                  ${type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="font-bold">×</button>
      </div>
    </div>
  );
};

export default MessageBanner;

import { useEffect, useState } from "react";

function NotFoundPopup() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // 3 sec
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
      🚫 The page you’re trying to visit does not exist
    </div>
  );
}

export default NotFoundPopup;

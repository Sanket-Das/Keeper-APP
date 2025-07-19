import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-4 text-gray-500 text-sm mt-10">
      <p>Made by Sanket With ❤️</p>
    </footer>
  );
}

export default Footer;

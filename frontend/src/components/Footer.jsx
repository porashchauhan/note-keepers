import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Porash Chauhan</p>
    </footer>
  );
}

export default Footer;

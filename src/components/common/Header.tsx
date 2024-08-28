import { Menubar } from "primereact/menubar";
import React from "react";

const Header = () => {
  const navItems = [
    { label: "Inicio", icon: "pi pi-fw pi-home" },
    {
      label: "Tienda",
      icon: "pi pi-fw pi-images",
      /* command: () => scrollToSection("location"), */
    },
    {
      label: "Academia",
      icon: "pi pi-fw pi-envelope",
      /* command: () => scrollToSection("location"), */
    },
  ];

  const end = (
    <h1 style={{ color: "gray", marginRight: 28 }}>Historia en Podcast</h1>
  );
  return <Menubar model={navItems} className="" end={end} />;
};

export default Header;

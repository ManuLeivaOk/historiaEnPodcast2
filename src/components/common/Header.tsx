"use client";
import { Menubar } from "primereact/menubar";
import React from "react";

const Header = () => {
  const navItems = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () => (window.location.href = "/"),
    },
    {
      label: "Tienda",
      icon: "pi pi-shopping-cart",
      command: () => (window.location.href = "/tienda"),
    },
    {
      label: "Academia",
      icon: "pi pi-graduation-cap",
      command: () => (window.location.href = "/academia"),
    },
  ];

  const end = (
    <h1 style={{ color: "gray", marginRight: 28 }}>Historia en Podcast</h1>
  );
  return <Menubar model={navItems} className="" end={end} />;
};

export default Header;

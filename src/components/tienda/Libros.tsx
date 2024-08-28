/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function Libros() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1001",
      code: "f230fh0g3",
      name: "Alta en el Cielo: una historia de la bandera argentina",
      description: "Product Description",
      image: "/1.webp",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1002",
      code: "f230fh0g3",
      name: "Historia Integral Argentina - Parte I (1800-1916)",
      description: "Product Description",
      image: "/2.webp",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f230fh0g3",
      name: "Historia al Alcance de Todos",
      description: "Product Description",
      image: "/3.webp",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1004",
      code: "f230fh0g3",
      name: "Historia al Alcance de Todos",
      description: "Product Description",
      image: "/4.webp",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
  ]);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const productTemplate = (product: Product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 tienda-card">
        <div className="mb-3">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="w-6 shadow-2 h-image-book"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag value={"En stock"} severity={"success"}></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-cart-plus" />
            <Button icon="pi pi-star-fill" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card py-4 px-2 md:px-8">
      <Carousel
        value={products}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        className="xl:mx-8"
      />
    </div>
  );
}

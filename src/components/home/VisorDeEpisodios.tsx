/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import { warn } from "console";

export default function VisorDeEpisodios() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Episodio 1",
      category: "Televisión",
      price: "10.00",
      image: "/SAN.webp",
      rating: 4,
      inventoryStatus: "INSTOCK",
    },
    {
      id: 2,
      name: "Episodio 2",
      category: "Podcast",
      price: "15.00",
      image: "/SIMON.webp",
      rating: 5,
      inventoryStatus: "LOWSTOCK",
    },
    {
      id: 3,
      name: "Episodio 3",
      category: "Podcast",
      price: "20.00",
      image: "/ESTAF.webp",
      rating: 3,
      inventoryStatus: "OUTOFSTOCK",
    },
    {
      id: 4,
      name: "Episodio 4",
      category: "Radio",
      price: "20.00",
      image: "/ESTAF.webp",
      rating: 3,
      inventoryStatus: "OUTOFSTOCK",
    },
    {
      id: 5,
      name: "Episodio 4",
      category: "Radio",
      price: "20.00",
      image: "/ESTAF.webp",
      rating: 3,
      inventoryStatus: "OUTOFSTOCK",
    },
    {
      id: 6,
      name: "Episodio 4",
      category: "Radio",
      price: "20.00",
      image: "/ESTAF.webp",
      rating: 3,
      inventoryStatus: "OUTOFSTOCK",
    },
  ]);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const listItem = (product: any, index: number) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={product.image}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <div className="flex align-items-center gap-2">
                <i className="pi pi-hashtag"></i>
                <span className="font-semibold">{product.category}</span>
              </div>
              <div className="flex align-items-center gap-3">
                <Tag value={product.inventoryStatus}></Tag>
                <Tag value={product.inventoryStatus}></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Button icon="pi pi-link" className="p-button-rounded"></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-4 p-2" key={product.id}>
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <Tag value={product.inventoryStatus}></Tag>
            <Tag value={product.inventoryStatus}></Tag>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img
              className="w-9 shadow-2 border-round"
              src={product.image}
              alt={product.name}
            />
            <div className="text-2xl font-bold">{product.name}</div>
          </div>

          <div className="flex align-items-center justify-content-between">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-hashtag"></i>
              <span className="font-semibold">{product.category}</span>
            </div>
            <Button icon="pi pi-link" className="p-button-rounded"></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    rating: number;
    inventoryStatus: string;
  }) => {
    if (!product) {
      return null;
    }

    return layout === "list"
      ? listItem(product, products.indexOf(product))
      : gridItem(product);
  };

  const header = () => {
    return (
      <div className="flex align-items-center justify-content-end">
        <h3 className="mr-5 text-2xl">Contenidos más recientes</h3>
        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value as "grid" | "list")}
        />
      </div>
    );
  };

  return (
    <div className="card md:p-8 bgGray">
      <DataView
        value={products}
        layout={layout}
        itemTemplate={itemTemplate}
        header={header()}
        className="mx-8"
      />
    </div>
  );
}

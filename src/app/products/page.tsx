"use client"

import { useEffect } from "react";
import { Button, Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  useProductActions,
  useProductState,
} from "../../app/providers/productProvider";
import { IProduct } from "../../app/providers/productProvider/context";
import Image from "next/image";

const ProductsPage = () => {
  // Get products and loading state from context
  const { products, isPending, isError } = useProductState();
  const { getProducts, deleteProduct, updateProduct } = useProductActions();

  // Fetch products when component mounts
  useEffect(() => {
    getProducts();
  }, []); // Only run once on mount

  // Show loading state
  if (isPending) {
    return <div>Loading products...</div>;
  }

  // Show error state
  if (isError) {
    return <div>Error loading products!</div>;
  }

  // Show empty state
  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      // The state will be updated automatically through the context
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleEdit = async (product: IProduct) => {
    try {
      await updateProduct(product);
      // The state will be updated automatically through the context
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          cover={
            <Image
              alt={product.title}
              src={product.image}
              style={{ height: 200, objectFit: "cover" }}
            />
          }
          actions={[
            // eslint-disable-next-line react/jsx-key
            <Button icon={<EditOutlined />} onClick={() => handleEdit(product)}>
              Edit
            </Button>,
            // eslint-disable-next-line react/jsx-key
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </Button>,
          ]}
        >
          <Card.Meta
            title={product.title}
            description={
              <>
                <p>${product.price?.toFixed(2)}</p>
                <p>{product.category}</p>
              </>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;

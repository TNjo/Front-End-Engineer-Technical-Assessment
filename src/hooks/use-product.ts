"use client"

import { useState, useEffect } from "react"
import type { Product, ApiResponse } from "@/types/product"

const API_BASE_URL = "https://fakestoreapi.com"

// API functions
const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/products`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

// Filter function to only get clothing items
const filterClothingProducts = (products: Product[]): Product[] => {
  return products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing")
}

// Filter products by specific category
const filterProductsByCategory = (products: Product[], category: string): Product[] => {
  return products.filter((product) => product.category === category)
}

export const useProductsByCategory = (category: string): ApiResponse<Product[]> => {
  const [data, setData] = useState<Product[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const allProducts = await fetchAllProducts()
        const categoryProducts = filterProductsByCategory(allProducts, category)
        setData(categoryProducts)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  return { data, error, loading }
}

export const useFlashSaleProducts = (): ApiResponse<Product[]> => {
  const [data, setData] = useState<Product[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFlashSaleProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const allProducts = await fetchAllProducts()
        const clothingProducts = filterClothingProducts(allProducts)

        // Get 4 men's and 4 women's items
        const mensProducts = clothingProducts.filter((p) => p.category === "men's clothing").slice(0, 4)
        const womensProducts = clothingProducts.filter((p) => p.category === "women's clothing").slice(0, 4)

        // Alternate between men's and women's products
        const flashSaleProducts: Product[] = []
        for (let i = 0; i < 4; i++) {
          if (mensProducts[i]) flashSaleProducts.push(mensProducts[i])
          if (womensProducts[i]) flashSaleProducts.push(womensProducts[i])
        }

        setData(flashSaleProducts)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    fetchFlashSaleProducts()
  }, [])

  return { data, error, loading }
}
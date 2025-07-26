"use client"

import { useProductsByCategory } from "@/hooks/use-product"
import Card from "@/components/card/card"
import LoadingState from "@/components/state-components/loading-state"
import ErrorState from "@/components/state-components/error-state"
import EmptyState from "@/components/state-components/empty-state"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CategoryPageProps {
  category: string
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const { data: products, loading, error } = useProductsByCategory(category)

  const displayCategory = category.replace("-", " ").replace("mens", "men's").replace("womens", "women's")
  const categoryTitle = displayCategory
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const PageHeader = () => (
    <div className="mb-8">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{categoryTitle}</h1>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <PageHeader />
          <LoadingState message="Loading category products..." showTitle={false} />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <PageHeader />
          <ErrorState message={`Failed to load products: ${error}`} showTitle={false} />
        </div>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <PageHeader />
          <EmptyState message="No products available in this category." showTitle={false} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <PageHeader />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

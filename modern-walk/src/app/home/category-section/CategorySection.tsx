"use client"

import CategoryButton from "@/components/button/category-button"

export default function CategorySection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">Categories</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <CategoryButton title="Men's Clothing" category="men's clothing" />
        <CategoryButton title="Women's Clothing" category="women's clothing" />
      </div>
    </section>
  )
}

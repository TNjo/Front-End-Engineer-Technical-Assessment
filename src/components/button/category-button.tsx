import Link from "next/link"
import type { CategoryButtonProps } from "@/types/category-button"
import { CSSProperties } from "react"

export default function CategoryButton({ title, category }: CategoryButtonProps) {
  // normalize for comparison + URL
  const key = category.trim().toLowerCase()
  const categoryUrl = key.replace(/'/g, "").replace(/\s+/g, "-")

  // Use CSS variables: men's clothing gets primary, women's clothing gets secondary
  const isMens = key === "men's clothing"
  const backgroundColor = isMens ? "var(--color-primary)" : "var(--color-secondary)"

  const style: CSSProperties = { backgroundColor }

  return (
    <Link href={`/${categoryUrl}`}>
      <article
        className="group cursor-pointer overflow-hidden rounded-3xl p-16 text-center transition-transform hover:scale-105 h-56 flex items-center justify-center"
        style={style}
      >
        <h2 className="text-4xl font-bold text-white">
          {title}
        </h2>
      </article>
    </Link>
  )
}
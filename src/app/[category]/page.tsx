import CategoryPage from "@/app/category-page/category-page"

interface CategoryRoutePageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryRoutePage({ params }: CategoryRoutePageProps) {
  const { category } = await params
  
  // Convert URL format back to the expected format for the CategoryPage component
  const categoryParam = category.replace("-", " ").replace("mens", "men's").replace("womens", "women's")
  
  return <CategoryPage category={categoryParam} />
} 
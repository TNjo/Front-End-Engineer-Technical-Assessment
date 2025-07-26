import FlashSaleSection from "@/app/home/flashsale-section/FlashSaleSection"
import CategorySection from "@/app/home/category-section/CategorySection"

export default function HomePage() {
  return (
    <main className="container mx-auto space-y-12 py-8 px-4 bg-gray-50 min-h-screen">
      <FlashSaleSection />
      <CategorySection />
    </main>
  )
}

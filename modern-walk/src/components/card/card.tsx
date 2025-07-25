import type { Product } from '@/types/product'

interface CardProps {
  product: Product
}

export default function Card({ product }: CardProps) {
  // Product Card Layout - using CSS variables directly
  const isWomensClothing = product.category === "women's clothing"
  const bottomBgColor = isWomensClothing ? "var(--color-secondary)" : "var(--color-primary)"

  return (
    <article
      className="relative bg-white overflow-hidden mx-auto hover:shadow-lg transition-shadow cursor-pointer"
      style={{
        width: "240px",
        height: "300px",
        borderRadius: "15px",
        boxShadow: "3px 5px 6px 0px rgba(0,0,0,0.15)",
      }}
    >
      {/* Main Title */}
      <div
        className="absolute flex items-center justify-center px-2"
        style={{
          width: "220px",
          height: "40px",
          top: "10px",
          left: "10px",
        }}
      >
        <h3
          className="text-center leading-tight"
          style={{
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "1.2",
            letterSpacing: "0",
            color: "#0E0E0E",
          }}
        >
          {product.title.length > 50 ? product.title.substring(0, 50) + "..." : product.title}
        </h3>
      </div>

      {/* Product Image */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: "180px",
          height: "120px",
          top: "55px",
          left: "30px",
        }}
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Inner colored rectangle with price and description */}
      <div
        className="absolute"
        style={{
          width: "240px",
          height: "110px",
          top: "190px",
          backgroundColor: bottomBgColor,
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        {/* Price Section */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: "200px",
            height: "25px",
            top: "15px",
            left: "20px",
          }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#0E42FD",
            }}
          >
            Rs {product.price.toFixed(2)}
          </p>
        </div>

        {/* Description Section */}
        <div
          className="absolute flex items-center justify-center px-2"
          style={{
            width: "200px",
            height: "60px",
            top: "45px",
            left: "20px",
          }}
        >
          <p
            className="text-center leading-tight"
            style={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "11px",
              lineHeight: "1.2",
              letterSpacing: "0",
              color: "#0E0E0E",
            }}
          >
            {product.description.length > 80 ? product.description.substring(0, 80) + "..." : product.description}
          </p>
        </div>
      </div>
    </article>
  )
}

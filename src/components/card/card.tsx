import { memo, useMemo } from 'react'
import Image from 'next/image'
import type { Product } from '@/types/product'

interface CardProps {
  product: Product
}

const Card = memo(({ product }: CardProps) => {
  // Memoize expensive text truncation calculations
  const truncatedTitle = useMemo(() => 
    product.title.length > 50 ? product.title.substring(0, 50) + "..." : product.title,
    [product.title]
  );

  const truncatedDescription = useMemo(() =>
    product.description.length > 80 ? product.description.substring(0, 80) + "..." : product.description,
    [product.description]
  );

  // Memoize style calculations
  const bottomBgColor = useMemo(() => 
    product.category === "women's clothing" ? "var(--color-secondary)" : "var(--color-primary)",
    [product.category]
  );

  const formattedPrice = useMemo(() => 
    `Rs ${product.price.toFixed(2)}`,
    [product.price]
  );

  const imageSource = useMemo(() => 
    product.image || "/placeholder.svg",
    [product.image]
  );

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
          {truncatedTitle}
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
        <Image
          src={imageSource}
          alt={product.title}
          width={180}
          height={120}
          className="max-w-full max-h-full object-contain"
          priority={false}
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
            {formattedPrice}
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
            {truncatedDescription}
          </p>
        </div>
      </div>
    </article>
  )
});

Card.displayName = 'Card';

export default Card;

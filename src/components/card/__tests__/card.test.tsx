import { render, screen } from '@testing-library/react'
import Card from '../card'
import type { Product } from '@/types/product'

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'This is a test product description',
  category: "men's clothing",
  image: 'https://example.com/test-image.jpg',
  rating: {
    rate: 4.5,
    count: 100
  }
}

const mockProductWithLongText: Product = {
  ...mockProduct,
  id: 2,
  title: 'This is a very long product title that should be truncated because it exceeds fifty characters',
  description: 'This is a very long product description that should be truncated because it exceeds eighty characters in length and should show ellipsis'
}

const mockWomensProduct: Product = {
  ...mockProduct,
  id: 3,
  category: "women's clothing"
}

describe('Card Component', () => {
  it('renders product information correctly', () => {
    render(<Card product={mockProduct} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Rs 29.99')).toBeInTheDocument()
    expect(screen.getByText('This is a test product description')).toBeInTheDocument()
    expect(screen.getByAltText('Test Product')).toBeInTheDocument()
  })

  it('truncates long title with ellipsis', () => {
    render(<Card product={mockProductWithLongText} />)
    
    const titleElement = screen.getByText(/This is a very long product title that should be t\.\.\./)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.textContent).toHaveLength(53) // 50 chars + "..."
  })

  it('truncates long description with ellipsis', () => {
    render(<Card product={mockProductWithLongText} />)
    
    const descriptionElement = screen.getByText(/This is a very long product description that should be truncated because it exce\.\.\./)
    expect(descriptionElement).toBeInTheDocument()
    expect(descriptionElement.textContent).toHaveLength(83) // 80 chars + "..."
  })

  it('formats price correctly', () => {
    render(<Card product={mockProduct} />)
    
    expect(screen.getByText('Rs 29.99')).toBeInTheDocument()
  })

  it('applies correct styling for men\'s clothing', () => {
    render(<Card product={mockProduct} />)
    
    const coloredSection = screen.getByText('Rs 29.99').closest('div')
    expect(coloredSection).toHaveStyle({ backgroundColor: 'var(--color-primary)' })
  })

  it('applies correct styling for women\'s clothing', () => {
    render(<Card product={mockWomensProduct} />)
    
    const coloredSection = screen.getByText('Rs 29.99').closest('div')
    expect(coloredSection).toHaveStyle({ backgroundColor: 'var(--color-secondary)' })
  })

  it('handles missing image gracefully', () => {
    const productWithoutImage = { ...mockProduct, image: '' }
    render(<Card product={productWithoutImage} />)
    
    const image = screen.getByAltText('Test Product')
    expect(image).toHaveAttribute('src', '/placeholder.svg')
  })

  it('has correct card dimensions and styling', () => {
    const { container } = render(<Card product={mockProduct} />)
    
    const cardElement = container.firstChild as HTMLElement
    expect(cardElement).toHaveStyle({
      width: '240px',
      height: '300px',
      borderRadius: '15px'
    })
  })

  it('displays image with correct alt text', () => {
    render(<Card product={mockProduct} />)
    
    const image = screen.getByAltText('Test Product')
    expect(image).toHaveAttribute('src', expect.stringContaining('https%3A%2F%2Fexample.com%2Ftest-image.jpg'))
  })
}) 
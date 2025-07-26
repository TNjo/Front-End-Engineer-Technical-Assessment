import { render, screen, waitFor } from '@testing-library/react'
import CategoryPage from '../category-page/category-page'
import type { Product } from '@/types/product'

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Men\'s T-Shirt',
    price: 29.99,
    description: 'A comfortable men\'s t-shirt',
    category: 'men\'s clothing',
    image: 'https://example.com/mens-tshirt.jpg',
    rating: { rate: 4.5, count: 100 }
  },
  {
    id: 2,
    title: 'Men\'s Jacket',
    price: 89.99,
    description: 'A warm men\'s jacket',
    category: 'men\'s clothing',
    image: 'https://example.com/mens-jacket.jpg',
    rating: { rate: 4.7, count: 150 }
  }
]

// Mock the useProductsByCategory hook
jest.mock('../../hooks/use-product', () => ({
  useProductsByCategory: jest.fn()
}))

// Mock the Card component
jest.mock('../../components/card/card', () => {
  return function MockCard({ product }: { product: Product }) {
    return <div data-testid={`card-${product.id}`}>{product.title}</div>
  }
})

const mockUseProductsByCategory = require('../../hooks/use-product').useProductsByCategory

describe('CategoryPage Component', () => {
  beforeEach(() => {
    mockUseProductsByCategory.mockReset()
  })

  it('displays loading state initially', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    render(<CategoryPage category="mens-clothing" />)
    
    expect(screen.getByText('Loading category products...')).toBeInTheDocument()
  })

  it('displays error state when there is an error', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: null,
      loading: false,
      error: 'Failed to fetch products'
    })

    render(<CategoryPage category="mens-clothing" />)
    
    expect(screen.getByText(/Failed to load products: Failed to fetch products/)).toBeInTheDocument()
  })

  it('displays empty state when no products are found', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: [],
      loading: false,
      error: null
    })

    render(<CategoryPage category="mens-clothing" />)
    
    expect(screen.getByText('No products available in this category.')).toBeInTheDocument()
  })

  it('displays products when data is loaded', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: mockProducts,
      loading: false,
      error: null
    })

    render(<CategoryPage category="mens-clothing" />)
    
    expect(screen.getByTestId('card-1')).toBeInTheDocument()
    expect(screen.getByTestId('card-2')).toBeInTheDocument()
    expect(screen.getByText('Men\'s T-Shirt')).toBeInTheDocument()
    expect(screen.getByText('Men\'s Jacket')).toBeInTheDocument()
  })

  it('converts category URL to display format correctly', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: mockProducts,
      loading: false,
      error: null
    })

    render(<CategoryPage category="mens-clothing" />)
    
    expect(screen.getByText('Men\'s Clothing')).toBeInTheDocument()
  })

  it('handles women\'s clothing category correctly', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: mockProducts,
      loading: false,
      error: null
    })

    render(<CategoryPage category="womens-clothing" />)
    
    expect(screen.getByText('Women\'s Clothing')).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: mockProducts,
      loading: false,
      error: null
    })

    render(<CategoryPage category="mens-clothing" />)
    
    const backLink = screen.getByText('Back to Home').closest('a')
    expect(backLink).toHaveAttribute('href', '/')
  })

  it('has correct layout classes', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: mockProducts,
      loading: false,
      error: null
    })

    const { container } = render(<CategoryPage category="mens-clothing" />)
    
    const mainContainer = container.querySelector('div')
    expect(mainContainer).toHaveClass('min-h-screen', 'bg-gray-50')
  })

  it('renders product grid with correct classes', () => {
    mockUseProductsByCategory.mockReturnValue({
      data: mockProducts,
      loading: false,
      error: null
    })

    const { container } = render(<CategoryPage category="mens-clothing" />)
    
    const productGrid = container.querySelector('.grid')
    expect(productGrid).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-6', 'justify-items-center')
  })
}) 
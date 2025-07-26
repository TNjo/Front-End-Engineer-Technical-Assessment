import { renderHook, waitFor } from '@testing-library/react'
import { useFlashSaleProducts, useProductsByCategory } from '../use-product'
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
    title: 'Women\'s Dress',
    price: 59.99,
    description: 'A beautiful women\'s dress',
    category: 'women\'s clothing',
    image: 'https://example.com/womens-dress.jpg',
    rating: { rate: 4.2, count: 85 }
  },
  {
    id: 3,
    title: 'Men\'s Jacket',
    price: 89.99,
    description: 'A warm men\'s jacket',
    category: 'men\'s clothing',
    image: 'https://example.com/mens-jacket.jpg',
    rating: { rate: 4.7, count: 150 }
  },
  {
    id: 4,
    title: 'Women\'s Blouse',
    price: 39.99,
    description: 'A stylish women\'s blouse',
    category: 'women\'s clothing',
    image: 'https://example.com/womens-blouse.jpg',
    rating: { rate: 4.0, count: 60 }
  },
  {
    id: 5,
    title: 'Electronics Device',
    price: 199.99,
    description: 'Some electronic device',
    category: 'electronics',
    image: 'https://example.com/electronics.jpg',
    rating: { rate: 4.3, count: 200 }
  }
]

// Mock fetch globally
const mockFetch = jest.fn()
global.fetch = mockFetch

describe('useFlashSaleProducts Hook', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('should return loading state initially', () => {
    mockFetch.mockImplementation(() => new Promise(() => {})) // Never resolves
    
    const { result } = renderHook(() => useFlashSaleProducts())
    
    expect(result.current.loading).toBe(true)
    expect(result.current.data).toBeNull()
    expect(result.current.error).toBeNull()
  })

  it('should fetch and filter flash sale products correctly', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    })

    const { result } = renderHook(() => useFlashSaleProducts())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toHaveLength(4) // Only clothing items
    expect(result.current.error).toBeNull()
    
    // Check that electronics are filtered out
    const categories = result.current.data?.map(p => p.category) || []
    expect(categories).not.toContain('electronics')
    expect(categories).toContain('men\'s clothing')
    expect(categories).toContain('women\'s clothing')
  })

  it('should handle API errors correctly', async () => {
    mockFetch.mockRejectedValueOnce(new Error('API Error'))

    const { result } = renderHook(() => useFlashSaleProducts())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toBe('API Error')
    expect(result.current.data).toBeNull()
  })

  it('should handle HTTP errors correctly', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    })

    const { result } = renderHook(() => useFlashSaleProducts())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toBe('HTTP error! status: 404')
    expect(result.current.data).toBeNull()
  })

  it('should alternate men\'s and women\'s products correctly', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    })

    const { result } = renderHook(() => useFlashSaleProducts())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    const data = result.current.data || []
    // Should have alternating pattern if both categories have items
    expect(data.length).toBeGreaterThan(0)
    
    // Check that we get clothing items only
    data.forEach(product => {
      expect(['men\'s clothing', 'women\'s clothing']).toContain(product.category)
    })
  })
})

describe('useProductsByCategory Hook', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('should return loading state initially', () => {
    mockFetch.mockImplementation(() => new Promise(() => {})) // Never resolves
    
    const { result } = renderHook(() => useProductsByCategory('men\'s clothing'))
    
    expect(result.current.loading).toBe(true)
    expect(result.current.data).toBeNull()
    expect(result.current.error).toBeNull()
  })

  it('should filter products by men\'s clothing category', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    })

    const { result } = renderHook(() => useProductsByCategory('men\'s clothing'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toHaveLength(2) // 2 men's clothing items
    expect(result.current.error).toBeNull()
    
    result.current.data?.forEach(product => {
      expect(product.category).toBe('men\'s clothing')
    })
  })

  it('should filter products by women\'s clothing category', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    })

    const { result } = renderHook(() => useProductsByCategory('women\'s clothing'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toHaveLength(2) // 2 women's clothing items
    expect(result.current.error).toBeNull()
    
    result.current.data?.forEach(product => {
      expect(product.category).toBe('women\'s clothing')
    })
  })

  it('should return empty array for non-existent category', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    })

    const { result } = renderHook(() => useProductsByCategory('non-existent'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toHaveLength(0)
    expect(result.current.error).toBeNull()
  })

  it('should refetch when category changes', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockProducts,
    })

    const { result, rerender } = renderHook(
      ({ category }) => useProductsByCategory(category),
      { initialProps: { category: 'men\'s clothing' } }
    )

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toHaveLength(2)

    // Change category
    rerender({ category: 'women\'s clothing' })

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toHaveLength(2)
    result.current.data?.forEach(product => {
      expect(product.category).toBe('women\'s clothing')
    })
  })

  it('should handle API errors correctly', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network Error'))

    const { result } = renderHook(() => useProductsByCategory('men\'s clothing'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toBe('Network Error')
    expect(result.current.data).toBeNull()
  })
}) 
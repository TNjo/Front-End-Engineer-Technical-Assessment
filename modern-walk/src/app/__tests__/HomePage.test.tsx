import { render, screen } from '@testing-library/react'
import HomePage from '../home/home-page/HomePage'

// Mock the child components since we're testing integration
jest.mock('../home/flashsale-section/FlashSaleSection', () => {
  return function MockFlashSaleSection() {
    return <div data-testid="flash-sale-section">Flash Sale Section</div>
  }
})

jest.mock('../home/category-section/CategorySection', () => {
  return function MockCategorySection() {
    return <div data-testid="category-section">Category Section</div>
  }
})

describe('HomePage Component', () => {
  it('renders both FlashSaleSection and CategorySection', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('flash-sale-section')).toBeInTheDocument()
    expect(screen.getByTestId('category-section')).toBeInTheDocument()
  })

  it('has correct layout structure', () => {
    const { container } = render(<HomePage />)
    
    const mainElement = container.querySelector('main')
    expect(mainElement).toBeInTheDocument()
    expect(mainElement).toHaveClass('container', 'mx-auto', 'space-y-12', 'py-8', 'px-4', 'bg-gray-50', 'min-h-screen')
  })

  it('renders sections in correct order', () => {
    render(<HomePage />)
    
    const flashSale = screen.getByTestId('flash-sale-section')
    const category = screen.getByTestId('category-section')
    
    expect(flashSale.compareDocumentPosition(category)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })
}) 
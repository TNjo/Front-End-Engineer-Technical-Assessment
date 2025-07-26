import { render, screen } from '@testing-library/react'
import CategoryButton from '../category-button'

describe('CategoryButton Component', () => {
  it('renders with correct title', () => {
    render(<CategoryButton title="Men's Clothing" category="men's clothing" />)
    
    expect(screen.getByText("Men's Clothing")).toBeInTheDocument()
  })

  it('generates correct URL for men\'s clothing', () => {
    render(<CategoryButton title="Men's Clothing" category="men's clothing" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/mens-clothing')
  })

  it('generates correct URL for women\'s clothing', () => {
    render(<CategoryButton title="Women's Clothing" category="women's clothing" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/womens-clothing')
  })

  it('applies primary color for men\'s clothing', () => {
    render(<CategoryButton title="Men's Clothing" category="men's clothing" />)
    
    const article = screen.getByRole('article')
    expect(article).toHaveStyle({ backgroundColor: 'var(--color-primary)' })
  })

  it('applies secondary color for women\'s clothing', () => {
    render(<CategoryButton title="Women's Clothing" category="women's clothing" />)
    
    const article = screen.getByRole('article')
    expect(article).toHaveStyle({ backgroundColor: 'var(--color-secondary)' })
  })

  it('handles categories with extra spaces correctly', () => {
    render(<CategoryButton title="Men's Clothing" category="  men's clothing  " />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/mens-clothing')
  })

  it('is accessible as a link', () => {
    render(<CategoryButton title="Men's Clothing" category="men's clothing" />)
    
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/mens-clothing')
  })

  it('has hover effects classes', () => {
    render(<CategoryButton title="Men's Clothing" category="men's clothing" />)
    
    const article = screen.getByRole('article')
    expect(article).toHaveClass('hover:scale-105', 'transition-transform')
  })

  it('removes apostrophes from URL correctly', () => {
    render(<CategoryButton title="Test Category" category="test's category with apostrophe" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/tests-category-with-apostrophe')
  })

  it('handles mixed case categories correctly', () => {
    render(<CategoryButton title="Mixed Case" category="Mixed CASE Category" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/mixed-case-category')
  })
}) 
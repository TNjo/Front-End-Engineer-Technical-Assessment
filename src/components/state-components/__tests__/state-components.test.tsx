import { render, screen } from '@testing-library/react'
import LoadingState from '../loading-state'
import ErrorState from '../error-state'
import EmptyState from '../empty-state'

describe('LoadingState Component', () => {
  it('renders default loading message', () => {
    render(<LoadingState />)
    
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })

  it('renders custom loading message', () => {
    render(<LoadingState message="Loading products..." />)
    
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })

  it('renders with title when provided', () => {
    render(<LoadingState title="Flash Sale" message="Loading flash sale products..." />)
    
    expect(screen.getByText('Flash Sale')).toBeInTheDocument()
    expect(screen.getByText('Loading flash sale products...')).toBeInTheDocument()
  })

  it('hides title when showTitle is false', () => {
    render(<LoadingState title="Flash Sale" message="Loading..." showTitle={false} />)
    
    expect(screen.queryByText('Flash Sale')).not.toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('shows title by default when title is provided', () => {
    render(<LoadingState title="Flash Sale" message="Loading..." />)
    
    expect(screen.getByText('Flash Sale')).toBeInTheDocument()
  })
})

describe('ErrorState Component', () => {
  it('renders default error message', () => {
    render(<ErrorState message="Something went wrong" />)
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('renders custom error message', () => {
    render(<ErrorState message="Failed to load products" />)
    
    expect(screen.getByText('Failed to load products')).toBeInTheDocument()
  })

  it('renders with title when provided', () => {
    render(<ErrorState title="Flash Sale" message="Failed to load flash sale products" />)
    
    expect(screen.getByText('Flash Sale')).toBeInTheDocument()
    expect(screen.getByText('Failed to load flash sale products')).toBeInTheDocument()
  })

  it('hides title when showTitle is false', () => {
    render(<ErrorState title="Flash Sale" message="Error occurred" showTitle={false} />)
    
    expect(screen.queryByText('Flash Sale')).not.toBeInTheDocument()
    expect(screen.getByText('Error occurred')).toBeInTheDocument()
  })

  it('shows title by default when title is provided', () => {
    render(<ErrorState title="Flash Sale" message="Error occurred" />)
    
    expect(screen.getByText('Flash Sale')).toBeInTheDocument()
  })
})

describe('EmptyState Component', () => {
  it('renders default empty message', () => {
    render(<EmptyState message="No items found" />)
    
    expect(screen.getByText('No items found')).toBeInTheDocument()
  })

  it('renders custom empty message', () => {
    render(<EmptyState message="No products available" />)
    
    expect(screen.getByText('No products available')).toBeInTheDocument()
  })

  it('renders with title when provided', () => {
    render(<EmptyState title="Flash Sale" message="No products available at the moment" />)
    
    expect(screen.getByText('Flash Sale')).toBeInTheDocument()
    expect(screen.getByText('No products available at the moment')).toBeInTheDocument()
  })

  it('hides title when showTitle is false', () => {
    render(<EmptyState title="Flash Sale" message="No items" showTitle={false} />)
    
    expect(screen.queryByText('Flash Sale')).not.toBeInTheDocument()
    expect(screen.getByText('No items')).toBeInTheDocument()
  })

  it('shows title by default when title is provided', () => {
    render(<EmptyState title="Flash Sale" message="No items" />)
    
    expect(screen.getByText('Flash Sale')).toBeInTheDocument()
  })
}) 
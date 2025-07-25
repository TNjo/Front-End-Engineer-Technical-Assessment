export interface LoadingStateProps {
  title?: string
  message?: string
  showTitle?: boolean
}

export interface ErrorStateProps {
  title?: string
  message: string
  showTitle?: boolean
}

export interface EmptyStateProps {
  title?: string
  message: string
  showTitle?: boolean
  icon?: React.ReactNode
}
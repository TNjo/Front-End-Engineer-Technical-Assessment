import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveAttribute(attr: string, value?: string): R
      toHaveClass(...classNames: string[]): R
      toHaveStyle(style: string | Record<string, any>): R
      toHaveTextContent(text: string | RegExp): R
      toBeVisible(): R
      toBeChecked(): R
      toBeDisabled(): R
      toBeEnabled(): R
      toBeRequired(): R
      toHaveValue(value: string | number): R
      toHaveDisplayValue(value: string | string[]): R
      toBeInvalid(): R
      toBeValid(): R
    }
  }
}

export {} 
# 🧪 Testing Guide for Modern Walk

## 📋 Overview

This project includes comprehensive unit and integration tests for all mandatory components using **Jest** and **React Testing Library**.

## 🛠️ Test Setup

### Dependencies Added
- `jest` - Test framework
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom matchers for DOM elements
- `@testing-library/user-event` - User interaction simulation
- `@types/jest` - TypeScript types for Jest

### Configuration Files
- `jest.config.js` - Jest configuration with Next.js integration
- `jest.setup.js` - Global test setup and mocks

## 🧪 Test Structure

### 📁 Test Files Created

#### **Component Tests**
```
src/components/
├── card/__tests__/card.test.tsx           # Product Card component
├── button/__tests__/category-button.test.tsx    # Category navigation
└── state-components/__tests__/state-components.test.tsx  # Loading/Error/Empty states
```

#### **Hook Tests**
```
src/hooks/__tests__/use-product.test.ts    # Custom hooks for data fetching
```

#### **Page Tests**
```
src/app/__tests__/
├── HomePage.test.tsx                      # Main homepage integration
└── CategoryPage.test.tsx                  # Category page with different states
```

## ✅ What's Tested (Mandatory Components)

### **1. Card Component** 
- ✅ Product information rendering
- ✅ Price formatting (`Rs 29.99`)
- ✅ Text truncation (title > 50 chars, description > 80 chars)
- ✅ Category-based styling (men's = primary, women's = secondary)
- ✅ Image handling with fallback
- ✅ Card dimensions and layout

### **2. CategoryButton Component**
- ✅ URL generation (`men's clothing` → `/mens-clothing`)
- ✅ Category-based color styling
- ✅ Navigation links
- ✅ Text handling (spaces, apostrophes)
- ✅ Accessibility features

### **3. Custom Hooks**
- ✅ `useFlashSaleProducts`: Data fetching, filtering, alternating logic
- ✅ `useProductsByCategory`: Category filtering, API error handling
- ✅ Loading/error states
- ✅ Category change re-fetching

### **4. State Components**
- ✅ `LoadingState`: Default and custom messages
- ✅ `ErrorState`: Error message display
- ✅ `EmptyState`: No data scenarios
- ✅ Title visibility controls

### **5. Page Components**
- ✅ `HomePage`: Layout structure, section rendering
- ✅ `CategoryPage`: All states (loading, error, empty, success)

## 🚀 Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

## 📊 Test Coverage Areas

### **Critical Business Logic**
- ✅ Product data filtering (clothing only)
- ✅ Category-based styling and routing
- ✅ API error handling
- ✅ Text truncation for UI consistency

### **User Experience**
- ✅ Loading states during data fetch
- ✅ Error states for API failures
- ✅ Empty states for no data
- ✅ Navigation between categories

### **Component Integration**
- ✅ HomePage renders all sections
- ✅ CategoryPage handles all data states
- ✅ Proper mocking of child components

## 🔧 Mock Strategy

### **API Mocking**
- Global `fetch` mock for API calls
- Configurable responses for different test scenarios
- Error simulation for edge cases

### **Component Mocking**
- Child components mocked in integration tests
- Next.js router and Link components mocked
- Custom hooks mocked for page-level tests

## 📈 Expected Test Results

When you run the tests, you should see:
- **25+ test cases** covering all mandatory components
- **High coverage** on critical business logic
- **Fast execution** with proper mocking
- **Clear error messages** for failed assertions

## 🛡️ Testing Best Practices Applied

1. **Arrange-Act-Assert** pattern
2. **Descriptive test names** explaining what's tested
3. **Mock isolation** preventing external dependencies
4. **Edge case coverage** (empty data, errors, long text)
5. **Accessibility testing** (ARIA roles, proper links)

## 🎯 Key Test Scenarios

### **Data Handling**
- API success/failure scenarios
- Empty response handling
- Category filtering accuracy
- Product data validation

### **UI Behavior**
- Text truncation with ellipsis
- Dynamic styling based on category
- Responsive grid layouts
- Navigation link generation

### **State Management**
- Loading → Success transitions
- Error state display
- Empty state fallbacks
- Hook re-execution on prop changes

## 🔍 Debugging Tests

If tests fail, check:
1. **API mock setup** in individual test files
2. **Component import paths** (especially relative paths)
3. **Mock function calls** match actual component usage
4. **Async operations** use proper `waitFor` assertions

This comprehensive test suite ensures all mandatory components work correctly and provides confidence for future development and refactoring. 
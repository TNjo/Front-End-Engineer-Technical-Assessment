# Modern Walk - Fashion Retail Web App

🚀 **Live Demo**: [https://front-end-engineer-technical-assess.vercel.app/](https://front-end-engineer-technical-assess.vercel.app/)

## 📖 Overview

Modern Walk is a fashion retail web application prototype built as part of WireApps' front-end engineer technical assessment. This project demonstrates the implementation of a modern e-commerce interface following a provided Figma design, showcasing best practices in React development, responsive design, and user experience.

## 🎯 Assessment Context

This project was developed as part of the interview screening process for front-end software engineers at WireApps. The task involved:

- **Scenario**: Creating a quick prototype for a long-term client's fashion retail app
- **Objective**: Build a prototype that closely follows the provided Figma design
- **Requirements**: Implement reusable components for future development phases
- **Resources**: Modern Walk Figma design and Fake Store API for placeholder data

## 🛠️ Technologies

- **Framework**: [Next.js 15.4.3](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4.1.11](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/)
- **API**: [Fake Store API](https://fakestoreapi.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📸 Screenshots

### 🏠 Home Page
<img width="1650" height="1182" alt="image" src="https://github.com/user-attachments/assets/050fe0ea-b547-4315-a96d-4778301c9db2" />
*Main landing page showcasing category navigation and flash sale section*

### 📱 Category Page
<img width="2108" height="1312" alt="image" src="https://github.com/user-attachments/assets/8c6c439e-4929-475f-bc3e-98065b2b9515" />
<img width="1996" height="1312" alt="image" src="https://github.com/user-attachments/assets/5dec3791-bede-4b6f-a5c2-d1c1c75f6fca" />
*Category listing page with filtered product listings and navigation*

### 🛍️ Product Grid
<img width="1642" height="750" alt="image" src="https://github.com/user-attachments/assets/34be0943-8f51-4be1-ae32-14116c83f8e3" />
<img width="618" height="1008" alt="image" src="https://github.com/user-attachments/assets/6a1ac7da-356a-4553-88fa-dd5a0eb15d95" />
<img width="952" height="1305" alt="image" src="https://github.com/user-attachments/assets/f630670c-862b-4aa0-8844-f275492a89e4" />
*Responsive product card layout adapting to different screen sizes*

## ✨ Features

### 🏠 Home Page
- **Category Navigation**: Interactive category buttons for easy browsing
- **Flash Sale Section**: Highlighted promotional products
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Modern Design**: Clean, minimalist interface following Figma specifications

### 📱 Category Pages
- **Dynamic Routing**: SEO-friendly URLs for each category
- **Category-specific Products**: Filtered product listings
- **Loading States**: Smooth loading experience
- **Error Handling**: User-friendly error messages
- **Empty States**: Informative messages when no products are available

### 🛍️ Product Display
- **Product Cards**: Consistent card design across the application
- **Product Information**: Title, price, rating, and images
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Hover effects and smooth transitions

### 🔧 Technical Features
- **Custom Hooks**: Reusable data fetching with `useProductsByCategory`
- **State Management**: Efficient loading, error, and data states
- **Component Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript implementation
- **Testing Coverage**: Comprehensive unit and integration tests

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone [<repository-url>](https://github.com/TNjo/Front-End-Engineer-Technical-Assessment.git)
   cd Front-End-Engineer-Technical-Assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [category]/              # Dynamic category pages
│   ├── category-page/           # Category page component
│   ├── home/                    # Home page components
│   │   ├── category-section/    # Category navigation
│   │   └── flashsale-section/   # Flash sale display
│   └── layout.tsx               # Root layout
├── components/                   # Reusable UI components
│   ├── button/                  # Category buttons
│   ├── card/                    # Product cards
│   ├── layout/                  # Header and Footer
│   └── state-components/        # Loading, Error, Empty states
├── hooks/                       # Custom React hooks
│   └── use-product.ts          # Product data fetching
└── types/                       # TypeScript type definitions
```

## 🌐 API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) for product data:

- **Base URL**: `https://fakestoreapi.com`
- **Products Endpoint**: `/products`
- **Categories Endpoint**: `/products/categories`
- **Category Products**: `/products/category/{categoryName}`

### Supported Categories
- Men's Clothing
- Women's Clothing

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Test Coverage Includes:**
- Component rendering and interaction
- Custom hooks functionality
- API integration
- Error handling
- Responsive behavior

## 🎨 Design Implementation

The application implements the provided Figma design with:

- **Color Scheme**: Extracted from Figma specifications
- **Typography**: Responsive font sizes and weights
- **Layout**: Grid systems and spacing following design guidelines
- **Shadows & Effects**: CSS implementations matching Figma styles
- **Responsive Breakpoints**: Mobile-first approach with tailored experiences

## 📱 Responsive Design

- **Mobile**: 320px - 768px (Single column layout)
- **Tablet**: 768px - 1024px (2-3 column grid)
- **Desktop**: 1024px+ (4+ column grid)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings** (auto-detected for Next.js)
3. **Deploy** - Vercel handles the rest!

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🔄 Future Enhancements

Based on the assessment requirements, potential next-phase features include:

- **Shopping Cart**: Add to cart functionality
- **User Authentication**: Login/signup system
- **Product Details**: Individual product pages
- **Search Functionality**: Product search and filtering
- **Wishlist**: Save favorite products
- **Payment Integration**: Checkout process

## 🤝 Development Guidelines

- **Code Style**: ESLint configuration with Next.js recommended rules
- **Commit Messages**: Follow conventional commit format
- **Component Structure**: Prefer composition over inheritance
- **Testing**: Write tests for new features and components
- **TypeScript**: Maintain strict type safety

## 📄 License

This project is part of WireApps technical assessment and is intended for evaluation purposes.

## 🙋‍♂️ Support

For questions regarding this assessment or technical implementation, please reach out to the WireApps engineering team.

---

**Built with ❤️ for WireApps Technical Assessment**

# Dynamic Experience Portfolio Dashboard

A modern, responsive React application for showcasing professional hospitality experience data with advanced filtering and interactive project details.

## Overview

This application dynamically renders professional experience data from the hospitality industry, allowing users to explore career progression, project implementations, and operational achievements across different property types and locations.

## Technical Approach

### Architecture Decisions

**Component-Based Design**
- Modular components for maintainability and reusability
- Clear separation of concerns between data, logic, and presentation
- Each component handles a specific aspect of the user interface


### Filtering System

**Multi-Criteria Filtering**
- Property type (business, heritage, resort)
- Year-based filtering
- Flagship property toggle
- Full-text search across multiple fields

### FilterPanel
- Centralized filtering interface
- Search functionality across multiple data fields
- Visual feedback for active filters

### Custom Hooks
- `useExperienceFilters`: Manages filter state and applies filtering logic
- Memoized filtering for performance optimization


**Optimized Rendering**
- Memoized filtering to prevent unnecessary re-calculations
- Efficient component updates using React's reconciliation
- Lazy loading of detailed project information

**Data Handling**
- Graceful handling of missing or null data fields
- Fallback displays for empty states
- Efficient array operations for filtering and searching


### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Data Format

The application expects data in the following structure:

```typescript
interface Experience {
  id: string;
  property: string;
  propertyType: 'business' | 'heritage' | 'resort';
  isFlagship: boolean;
  role: string;
  location: string;
  duration: string;
  projects: Project[];
}
```


## License

This project is licensed under the MIT License.

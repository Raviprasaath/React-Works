/*

src/
├── assets/            # Images, icons, global fonts
├── components/        # Global reusable UI (Button, Input, Modal)
├── config/            # Env variables, Firebase/API config
├── features/          # Core e-commerce domains
│   ├── auth/          # Login, Register, useAuth hook
│   ├── cart/          # Cart drawer, cart logic, total calculators
│   ├── checkout/      # Payment forms, shipping logic
│   └── products/      # Product cards, list, search, filters
├── hooks/             # Global custom hooks (e.g., useLocalStorage)
├── layouts/           # Page wrappers (Navbar, Footer, Sidebar)
├── pages/             # Route-level components (Home, ProductDetails)
├── services/          # API client (Axios instances, API calls)
├── store/             # Global state (Redux slices, Zustand, or Context)
├── types/             # TypeScript interfaces (Product, User, Order)
└── utils/             # Helper functions (currency formatting, date parsing)

*/
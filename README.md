# Reelax — Figma to React Assignment

A pixel-perfect, responsive React implementation of the Reelax influencer marketing platform checkout page, built from a high-fidelity Figma design.

## 📸 Design Reference

Implements the **Checkout / Review Your Details** screen, including:
- Top navigation bar with search, upgrade button, create campaign, avatar
- Billing information form with full validation-ready inputs
- Order summary sidebar with wallet, coupon, and payment breakdown

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build engine & dev server |
| [React 18](https://react.dev/) | UI component framework |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling with custom design tokens |
| [Lucide React](https://lucide.dev/) | Icon set matching Figma vectors |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Primary font (from Google Fonts) |

## 📁 Project Structure

```
src/
├── assets/                  # SVG logos and static assets
├── components/
│   ├── common/              # Reusable UI atoms
│   │   ├── Button.jsx       # Primary / ghost / outline variants
│   │   ├── Badge.jsx        # Status badges
│   │   ├── FormInput.jsx    # Labeled text input
│   │   ├── FormSelect.jsx   # Dropdown select with chevron
│   │   └── SearchBar.jsx    # Search with icon
│   ├── layout/              # Page shell components
│   │   ├── Navbar.jsx       # Top navigation bar
│   │   └── LayoutWrapper.jsx
│   └── dashboard/           # Feature-specific components
│       ├── BillingForm.jsx  # Billing info form (10 fields, 5 rows)
│       ├── OrderSummary.jsx # Pricing sidebar with coupon & wallet
│       └── CheckoutPage.jsx # Two-column checkout layout
├── hooks/
│   └── useWindowSize.js     # Responsive utility hook
├── utils/
│   └── formatters.js        # INR currency formatter
├── App.jsx                  # Root component
├── index.css                # Global styles + Tailwind directives
└── main.jsx                 # React DOM entry point
```

## ⚙️ Setup & Run

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd figma-assignment

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## 🎨 Design Token Mapping (Tailwind)

| Token | Figma Value | Tailwind Key |
|---|---|---|
| Primary Blue | `#2563EB` | `blue-600` |
| Background | `#F0F2F5` | `gray-100` |
| Navbar Dark | `#111827` | `gray-900` |
| Card White | `#FFFFFF` | `white` |
| Border | `#E2E8F0` | `gray-200` |
| Text Primary | `#111827` | `gray-900` |
| Text Secondary | `#6B7280` | `gray-500` |

## 📱 Responsive Breakpoints

| Viewport | Behaviour |
|---|---|
| Mobile (< 640px) | Single-column, stacked forms |
| Tablet (640px–1024px) | Two-column form grid, stacked summary |
| Desktop (> 1024px) | Full two-column checkout layout |

## ✅ Features Implemented

- [x] Pixel-perfect Navbar with search, upgrade, create campaign, avatar & menu
- [x] Billing form with 10 fields across 5 rows (2-col grid)
- [x] Cascading State → City dropdown (Indian states & cities)
- [x] Order Summary sidebar with plan display
- [x] Wallet balance apply/remove toggle
- [x] Collapsible coupon section with radio-style selection
- [x] Live price calculation (subtotal, discount, GST, total)
- [x] Proceed to Payment CTA
- [x] Fully responsive layout (mobile / tablet / desktop)
- [x] Interactive hover, focus, and active states throughout
- [x] Component-based architecture (atomic design)

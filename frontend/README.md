# FL-Crypto Frontend

Professional landing page and web application for FL-Crypto - Secure Federated Learning Platform.

## Tech Stack

- **Framework**: Next.js 14
- **UI**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local`:
```bash
cp .env.example .env.local
```

3. Configure environment variables

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Building

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── api.ts
│   └── hooks.ts
├── package.json
└── tsconfig.json
```

## Features

- Responsive design
- Real-time API status indicator
- Contact form with backend integration
- TypeScript support
- Tailwind CSS styling
- Smooth animations

## API Integration

The frontend automatically connects to the backend API configured in `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Deployment

### Vercel

```bash
vercel deploy
```

## License

Part of FL-Crypto project

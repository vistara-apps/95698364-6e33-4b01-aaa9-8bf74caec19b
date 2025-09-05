# DeFi Vault - Base Mini App

A unified DeFi command center built as a Base Mini App that allows users to track assets across multiple wallets and protocols, manage liquidity, and optimize yields directly within their Base Wallet.

## Features

### Core Features
- **Cross-Protocol Wallet Dashboard**: Aggregates token balances and performance from multiple connected wallets and DeFi protocols on Base
- **Real-time Value Tracker**: Displays current total value with real-time price updates for all tokens
- **Simplified Yield Aggregation**: Connects users to curated, high-performing yield farming and lending opportunities
- **One-Click Liquidity Rebalancing**: Seamlessly rebalance liquidity across different strategies with single transactions

### Technical Features
- Built with Next.js 15 and App Router
- OnchainKit integration for Base wallet connectivity
- TypeScript for type safety
- Tailwind CSS with custom design system
- Mobile-first responsive design
- Real-time portfolio tracking
- Dark theme with gradient backgrounds

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Base Wallet or compatible Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd defi-vault
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key to `.env.local`:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

### Data Model
- **User**: Manages connected wallets and notification preferences
- **Portfolio**: Aggregates protocol and token data for a user
- **ProtocolAggregation**: Tracks balances and yields across DeFi protocols
- **TokenHolding**: Individual token balances and performance metrics

### Components
- **AppShell**: Main layout with navigation and header
- **WalletConnectButton**: OnchainKit wallet connection component
- **PortfolioSummary**: Total portfolio value and breakdown
- **AssetCard**: Individual token holding display
- **ProtocolCard**: DeFi protocol integration display
- **YieldStrategyCard**: Available yield opportunities
- **ActionButton**: Reusable button component with variants

### Design System
- **Colors**: Blue and purple gradient theme with glass morphism
- **Typography**: Inter font with semantic text sizes
- **Spacing**: Consistent 8px grid system
- **Components**: Modular design with variant support

## API Integration

The app integrates with several APIs:
- **Base RPC**: For wallet balances and transaction data
- **CoinGecko**: For real-time token prices
- **Protocol APIs**: For yield data from Aave, Uniswap, Compound, etc.

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
The app is optimized for Vercel deployment:
```bash
vercel deploy
```

## Business Model

- **Free Tier**: Basic balance tracking and portfolio overview
- **Premium Features**: 
  - One-click rebalancing ($0.50 per transaction)
  - Advanced yield optimization
  - Custom alerts and notifications
  - Monthly subscription option ($5/month)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the Base documentation for wallet integration issues

## Roadmap

- [ ] Multi-chain support beyond Base
- [ ] Advanced portfolio analytics
- [ ] Automated rebalancing strategies
- [ ] Social features and portfolio sharing
- [ ] Mobile app version
- [ ] Integration with more DeFi protocols

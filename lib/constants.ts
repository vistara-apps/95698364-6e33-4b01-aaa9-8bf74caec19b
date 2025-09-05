import { TokenHolding, ProtocolAggregation, YieldStrategy } from './types';

export const MOCK_TOKEN_HOLDINGS: TokenHolding[] = [
  {
    tokenSymbol: 'ETH',
    tokenName: 'Ethereum',
    quantity: 2.5,
    currentPrice: 2340.50,
    totalValue: 5851.25,
    priceChange24h: 3.2,
  },
  {
    tokenSymbol: 'USDC',
    tokenName: 'USD Coin',
    quantity: 15420.30,
    currentPrice: 1.00,
    totalValue: 15420.30,
    priceChange24h: 0.1,
  },
  {
    tokenSymbol: 'WBTC',
    tokenName: 'Wrapped Bitcoin',
    quantity: 0.15,
    currentPrice: 43250.80,
    totalValue: 6487.62,
    priceChange24h: -1.8,
  },
  {
    tokenSymbol: 'UNI',
    tokenName: 'Uniswap',
    quantity: 850.0,
    currentPrice: 8.45,
    totalValue: 7182.50,
    priceChange24h: 5.7,
  },
];

export const MOCK_PROTOCOL_AGGREGATIONS: ProtocolAggregation[] = [
  {
    protocolName: 'Aave',
    walletAddress: '0x742d35Cc6634C0532925a3b8D',
    protocolBalance: 12450.80,
    yieldAPY: 4.2,
    totalValueLocked: 1250000,
    riskLevel: 'low',
  },
  {
    protocolName: 'Uniswap V3',
    walletAddress: '0x742d35Cc6634C0532925a3b8D',
    protocolBalance: 8920.15,
    yieldAPY: 12.8,
    totalValueLocked: 890000,
    riskLevel: 'medium',
  },
  {
    protocolName: 'Compound',
    walletAddress: '0x742d35Cc6634C0532925a3b8D',
    protocolBalance: 5670.25,
    yieldAPY: 3.8,
    totalValueLocked: 450000,
    riskLevel: 'low',
  },
  {
    protocolName: 'Curve',
    walletAddress: '0x742d35Cc6634C0532925a3b8D',
    protocolBalance: 7890.40,
    yieldAPY: 8.5,
    totalValueLocked: 680000,
    riskLevel: 'medium',
  },
];

export const MOCK_YIELD_STRATEGIES: YieldStrategy[] = [
  {
    id: '1',
    name: 'USDC-ETH LP',
    protocol: 'Uniswap V3',
    apy: 15.2,
    tvl: 2500000,
    riskLevel: 'medium',
    description: 'Provide liquidity to USDC-ETH pair on Uniswap V3',
    minDeposit: 100,
    tokenPair: 'USDC/ETH',
  },
  {
    id: '2',
    name: 'USDC Lending',
    protocol: 'Aave',
    apy: 4.8,
    tvl: 15000000,
    riskLevel: 'low',
    description: 'Lend USDC on Aave for stable returns',
    minDeposit: 50,
  },
  {
    id: '3',
    name: 'ETH Staking',
    protocol: 'Lido',
    apy: 5.2,
    tvl: 8500000,
    riskLevel: 'low',
    description: 'Stake ETH through Lido for consistent rewards',
    minDeposit: 0.1,
  },
  {
    id: '4',
    name: 'Curve 3Pool',
    protocol: 'Curve',
    apy: 7.8,
    tvl: 1200000,
    riskLevel: 'low',
    description: 'Provide liquidity to Curve 3Pool (USDC/USDT/DAI)',
    minDeposit: 100,
    tokenPair: 'USDC/USDT/DAI',
  },
];

export const CHART_COLORS = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#06B6D4',
};

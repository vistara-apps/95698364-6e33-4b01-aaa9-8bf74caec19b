export interface User {
  userId: string;
  connectedWallets: string[];
  notificationPreferences: {
    priceAlerts: boolean;
    yieldUpdates: boolean;
    rebalanceReminders: boolean;
  };
}

export interface TokenHolding {
  tokenSymbol: string;
  tokenName: string;
  quantity: number;
  currentPrice: number;
  totalValue: number;
  priceChange24h: number;
  logo?: string;
}

export interface ProtocolAggregation {
  protocolName: string;
  protocolLogo?: string;
  walletAddress: string;
  protocolBalance: number;
  yieldAPY: number;
  totalValueLocked: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface Portfolio {
  portfolioId: string;
  userId: string;
  totalValue: number;
  totalChange24h: number;
  protocolAggregations: ProtocolAggregation[];
  tokenHoldings: TokenHolding[];
  lastUpdated: Date;
}

export interface YieldStrategy {
  id: string;
  name: string;
  protocol: string;
  apy: number;
  tvl: number;
  riskLevel: 'low' | 'medium' | 'high';
  description: string;
  minDeposit: number;
  tokenPair?: string;
}

export interface RebalanceOption {
  id: string;
  fromProtocol: string;
  toProtocol: string;
  expectedGain: number;
  gasEstimate: number;
  timeEstimate: string;
}

'use client';

import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { WalletConnectButton } from '@/components/WalletConnectButton';
import { PortfolioSummary } from '@/components/PortfolioSummary';
import { AssetCard } from '@/components/AssetCard';
import { ProtocolCard } from '@/components/ProtocolCard';
import { YieldStrategyCard } from '@/components/YieldStrategyCard';
import { ActionButton } from '@/components/ActionButton';
import { Portfolio, YieldStrategy } from '@/lib/types';
import { MOCK_TOKEN_HOLDINGS, MOCK_PROTOCOL_AGGREGATIONS, MOCK_YIELD_STRATEGIES } from '@/lib/constants';
import { RefreshCw, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const { isConnected } = useAccount();
  const { setFrameReady } = useMiniKit();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<YieldStrategy | null>(null);
  
  // Mock portfolio data
  const [portfolio] = useState<Portfolio>({
    portfolioId: '1',
    userId: 'user1',
    totalValue: 34941.67,
    totalChange24h: 2.8,
    protocolAggregations: MOCK_PROTOCOL_AGGREGATIONS,
    tokenHoldings: MOCK_TOKEN_HOLDINGS,
    lastUpdated: new Date(),
  });

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleRebalance = () => {
    // Implement rebalancing logic
    console.log('Rebalancing portfolio...');
  };

  const handleStrategySelect = (strategy: YieldStrategy) => {
    setSelectedStrategy(strategy);
    // Implement strategy selection logic
    console.log('Selected strategy:', strategy);
  };

  if (!isConnected) {
    return (
      <AppShell>
        <div className="space-y-6">
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to DeFi Vault
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">
              Your unified DeFi command center. Track assets, manage liquidity, and optimize yields across multiple protocols.
            </p>
            <WalletConnectButton />
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-6 pb-24">
        {/* Portfolio Summary */}
        <PortfolioSummary portfolio={portfolio} />
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <ActionButton
            variant="primary"
            onClick={handleRefresh}
            loading={isLoading}
            fullWidth
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </ActionButton>
          <ActionButton
            variant="secondary"
            onClick={handleRebalance}
            fullWidth
          >
            <Zap className="w-4 h-4" />
            Rebalance
          </ActionButton>
        </div>

        {/* Token Holdings */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Token Holdings</h3>
            <span className="text-sm text-gray-400">
              {portfolio.tokenHoldings.length} assets
            </span>
          </div>
          <div className="space-y-3">
            {portfolio.tokenHoldings.map((token, index) => (
              <AssetCard key={index} asset={token} />
            ))}
          </div>
        </section>

        {/* DeFi Protocols */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">DeFi Protocols</h3>
            <span className="text-sm text-gray-400">
              {portfolio.protocolAggregations.length} protocols
            </span>
          </div>
          <div className="space-y-4">
            {portfolio.protocolAggregations.map((protocol, index) => (
              <ProtocolCard key={index} protocol={protocol} />
            ))}
          </div>
        </section>

        {/* Yield Strategies */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Yield Opportunities</h3>
            <span className="text-sm text-gray-400">
              {MOCK_YIELD_STRATEGIES.length} strategies
            </span>
          </div>
          <div className="space-y-4">
            {MOCK_YIELD_STRATEGIES.map((strategy) => (
              <YieldStrategyCard 
                key={strategy.id} 
                strategy={strategy}
                onSelect={handleStrategySelect}
              />
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section>
          <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="metric-card text-center">
              <p className="text-gray-400 text-sm mb-2">Best Performer</p>
              <p className="text-green-400 font-bold text-lg">UNI</p>
              <p className="text-green-400 text-sm">+5.7%</p>
            </div>
            <div className="metric-card text-center">
              <p className="text-gray-400 text-sm mb-2">Avg. APY</p>
              <p className="text-blue-400 font-bold text-lg">7.3%</p>
              <p className="text-gray-400 text-sm">Across protocols</p>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

'use client';

import { Portfolio } from '@/lib/types';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { TrendingUp, TrendingDown, Wallet, DollarSign } from 'lucide-react';

interface PortfolioSummaryProps {
  portfolio: Portfolio;
}

export function PortfolioSummary({ portfolio }: PortfolioSummaryProps) {
  const isPositive = portfolio.totalChange24h >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  
  const totalProtocolValue = portfolio.protocolAggregations.reduce(
    (sum, protocol) => sum + protocol.protocolBalance, 
    0
  );
  
  const totalTokenValue = portfolio.tokenHoldings.reduce(
    (sum, token) => sum + token.totalValue, 
    0
  );

  return (
    <div className="space-y-4">
      {/* Total Portfolio Value */}
      <div className="glass-card p-6">
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm mb-2">Total Portfolio Value</p>
          <h2 className="text-4xl font-bold text-white mb-2">
            {formatCurrency(portfolio.totalValue)}
          </h2>
          <div className={`flex items-center justify-center space-x-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            <TrendIcon className="w-5 h-5" />
            <span className="text-lg font-semibold">
              {formatPercentage(portfolio.totalChange24h)}
            </span>
            <span className="text-gray-400">24h</span>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Wallet className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400 text-sm">Protocols</span>
            </div>
            <p className="text-white font-bold text-xl">
              {portfolio.protocolAggregations.length}
            </p>
            <p className="text-gray-400 text-sm">
              {formatCurrency(totalProtocolValue)}
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400 text-sm">Assets</span>
            </div>
            <p className="text-white font-bold text-xl">
              {portfolio.tokenHoldings.length}
            </p>
            <p className="text-gray-400 text-sm">
              {formatCurrency(totalTokenValue)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Portfolio Breakdown */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <h4 className="text-white font-semibold mb-2">DeFi Protocols</h4>
          <p className="text-2xl font-bold text-blue-400">
            {formatCurrency(totalProtocolValue)}
          </p>
          <p className="text-gray-400 text-sm">
            {((totalProtocolValue / portfolio.totalValue) * 100).toFixed(1)}% of portfolio
          </p>
        </div>
        
        <div className="metric-card">
          <h4 className="text-white font-semibold mb-2">Token Holdings</h4>
          <p className="text-2xl font-bold text-purple-400">
            {formatCurrency(totalTokenValue)}
          </p>
          <p className="text-gray-400 text-sm">
            {((totalTokenValue / portfolio.totalValue) * 100).toFixed(1)}% of portfolio
          </p>
        </div>
      </div>
    </div>
  );
}

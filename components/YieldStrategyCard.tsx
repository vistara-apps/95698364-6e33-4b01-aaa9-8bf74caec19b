'use client';

import { YieldStrategy } from '@/lib/types';
import { formatCurrency, formatNumber, getRiskBadgeColor } from '@/lib/utils';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

interface YieldStrategyCardProps {
  strategy: YieldStrategy;
  onSelect?: (strategy: YieldStrategy) => void;
}

export function YieldStrategyCard({ strategy, onSelect }: YieldStrategyCardProps) {
  return (
    <div 
      className="yield-card cursor-pointer"
      onClick={() => onSelect?.(strategy)}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-white font-semibold">{strategy.name}</h4>
          <p className="text-gray-400 text-sm">{strategy.protocol}</p>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskBadgeColor(strategy.riskLevel)}`}>
          {strategy.riskLevel.toUpperCase()}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-gray-400 text-sm">APY</span>
          </div>
          <p className="text-green-400 font-bold text-lg">
            {strategy.apy.toFixed(1)}%
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400 text-sm">TVL</span>
          </div>
          <p className="text-white font-semibold">
            {formatCurrency(strategy.tvl)}
          </p>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">
        {strategy.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-gray-400 text-sm">Min: </span>
          <span className="text-white font-medium">
            {strategy.minDeposit < 1 
              ? `${strategy.minDeposit} ETH` 
              : formatCurrency(strategy.minDeposit)
            }
          </span>
        </div>
        <div className="flex items-center space-x-2 text-blue-400">
          <span className="text-sm font-medium">Invest</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

'use client';

import { TokenHolding } from '@/lib/types';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AssetCardProps {
  asset: TokenHolding;
  variant?: 'default' | 'detailed';
}

export function AssetCard({ asset, variant = 'default' }: AssetCardProps) {
  const isPositive = asset.priceChange24h >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  if (variant === 'detailed') {
    return (
      <div className="metric-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {asset.tokenSymbol.slice(0, 2)}
              </span>
            </div>
            <div>
              <h3 className="text-white font-semibold">{asset.tokenSymbol}</h3>
              <p className="text-gray-400 text-sm">{asset.tokenName}</p>
            </div>
          </div>
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            <TrendIcon className="w-4 h-4" />
            <span className="text-sm font-medium">
              {formatPercentage(asset.priceChange24h)}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-sm">Balance</p>
            <p className="text-white font-semibold">
              {asset.quantity.toFixed(4)} {asset.tokenSymbol}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Value</p>
            <p className="text-white font-semibold">
              {formatCurrency(asset.totalValue)}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Price</p>
            <p className="text-white font-semibold">
              {formatCurrency(asset.currentPrice)}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">24h Change</p>
            <p className={`font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {formatPercentage(asset.priceChange24h)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">
              {asset.tokenSymbol.slice(0, 2)}
            </span>
          </div>
          <div>
            <h4 className="text-white font-medium">{asset.tokenSymbol}</h4>
            <p className="text-gray-400 text-sm">
              {asset.quantity.toFixed(2)} tokens
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-white font-semibold">
            {formatCurrency(asset.totalValue)}
          </p>
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            <TrendIcon className="w-3 h-3" />
            <span className="text-sm">
              {formatPercentage(asset.priceChange24h)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

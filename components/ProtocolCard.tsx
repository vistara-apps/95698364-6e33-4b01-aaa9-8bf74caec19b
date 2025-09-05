'use client';

import { ProtocolAggregation } from '@/lib/types';
import { formatCurrency, formatNumber, getRiskColor, truncateAddress } from '@/lib/utils';
import { ExternalLink, TrendingUp, Shield } from 'lucide-react';

interface ProtocolCardProps {
  protocol: ProtocolAggregation;
  onClick?: () => void;
}

export function ProtocolCard({ protocol, onClick }: ProtocolCardProps) {
  return (
    <div className="protocol-card" onClick={onClick}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {protocol.protocolName.slice(0, 2)}
            </span>
          </div>
          <div>
            <h3 className="text-white font-semibold">{protocol.protocolName}</h3>
            <p className="text-gray-400 text-sm">
              {truncateAddress(protocol.walletAddress)}
            </p>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">Balance</p>
          <p className="text-white font-bold text-lg">
            {formatCurrency(protocol.protocolBalance)}
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-gray-400 text-sm">APY</span>
          </div>
          <p className="text-green-400 font-bold text-lg">
            {protocol.yieldAPY.toFixed(1)}%
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className={`w-4 h-4 ${getRiskColor(protocol.riskLevel)}`} />
          <span className={`text-sm font-medium ${getRiskColor(protocol.riskLevel)}`}>
            {protocol.riskLevel.toUpperCase()} RISK
          </span>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">TVL</p>
          <p className="text-white font-medium">
            {formatNumber(protocol.totalValueLocked)}
          </p>
        </div>
      </div>
    </div>
  );
}

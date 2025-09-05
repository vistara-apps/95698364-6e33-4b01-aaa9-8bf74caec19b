'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';
import { Wallet as WalletIcon, CheckCircle, Loader2 } from 'lucide-react';

interface WalletConnectButtonProps {
  variant?: 'default' | 'connecting' | 'connected';
}

export function WalletConnectButton({ variant = 'default' }: WalletConnectButtonProps) {
  const { isConnected, isConnecting } = useAccount();

  if (isConnected) {
    return (
      <Wallet>
        <div className="glass-card p-4 flex items-center space-x-3">
          <Avatar className="w-10 h-10" />
          <div className="flex-1">
            <Name className="text-white font-medium" />
            <div className="flex items-center space-x-2 mt-1">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Connected</span>
            </div>
          </div>
        </div>
      </Wallet>
    );
  }

  if (isConnecting || variant === 'connecting') {
    return (
      <div className="glass-card p-4 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
          <Loader2 className="w-5 h-5 text-gray-300 animate-spin" />
        </div>
        <div className="flex-1">
          <p className="text-white font-medium">Connecting...</p>
          <p className="text-sm text-gray-400">Please approve in your wallet</p>
        </div>
      </div>
    );
  }

  return (
    <Wallet>
      <ConnectWallet>
        <div className="btn-primary flex items-center space-x-3 w-full justify-center">
          <WalletIcon className="w-5 h-5" />
          <span>Connect Wallet</span>
        </div>
      </ConnectWallet>
    </Wallet>
  );
}

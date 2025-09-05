'use client';

import { ReactNode } from 'react';
import { Wallet, BarChart3, Settings2, Bell } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">DeFi Vault</h1>
            <p className="text-sm text-gray-400">Your unified DeFi command center</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 glass-card rounded-lg hover:bg-opacity-10 transition-all duration-200">
            <Bell className="w-5 h-5 text-gray-300" />
          </button>
          <button className="p-2 glass-card rounded-lg hover:bg-opacity-10 transition-all duration-200">
            <Settings2 className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-sm mx-auto px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card mx-4 mb-4 p-4">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center space-y-1 text-blue-400">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
            <Wallet className="w-6 h-6" />
            <span className="text-xs font-medium">Portfolio</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200">
            <Settings2 className="w-6 h-6" />
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

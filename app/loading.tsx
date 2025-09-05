export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <div className="w-8 h-8 bg-white rounded-full animate-ping"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading DeFi Vault</h2>
        <p className="text-gray-400">Fetching your portfolio data...</p>
      </div>
    </div>
  );
}

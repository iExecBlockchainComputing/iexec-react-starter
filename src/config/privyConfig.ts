import { arbitrum, arbitrumSepolia } from 'viem/chains';

export const supportedChains = [
  arbitrumSepolia,
  arbitrum,
];

// Get App ID from Privy dashboard
export const projectId = import.meta.env.VITE_PRIVY_APP_ID;

if (!projectId) {
  console.warn('You need to provide VITE_PRIVY_APP_ID env variable in .env file');
}

export const privyConfig = {
  appId: projectId || 'your-privy-app-id',
  config: {
    // Supported chains
    supportedChains: supportedChains,
    // Default chain
    defaultChain: arbitrumSepolia,
    // Login methods
    loginMethods: ['wallet'],
    // Create embedded wallets for users who don't have a wallet
    embeddedWallets: {
      ethereum: {
        createOnLogin: 'users-without-wallets',
      },
    },
    // Appearance
    appearance: {
      theme: 'light',
      accentColor: 'red' as `#${string}`,
    },
  },
};

// Explorer slugs mapping for iExec explorer
export const explorerSlugs: Record<number, string> = {
  42161: 'arbitrum-mainnet', // Arbitrum One
  421614: 'arbitrum-sepolia-testnet', // Arbitrum Sepolia
};
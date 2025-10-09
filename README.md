# 🚀 iExec React Starter - Decentralized Data Protection

A minimal starter to quickly get started with iExec DataProtector and React.

---

## 📋 About

This project is a simple starter that allows you to:

- Connect a Web3 wallet (MetaMask, Privy, etc.)
- Protect data with iExec DataProtector
- Grant access to protected data
- Discover basic iExec features

**Included features:**
- ✅ Wallet connection with Privy (MetaMask, embedded, etc.)
- ✅ Data protection with iExec DataProtector
- ✅ Multi-chain support (iExec Sidechain, Arbitrum)
- ✅ Simple and clean user interface
- ✅ Built with React, TypeScript, and Tailwind CSS

---

## 🛠️ Quick Start

1. **Clone the project:**
```bash
git clone https://github.com/iExecBlockchainComputing/iexec-react-starter.git
cd iexec-react-starter
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Privy:**
   - Go to [https://dashboard.privy.io](https://dashboard.privy.io)
   - Create a project and copy your Privy App ID

4. **Configure environment variables:**
```bash
# Create a .env file
VITE_PRIVY_APP_ID=your_privy_app_id
```

5. **Start the project:**
```bash
npm run dev
```

Your app will be available at [http://localhost:5173](http://localhost:5173)

---

## 🧩 Compatible Wallets

- MetaMask
- Coinbase Wallet
- Brave Wallet  
- WalletConnect
- Zerion

❌ Other wallets may not work with iExec SDKs on Bellecour.

---

## 📁 Project Structure

```
src/
├── components/
│   └── WelcomeBlock.tsx  # Welcome component
├── config/
│   ├── privyConfig.ts    # Privy configuration
├── context/
│   └── ContextProvider.tsx # Global providers
├── utils/
│   └── normalizeChainId.ts # Utility for chainId normalization
├── App.tsx               # Main app logic
└── index.css             # Global styles
```

---

## 🔍 How It Works

### Data Protection
1. **Connection:** Use Privy to connect your wallet
2. **Protection:** Enter data name and content to protect
3. **iExec:** Data is encrypted and stored via DataProtector
4. **Result:** You receive the address and metadata of protected data

---

## 🌐 Supported Networks

- **iExec Sidechain (Bellecour)** - Chain ID: 134
- **Arbitrum One** - Chain ID: 42161
- **Arbitrum Sepolia** - Chain ID: 421614

---

## 🚀 Next Steps

This starter is intentionally minimal. You can extend it with:

- More iExec features (compute, marketplace, Web3Mail)
- Advanced data management interface
- Protected dataset marketplace
- Integration with other iExec services
- Custom iExec applications
- Data monetization features

---

## 📚 Resources

- [iExec Documentation](https://docs.iex.ec/)
- [iExec DataProtector API](https://docs.iex.ec/references/dataProtector)
- [Privy Documentation](https://docs.privy.io/)
- [React Documentation](https://react.dev/)

---

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

---

**Happy coding with iExec & Privy! 🔒✨**
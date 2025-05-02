# Hardhat Simple Storage Project

This is a basic Ethereum smart contract project developed using [Hardhat](https://hardhat.org/). It includes a simple storage contract that allows users to store and retrieve a favorite number, along with a complete testing and deployment setup.

## 📁 Project Structure

```
├── contracts/              # Solidity smart contracts
│   └── SimpleStorage.sol
├── scripts/                # Deployment scripts
├── test/                   # JavaScript tests using Hardhat & Chai
├── hardhat.config.js       # Hardhat configuration
├── .env                    # Environment variables (e.g., private keys, RPC URLs)
├── .gitignore
├── package.json
├── README.md
```

## ⚙️ Features

- ✅ Store and retrieve a number on-chain
- ✅ Unit testing with Chai
- ✅ Gas reporting and code coverage
- ✅ Compatible with local (Hardhat/Ganache) and public networks
- ✅ Environment variable support for private key and RPC URL

## 🔧 Prerequisites

- Node.js
- Yarn or npm
- Hardhat (installed locally or globally)

## 🚀 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hardhat-simple-storage-fcc.git
cd hardhat-simple-storage-fcc

# Install dependencies
yarn install
# or
npm install
```

## 🔐 Environment Setup

Create a `.env` file in the root directory and add the following:

```env
GANACHE_PRIVATE_KEY=your_private_key
GANACHE_RPC_URL=http://127.0.0.1:8545
```

> ⚠️ Never commit `.env` files or real private keys to GitHub.

## 🧪 Running Tests

```bash
npx hardhat test
```

To see gas reports and coverage:

```bash
npx hardhat coverage
```

## 📦 Compile Contracts

```bash
npx hardhat compile
```

## 🛰️ Deploy Contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

> Replace `localhost` with `ganache` or your configured network.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Adeyanju Quasim**  
📧 workingboyquasim@gmail.com  
🐦 [@Working_Defi](https://twitter.com/Working_Defi)  
💻 [LinkedIn](https://linkedin.com/in/your-link)

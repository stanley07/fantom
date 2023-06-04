# NFT Marketplace on Polygon

## Description
This is an NFT marketplace deployed on the Polygon network. The marketplace allows users to buy, sell, and trade non-fungible tokens (NFTs) using the Polygon blockchain.

## Features
- Browse and search for available NFTs.
- Buy NFTs listed by other users.
- Sell your own NFTs to interested buyers.
- Create listings for NFTs with a title, description, and price.
- View detailed information about each NFT, including its current owner and transaction history.
- Connect your Ethereum wallet (e.g., MetaMask) to interact with the marketplace.

## Requirements
- A web browser with MetaMask or another Ethereum wallet extension installed.
- An account on the Polygon network with funds to purchase NFTs and pay for transaction fees.

## Installation
1. Clone the repository: `git clone https://github.com/stanley07/nextjs-blog.git`
2. Navigate to the project directory: `cd your-repository`
3. Install the dependencies: `npm install`

## Configuration
1. Create a new file named `.env`.
2. Define the following environment variables in the `.env` file:
   - `REACT_APP_NETWORK_URL`: The URL of the Polygon network RPC endpoint.
   - `REACT_APP_CONTRACT_ADDRESS`: The address of the NFT contract deployed on Polygon.
   - `REACT_APP_CONTRACT_ABI`: The ABI (Application Binary Interface) of the NFT contract.
   - `REACT_APP_MARKETPLACE_ADDRESS`: The address of the marketplace contract deployed on Polygon.
   - `REACT_APP_MARKETPLACE_ABI`: The ABI of the marketplace contract.

## Usage
1. Start the development server: `npm start`
2. Open your web browser and navigate to `http://localhost:3000`.
3. Connect your Ethereum wallet to the marketplace.
4. Browse, buy, and sell NFTs using the marketplace's user interface.

## Contributing
If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b your-branch-name`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push the changes to your forked repository: `git push origin your-branch-name`
5. Create a pull request in the original repository.

Technologies Used

Polygon: The marketplace is deployed on the Polygon network, leveraging its low transaction fees and fast confirmation times.

React: The frontend is built using React.js, providing a responsive and user-friendly interface.

Hardhat: The smart contracts are developed and tested using the Hardhat framework.

IPFS: NFT metadata and images are stored on IPFS, ensuring decentralized and reliable access.

Web3.js: The marketplace interacts with the Polygon blockchain using the Web3.js library.

Solidity: Smart contracts are written in Solidity, the programming language for Ethereum-based networks.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- [OpenZeppelin](https://openzeppelin.com/): Solidity library for secure smart contract development.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Polygon](https://polygon.technology/): Ethereum scaling solution.

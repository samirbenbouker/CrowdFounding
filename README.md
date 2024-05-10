# Crowdfunding DApp with Ethereum

## Overview

This project is a decentralized crowdfunding platform built on the Ethereum blockchain. It allows users to create and contribute to fundraising campaigns using Ether (ETH). The project consists of smart contracts written in Solidity for managing campaign logic and a frontend interface developed with React for user interaction.

## Features

- **Create Campaigns**: Users can create fundraising campaigns by specifying details such as the goal amount, deadline, and campaign title.
- **Contribute Funds**: Contributors can donate Ether to existing campaigns and track the progress towards the funding goal.
- **Campaign Management**: Campaign creators have the ability to manage their campaigns, including withdrawing funds, closing campaigns, and updating campaign details.
- **Transparency and Security**: All transactions and contributions are recorded on the Ethereum blockchain, providing transparency and security to both campaign creators and contributors.

## Technologies Used

- **Solidity**: Used for writing smart contracts that define the logic of the crowdfunding platform.
- **React**: Used for building the frontend user interface, allowing users to interact with the crowdfunding platform.
- **Web3.js**: Used for interacting with Ethereum smart contracts from the frontend, enabling seamless integration with the Ethereum blockchain.
- **Hardhat**: Used for local development, testing, and deployment of Ethereum smart contracts.
- **Metamask**: A browser extension wallet used for connecting to the Ethereum blockchain and interacting with decentralized applications (DApps) like this crowdfunding platform.

# CrowdFunding Smart Contract

## Overview

The CrowdFunding smart contract is a decentralized platform built on the Ethereum blockchain for creating and managing crowdfunding campaigns. It allows users to create campaigns, donate funds to campaigns, and track the progress of fundraising goals.

## Features

- **Create Campaigns**: Users can create fundraising campaigns by providing details such as the campaign owner, title, description, fundraising target, deadline, and image.
- **Donate to Campaigns**: Users can donate Ether (ETH) to existing campaigns by specifying the campaign ID and the amount to contribute.
- **Track Donations**: Campaign owners can track donations received from contributors, including the list of donators and the corresponding donation amounts.
- **View Campaigns**: Users can view all active campaigns and their details, including the amount collected, target amount, and deadline.

## Smart Contract Functions

### createCampaign

This function allows users to create a new crowdfunding campaign by providing details such as the campaign owner, title, description, fundraising target, deadline, and image. It returns the ID of the newly created campaign.

### donateToCampaign

This function allows users to donate Ether (ETH) to an existing campaign by specifying the campaign ID and the amount to contribute. The donated amount is transferred to the campaign owner, and the total amount collected for the campaign is updated.

### getDonators

This function returns the list of donators and their corresponding donation amounts for a specific campaign.

### getCampaigns

This function returns an array containing all active campaigns created on the platform, including their details.

## Usage

1. **Create Campaign**: Use the `createCampaign` function to create a new crowdfunding campaign with the desired details.
2. **Donate to Campaign**: Use the `donateToCampaign` function to donate funds to an existing campaign by specifying the campaign ID and the amount to contribute.
3. **View Campaigns**: Use the `getCampaigns` function to view all active campaigns and their details.

## Getting Started

1. Clone the repository:
```bash
   git clone https://github.com/your-username/crowdfunding-dapp.git
```

3. Install dependencies:
  ```bash
   git clone https://github.com/your-username/crowdfunding-dapp.git
  ```

3. Start the development server:
  ```bash
   npm start
  ```

## How to Contribute
Contributions to this project are welcome! Here are a few ways you can contribute:

- Report bugs or suggest new features by opening an issue.
- Submit pull requests to fix issues or add new features.
- Write and improve documentation.

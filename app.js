const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "subscriptionId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "period",
				"type": "uint256"
			}
		],
		"name": "SubscriptionCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "subscriptionId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "subscriber",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newExpiry",
				"type": "uint256"
			}
		],
		"name": "SubscriptionRenewed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "subscriptionId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "subscriber",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			}
		],
		"name": "SubscriptionStarted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_period",
				"type": "uint256"
			}
		],
		"name": "createSubscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			}
		],
		"name": "disableSubscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			}
		],
		"name": "enableSubscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			}
		],
		"name": "renewSubscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			}
		],
		"name": "subscribe",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_subscriber",
				"type": "address"
			}
		],
		"name": "checkSubscription",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_subscriber",
				"type": "address"
			}
		],
		"name": "getSubscriberExpiry",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscriptionId",
				"type": "uint256"
			}
		],
		"name": "getSubscription",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "period",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextSubscriptionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "subscribers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "subscriptions",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "period",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "venema",
		"outputs": [
			{
				"internalType": "contract Venema",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = '0x345533262a8C292ee0112964535dEb1311a0298b';

let web3;
let subscriptionContract;
let userAddress;

async function init() {
  if (window.ethereum) {
    try {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      userAddress = (await web3.eth.getAccounts())[0];

      subscriptionContract = new web3.eth.Contract(contractABI, contractAddress);

      document.getElementById('createSubscription').addEventListener('click', createSubscription);
      document.getElementById('subscribe').addEventListener('click', subscribe);
    } catch (error) {
      console.error('User denied account access:', error);
    }
  } else {
    console.error('No web3 provider detected');
  }
}

async function createSubscription() {
  const price = document.getElementById('price').value;
  const period = document.getElementById('period').value;

  try {
    const subscriptionId = await subscriptionContract.methods.createSubscription(price, period).send({ from: userAddress });
    console.log('Subscription created. Subscription ID:', subscriptionId);
  } catch (error) {
    console.error('Error creating subscription:', error);
  }
}

async function subscribe() {
  const subscriptionId = document.getElementById('subscriptionId').value;

  try {
    await subscriptionContract.methods.subscribe(subscriptionId).send({ from: userAddress, value: web3.utils.toWei('1', 'ether') });
    console.log('Subscribed successfully');
  } catch (error) {
    console.error('Error subscribing:', error);
  }
}

init();

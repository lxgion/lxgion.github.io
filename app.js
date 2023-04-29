// Replace with your contract ABI and address
const contractABI = [...];
const contractAddress = '...';

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

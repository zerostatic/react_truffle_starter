import Web3 from 'web3';

let provider = window.web3;

if (typeof provider !== 'undefined') {
  console.log('web 3 using current provider');
  provider = new Web3(provider.currentProvider);
} else {
  provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
//get accounts, then set default account
export let account;
provider.eth.getAccounts(function (err, res) {
  account = res[0];
  console.log('ACCOUNT:: ', res[0]);
  provider.eth.defaultAccount = res[0];
});

export const web3 = provider;

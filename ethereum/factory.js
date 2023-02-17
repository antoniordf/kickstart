import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE8306e9F59cC83F02f5B26d8B502DF542F9b3E6C'
);

export default instance;

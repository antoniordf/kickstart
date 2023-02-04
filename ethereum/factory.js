import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE832E0d2027714F35BBDa1f3cf5396B79F32b246'
);

export default instance;

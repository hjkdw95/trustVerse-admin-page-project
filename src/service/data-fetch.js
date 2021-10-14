import axios from 'axios';
import URL from '../.config';

class fetchData {
  constructor() {}

  async getTamUsers() {
    const response = await axios.get(`/data/userdata.json`);
    const result = response.data;
    return result;
  }

  async getTamWallet() {
    const response = await axios.get(`/data/userWalletData.json`);
    const result = response.data;
    return result;
  }
}

export default fetchData;

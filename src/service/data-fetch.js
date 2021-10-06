import axios from 'axios';
import URL from '../.config';

class fetchData {
  constructor() {}

  async getTamUsers(id) {
    const response = await axios.get(`/data/userdata.json`);
    const result = response.data;
    return result;
  }
}

export default fetchData;

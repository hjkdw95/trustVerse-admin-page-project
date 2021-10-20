import axios from 'axios';
import URL from '../.config';

class fetchData {
  constructor() {}

  async getTamUsers(page) {
    const response = await axios.get(
      `http://192.168.1.246:8000/users?page=${page}`
    );
    const result = response.data.results;
    return result;
  }

  async getTamWallet(page) {
    const response = await axios.get(
      `http://192.168.1.246:8000/wallet?page=${page}`
    );
    const result = response.data;
    return result;
  }

  async getJupiterReports() {
    const response = await axios.get(`/data/jupiterData.json`);
    // const HEADERS = {
    //   Authorization: token,
    // };
    // const response = await axios.get(`http://192.168.1.244:8000/jupiter`, {
    //   headers: HEADERS,
    // });
    const result = response.data;
    return result;
  }

  async signUp(refs) {
    const response = await axios.post(
      `http://192.168.1.244:8000/admin/signup`,
      {
        name: refs.id,
        password: refs.pw,
      }
    );
    const result = response.data;
    return result;
  }

  async signIn(refs) {
    const response = await axios.post(
      `http://192.168.1.244:8000/admin/signin`,
      {
        name: refs.id,
        password: refs.pw,
      }
    );
    const result = response.data;
    return result;
  }
}

export default fetchData;

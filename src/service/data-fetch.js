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
        email: refs.email,
        username: refs.userName,
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
        username: refs.userName,
        email: refs.email,
        password: refs.pw,
      }
    );
    const result = response.data;
    return result;
  }
}

export default fetchData;

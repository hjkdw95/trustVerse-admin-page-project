import axios from 'axios';
import URL from '../config';

class fetchData {
  async getTamUsers(page) {
    const response = await axios.get(`${URL}users?page=${page}`);
    const result = response.data.results;
    return result;
  }

  async getTamWallet(page) {
    const response = await axios.get(`/data/userWalletData.json`);
    const result = response.data;
    return result;
  }

  async getJupiterReports(token) {
    // const response = await axios.get(`/data/jupiterData.json`);
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.get(`${URL}jupiter`, {
      headers: HEADERS,
    });
    const result = response.data;
    return result;
  }

  async signUp(refs) {
    const response = await axios.post(`${URL}admin/signup`, {
      name: refs.id,
      password: refs.pw,
    });
    const result = response.data;
    return result;
  }

  async signIn(refs) {
    const response = await axios.post(`${URL}admin/signin`, {
      name: refs.id,
      password: refs.pw,
    });
    const result = response.data;
    return result;
  }
}

export default fetchData;

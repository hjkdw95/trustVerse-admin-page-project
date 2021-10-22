import axios from 'axios';
import URL from '../config';

class fetchData {
  async getTamUsers(page, token) {
    const HEADERS = {
      Authorization: token,
    };

    const response = await axios.get(`${URL}users?page=${page}`, {
      headers: HEADERS,
    });
    const result = response.data.results;
    return result;
  }

  async getTamWallet(page, token) {
    const HEADERS = {
      Authorization: token,
    };

    const response = await axios.get(`${URL}wallets?page=${page}`, {
      headers: HEADERS,
    });
    const result = response.data.results;
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
    return Object.keys(result);
  }

  async cumulativeSubscription() {
    const response = await axios.get(`/data/CumulativeSubscriptionData.json`);
    const result = response.data;
    return result;
  }
}

export default fetchData;

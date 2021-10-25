import axios from 'axios';
import {
  USER_URL,
  DASHBOARD_URL,
  WALLET_URL,
  JUPITER_URL,
  ADMIN_URL,
} from '../config';

class fetchData {
  // 헤더 넣어줘야함
  async getDashBoard() {
    const response = await axios.get(`${DASHBOARD_URL}`);
    const result = response.data.result;
    return result;
  }

  async getTamUsers(page, token) {
    const HEADERS = {
      Authorization: token,
    };

    const response = await axios.get(`${USER_URL}?page=${page}`, {
      headers: HEADERS,
    });
    const result = response.data.results;
    return result;
  }

  async getTamUserSearch(page, token, item) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.get(
      `${URL}users?page=${page}&search=${item}`,
      {
        headers: HEADERS,
      }
    );
    const result = response.data.results;
    return result;
  }

  async getTamWallet(page, token) {
    const HEADERS = {
      Authorization: token,
    };

    const response = await axios.get(`${WALLET_URL}?page=${page}`, {
      headers: HEADERS,
    });
    const result = response.data.results;
    return result;
  }

  async getTamWalletSearch(page, token, item) {
    const HEADERS = {
      Authorization: token,
    };

    const response = await axios.get(
      `${WALLET_URL}?page=${page}&search=${item}`,
      {
        headers: HEADERS,
      }
    );
    const result = response.data.results;
    return result;
  }

  async getJupiterReports(token) {
    const response = await axios.get(`/data/jupiterData.json`);
    // const HEADERS = {
    //   Authorization: token,
    // };
    // const response = await axios.get(`${JUPITER_URL}`, {
    //   headers: HEADERS,
    // });
    const result = response.data;
    return result;
  }

  async signUp(refs) {
    const response = await axios.post(`${ADMIN_URL}/signup`, {
      email: refs.email,
      username: refs.userName,
      password: refs.pw,
    });
    const result = response.data;
    return result;
  }

  async signIn(refs) {
    const response = await axios.post(`${ADMIN_URL}/signin`, {
      username: refs.userName,
      email: refs.email,
      password: refs.pw,
    });
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

import axios from 'axios';

class fetchData {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
    };

    this.postRequestOptions = {
      method: 'POST',
    };
  }

  async jupiterView() {
    const response = await axios.get('/data/jupiterData.json');
    const result = response.data;
    return result;
  }
}

export default fetchData;

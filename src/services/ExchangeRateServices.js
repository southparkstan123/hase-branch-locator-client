import axios from 'axios';
import { baseUrl, apiKey } from '../config';

export default class ExchangeRateService {
  static async getExchangeRate() {
    const result = await axios.get(`${baseUrl}/api/v1/exchange_rate`,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    return result.data;
  }
}

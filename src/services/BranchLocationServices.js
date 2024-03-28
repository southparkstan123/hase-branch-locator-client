import axios from 'axios';
import { baseUrl, apiKey } from '../config';
export default class BranchLocationService {
  static async getBranchOrATMLocations(responseValue) {
    const result = await axios.post(`${baseUrl}/api/v1/branches`, responseValue,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    return result.data;
  }
}

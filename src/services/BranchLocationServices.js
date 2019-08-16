import axios from 'axios';
import { baseUrl } from '../config';
export default class BranchLocationService {
    static async getBranchOrATMLocations(responseValue) {
        try {            
            const result = await axios.post(`${baseUrl}/api/v1/branches`, responseValue);
            return result.data;
        } catch (error) {
            return error;
        }
    }
}

import axios from "axios";
import { baseUrl } from "../baseUrl";
const LocationService = {
  getLocation: async () => {
    try {
      const getLocationResponse = await axios.get(`${baseUrl}locations`);
      return getLocationResponse.data;
    } catch (error) {}
  },
  getSkills: async () => {
    try {
      const getSkillsResponse = await axios.get(`${baseUrl}skills`);
      return getSkillsResponse.data;
    } catch (error) {}
  },
};

export default LocationService;

// src/api.js
import axios from 'axios';

// Base URL of your API
const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

// Fetch services from the API
export const fetchServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data; // Assuming the data is returned in the response body
    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
};

// Toggle service activation status
export const toggleService = async (serviceName) => {
    try {
        const response = await axios.post(`${API_URL}/services/toggle`, { name: serviceName });
        return response.data; // Assuming the updated service data is returned
    } catch (error) {
        console.error("Error toggling service:", error);
        throw error;
    }
};

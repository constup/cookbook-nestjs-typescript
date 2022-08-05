import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';
import { AxiosInstanceFactoryInterface } from './axios-instance-factory.interface';

export class AxiosInstanceFactory implements AxiosInstanceFactoryInterface {
  produce(): AxiosInstance {
    if (typeof process.env.MOCK_AUTH_API_URL === 'undefined') {
      throw new Error('API URL is undefined.');
    }

    return axios.create({
      baseURL: process.env.MOCK_AUTH_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

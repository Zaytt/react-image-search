import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 52d5d5565994d57c3160b4296aef1be1bf8985d9265e313f0f9db7eb1145d86d'
  }
});
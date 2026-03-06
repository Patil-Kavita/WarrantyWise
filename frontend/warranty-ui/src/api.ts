// Connect to whoever served this file (e.g. 10.121.47.132), but on port 5000
const API_BASE_URL = `http://${window.location.hostname}:5000`;

export const api = {
  async register(username: string, password: string) {
    const res = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    return res.json();
  },

  async login(username: string, password: string) {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    return res.json();
  },

  async getItems(userId: number) {
    const res = await fetch(`${API_BASE_URL}/items/${userId}`);
    return res.json();
  },

  async addItem(userId: number, itemName: string, expiryDate: string) {
    const res = await fetch(`${API_BASE_URL}/add-item`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        user_id: userId, 
        item_name: itemName, 
        expiry_date: expiryDate 
      })
    });
    return res.json();
  }
};

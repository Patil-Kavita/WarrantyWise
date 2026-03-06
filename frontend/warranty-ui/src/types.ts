export interface Product {
  id: string;
  name: string;
  category: string;
  purchaseDate: string;
  expiryDate: string;
  status: 'Active' | 'Expired';
  iconName?: string;
  serialNumber?: string;
}

export interface StatInfo {
  title: string;
  value: number;
  type: 'total' | 'active' | 'expiring' | 'expired';
}

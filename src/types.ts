export type LockType = 'WL' | 'DL' | 'BGL';

export interface LockPackage {
  id: string;
  name: string;
  type: LockType;
  amount: number;
  priceIdr: number;
  bonus?: string;
  stock: number;
  popular?: boolean;
  bestValue?: boolean;
  description: string;
}

export type AccountTier = 'Sultan' | 'Ringmaster' | 'Farm & Builder' | 'Starter Clean';

export interface AccountListing {
  id: string;
  title: string;
  tier: AccountTier;
  level: number;
  growIdDisplay: string;
  ringCount: number;
  rolesSummary: string;
  inventoryHighlights: string[];
  worldsOwned: number;
  backpackSlots: number;
  emailStatus: 'Clean Changable' | 'Full Access Gmail' | 'Unregistered Clean';
  priceIdr: number;
  image: string;
  description: string;
  status: 'available' | 'sold';
  featured?: boolean;
}

export interface TransactionReview {
  id: string;
  growId: string;
  item: string;
  nominalIdr: number;
  rating: number;
  timeAgo: string;
  comment: string;
  type: 'Beli DL' | 'Jual DL' | 'Beli Akun';
}

export interface OrderFormData {
  productId: string;
  productName: string;
  quantity: number;
  totalPriceIdr: number;
  growId: string;
  worldName: string;
  deliveryMethod: 'display_box' | 'donation_box' | 'in_game_trade';
  paymentMethod: string;
  customerPhone: string;
  notes?: string;
}

export interface SellFormData {
  lockType: LockType | 'Account';
  amount: number;
  accountDetails?: string;
  expectedPriceIdr: number;
  growId: string;
  payoutMethod: string;
  accountNumber: string;
  accountHolderName: string;
  customerPhone: string;
  notes?: string;
}

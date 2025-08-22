export interface TShirt {
  _id: string;
  name: string;
  price: number;
  picture: string;
}

export interface CartItem extends TShirt {
  quantity?: number;
}

export interface CousinProps {
  children: React.ReactNode;
  hasFriend?: boolean;
  ring?: string;
}

export interface SpecialProps {
  ring?: string;
}

export interface FriendProps {
  ring?: string;
}

export interface UncleProps {
  ring?: string;
}

export interface MyselfProps {
  ring?: string;
}

export interface FatherProps {
  ring?: string;
}

export interface CartProps {
  cart: CartItem[];
  handleRemoveFromCart: (id: string) => void;
}

export interface TShirtProps {
  tshirt: TShirt;
  handleAddToCart: (tshirt: TShirt) => void;
}

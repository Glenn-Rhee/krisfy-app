export type Props = {
  children: React.ReactNode;
}

export type WalletState = {
  address: `0x${string}` | null;
  balance: bigint | null;
  client: any;
  connecting: boolean;
  connected: boolean;

  setAddress: (addr: `0x${string}` | null) => void;
  setBalance: (bal: bigint | null) => void;
  setClient: (client: any) => void;
  setConnecting: (val: boolean) => void;
  setConnected: (val: boolean) => void;
};

export type DisplayState = {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export type Props = {
  children: React.ReactNode;
}

export type WalletProps = {
  address?: `0x${string}` | null;
  balance?: bigint | null;
  client?: any;
  connecting?: boolean;
  connected?: boolean;

  setAddress?: (address: `0x${string}` | null) => void;
  setBalance?: (balance: bigint | null) => void;
  setConnected?: (connected: boolean) => void;
  setConnecting?: (connecting: boolean) => void;
  setClient?: (client: any) => void;
}

import useClient from './useClient';

export default function useWalletBalance() {
  async function showBalance(address: string): Promise<bigint> {
    const { publicClient } = useClient();

    const balance = await publicClient.getBalance({ address });
    return balance;
  }

  return { showBalance };
}

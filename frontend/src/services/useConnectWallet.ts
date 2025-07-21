import useClient from "@/services/useClient";
import { useWalletStore } from "@/store/useWalletStore";
import useWalletBalance from "./useWalletBalance";

export function useConnectWallet() {
  const { walletClient } = useClient();
  const { showBalance } = useWalletBalance();

  const {
    setBalance,
    setClient,
    setConnected,
    setConnecting,
    setAddress,
  } = useWalletStore();

  async function connect() {
    if (typeof window === 'undefined' || !window.ethereum) {
      alert("MetaMask tidak ditemukan");
      return;
    }

    setConnecting(true);

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });


      const [addr] = await walletClient.requestAddresses();
      const bal = await showBalance(addr);

      setAddress(addr);
      setBalance(bal);
      setClient(walletClient);
      setConnected(true);

      console.log("Address:", addr, "Balance:", bal.toString(), "Client:", walletClient);

    } catch (error) {
      console.error("Error connecting wallet:", error);
      setConnected(false);
    } finally {
      setConnecting(false);
    }
  }

  return { connect };
}

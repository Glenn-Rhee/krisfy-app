import { useEffect } from "react";
import { useWalletStore } from "@/store/useWalletStore";
import useWalletBalance from './useWalletBalance';

export function useWalletEvent() {
  const { showBalance } = useWalletBalance();

  const {
    setAddress,
    setConnected,
    setClient,
    setBalance,
  } = useWalletStore();

  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;

    const raw = localStorage.getItem("WALLET_STORE");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        const address: `0x${string}` | null = parsed?.state?.address;

        if (address) {
          const fetchBalance = async () => {

            const balance = await showBalance(address);
            console.log("Balance:", balance);
            setAddress(address);
            setBalance(balance);
            setConnected(true);
            setClient(null);
          };

          fetchBalance().catch(console.error);
        }
      } catch (err) {
        console.error("Gagal parsing WALLET_STORE:", err);
      }
    }

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length < 1) {
        console.log("Disconnected from MetaMask");
        setAddress(null);
        setConnected(false);
        setClient(null);
        setBalance(null);
      }
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);
}

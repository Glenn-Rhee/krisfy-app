import { useWalletStore } from "@/store/useWalletStore";

const Home = () => {
  const { address, balance } = useWalletStore();

  return (
    <div>
      <h1>Home</h1>
      <p>{address}</p>
      <p>{balance}</p>
    </div>
  );
};

export default Home;

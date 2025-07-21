import Button from "@/components/Button";
import Container from "@/components/Container";
import { useWalletStore } from "@/store/useWalletStore";

const Home = () => {
  const { address, balance } = useWalletStore();

  return (
    <div className="bg-gradient-to-tr pt-10 from-[#1e163e] via-[#0e162c] h-screen to-[#1e163e]">
      {/* Main page */}
      <Container className="gap-x-4 items-center h-[90vh] justify-between mx-auto">
        <div className="w-1/2 relative space-y-6">
          <div className="absolute inset-0 bg-white blur-[80px] m-auto opacity-80 rounded-full w-20 h-20"></div>
          <h1 className="text-7xl uppercase font-bold text-white">
            <span className="bg-gradient-to-r from-[#59a0ff] via-[#c17bff] bg-clip-text text-transparent to-[#59a0ff]">
              Unlock Your
            </span>{" "}
            Crypto Potential
          </h1>

          <p className="text-white text-xl">
            Krisfy adalah platform DeFi terdepan untuk memaksimalkan nilai aset
            crypto Anda. Lend, borrow, dan earn dengan keamanan tingkat
            institusi dan yield yang kompetitif.
          </p>

          <div className="flex items-center gap-x-6">
            <Button className="flex items-center gap-x-4 py-1.5 justify-between text-lg">
              <span>Get Started</span>
              <i className="ri-arrow-right-line"></i>
            </Button>
            <button className="bg-[#201d3a] cursor-pointer border border-[#33333b] px-8 text-[#4e98f0] font-semibold text-lg py-1.5 rounded-2xl">
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-1">
              <i className="ri-stock-line text-lg text-[#05df72]"></i>
              <div className="-space-y-1">
                <span className="text-lg font-bold text-white block">
                  $2.5B+
                </span>
                <span className="text-sm font-light text-white">
                  Total Volume
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <i className="ri-shield-line text-lg text-[#51a2ff]"></i>
              <div className="-space-y-1">
                <span className="text-lg font-bold text-white block">100%</span>
                <span className="text-sm font-light text-white">Secure</span>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <i className="ri-flashlight-line text-lg text-[#b472f5]"></i>
              <div className="-space-y-1">
                <span className="text-lg font-bold text-white block">24/7</span>
                <span className="text-sm font-light text-white">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard - Right Side */}
        <div className="w-1/2">
          <div className="px-3 py-4 rounded-2xl relative bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border border-[#353b77]">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-40"></div>{" "}
            <div className="flex relative z-10 items-center justify-between">
              <h5 className="text-white font-semibold text-lg">
                Krisfy Dashboard
              </h5>
              <div className="w-2 h-2 bg-[#05DD72] rounded-full" />
            </div>
            <div className="my-3 relative z-10 gap-x-3 flex items-center justify-between">
              <div className="w-1/2 bg-[#23274faf] border border-[#2c2f4f] flex flex-col text-white p-3 rounded-xl">
                <span className="font-light text-sm">Available to Lend</span>
                <span className="font-bold text-xl">$125,430</span>
                <span className="text-sm text-[#05DD72]">+12.5% APY</span>
              </div>
              <div className="w-1/2 bg-[#23274faf] border border-[#2c2f4f] flex flex-col text-white p-3 rounded-xl">
                <span className="font-light text-sm">Current Loans</span>
                <span className="font-bold text-xl">$89,250</span>
                <span className="text-sm text-[#51a2ff]">+5.8% APR</span>
              </div>
            </div>
            <div className="flex flex-col relative z-10 gap-y-4">
              <div className="bg-[#23274faf] border border-[#2c2f4f] flex items-center justify-between p-3 rounded-xl">
                <div className="flex items-center gap-x-2">
                  <span className="w-8 h-8 bg-[#fb6600] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    B
                  </span>
                  <div className="flex text-white flex-col">
                    <span className="font-semibold text-lg">BTC</span>
                    <span className="text-xs">8.1% APY</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-white text-lg">
                    $48389
                  </span>
                  <span className="text-[#05DD72]">+1.5%</span>
                </div>
              </div>

              <div className="bg-[#23274faf] border border-[#2c2f4f] flex items-center justify-between p-3 rounded-xl">
                <div className="flex items-center gap-x-2">
                  <span className="w-8 h-8 bg-[#fb6600] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    E
                  </span>
                  <div className="flex text-white flex-col">
                    <span className="font-semibold text-lg">ETH</span>
                    <span className="text-xs">12.9% APY</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-white text-lg">
                    $48114
                  </span>
                  <span className="text-[#05DD72]">+3.9%</span>
                </div>
              </div>

              <div className="bg-[#23274faf] border border-[#2c2f4f] flex items-center justify-between p-3 rounded-xl">
                <div className="flex items-center gap-x-2">
                  <span className="w-8 h-8 bg-[#fb6600] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    U
                  </span>
                  <div className="flex text-white flex-col">
                    <span className="font-semibold text-lg">USDC</span>
                    <span className="text-xs">14.3% APY</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-white text-lg">
                    $55593
                  </span>
                  <span className="text-[#05DD72]">+3.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

// import { useConnectWallet } from "../services/useConnectWallet";
// import { useWalletStore } from "@/store/useWalletStore";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  // const { connect } = useConnectWallet();
  // const { connected } = useWalletStore();

  return (
    <nav
      className="flex justify-center z-10 bg-[#0b0d11] py-3 items-center fixed top-0 left-0 right-0 "
      role="navigation"
      aria-label="main navigation"
    >
      <Container className="justify-between items-center">
        {/* Icon logo */}
        <div className="flex items-center gap-x-2">
          <img
            src="logo-blue.png"
            alt="Krisfy Logo"
            width={35}
            className="rounded-full aspect-square"
          />
          <span className="bg-gradient-to-r from-[#3a62ff] via-[#7044fb] to-[#9a27ff] bg-clip-text text-transparent font-bold text-xl">
            Krisfy
          </span>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-x-10 text-white text-sm">
          <li className="hover:underline cursor-pointer">Products</li>
          <li className="hover:underline cursor-pointer">Resources</li>
          <li className="hover:underline cursor-pointer">Developers</li>
        </ul>

        {/*  */}
        <div className="flex items-center gap-x-4">
          <i className="ri-search-line cursor-pointer text-white text-3xl"></i>
          <Button>Open App</Button>
        </div>
      </Container>
    </nav>
  );
}

import Logo from "../assets/bitcoin.png"
import { useConnectWallet } from "../services/useConnectWallet";
import { useWalletStore } from "@/store/useWalletStore";

export default function Navbar() {
  const { connect } = useConnectWallet();
  const { connected } = useWalletStore();

  return(
    <nav
      className="flex justify-center items-center"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="flex justify-between items-center w-[1200px]">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} alt="Logo" className="w-[50px]" />
        </a>
      </div>
        <ul className="flex gap-2 items-center">
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-xl text-white font-bold cursor-pointer" onClick={() => connect()}> {connected ? 'Connected' : 'Connect Wallet'} </button>
        </ul>
      </div>
    </nav>
  )
}

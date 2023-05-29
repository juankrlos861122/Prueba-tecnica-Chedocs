import facebook from "@assets/social/facebook-white.svg";
import twitter from "@assets/social/twitter-white.svg";
import instagram from "@assets/social/instagram-white.svg";

import playStore from "@assets/store/play-store.svg";
import appStore from "@assets/store/app-store.svg";
import windowsStore from "@assets/store/windows-store.svg";

const Footer = () => {
  return (
    <footer className="p-6 bg-[#202020] w-full text-gray-400 absolute bottom-0">
      <div className="m-auto max-w-7xl">
        <nav className="mb-3">
          Home | Terms and Conditions | Privacy Policy | Collection Statement | Help
          | Manage Account
        </nav>
        <section className="mb-10">
          Copyrigth &#169; 2016 DEMO Streaming All Right Reserved.
        </section>
        <section className="flex w-full justify-between">
          <div className="flex gap-4">
            <img className="w-10 h-10" src={facebook} alt="facebook-chedoc" />
            <img className="w-10 h-10" src={twitter} alt="twitter-chedoc" />
            <img className="w-10 h-10" src={instagram} alt="instagram-chedoc" />
          </div>
          <div className="flex gap-4 mb-5">
            <img className="h-10" src={appStore} alt="AppStore" />
            <img className="h-10" src={playStore} alt="PlayStore" />
            <img className="h-10" src={windowsStore} alt="WindowsStore" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

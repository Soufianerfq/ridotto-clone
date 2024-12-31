import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, sepolia, base, bsc } from "@reown/appkit/networks";

export const projectId = "42567907ab6aa5bc26783a9db9e2b6bf";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [mainnet, arbitrum, sepolia, base];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
  },
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
console.log(config);

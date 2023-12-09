## Solana starter kit

This template has everything you need to build a web3 app on Solana using the thirdweb SDK.

The thirdweb Solana SDK is open source and can be used, but they will no longer be maintaining it.
The SDK accepts a different RPC URL. The dev should sign up for a paid Solana node provider and provide it to the SDK:

import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";

const sdk = ThirdwebSDK.fromNetwork(
	"https://YOUR_CUSTOM_SOLANA_RPC_URL",
  {
    clientId: "YOUR_CLIENT_ID",
		secretKey: "YOUR_SECRET_KEY",
});

## Editing

```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our hooks to work.

on `pages/index.tsx`, you'll find an example of a connect wallet button and some hooks.

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).

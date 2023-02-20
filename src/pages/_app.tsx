import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "@wix/design-system/styles.global.css";
import { WixDesignSystemProvider } from "@wix/design-system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WixDesignSystemProvider>
      <Component {...pageProps} />
    </WixDesignSystemProvider>
  );
}

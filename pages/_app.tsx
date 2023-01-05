import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.degydratedState}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

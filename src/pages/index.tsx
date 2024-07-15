import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";
import { CheckInButton } from "@/components/check-in-button";
import "@/app/globals.css";

const Home = () => (
  <TonConnectUIProvider manifestUrl="https://recent-deals.vercel.app/tonconnect-manifest.json">
    <NextUIProvider>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col bg-gray-100 round-lg bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        <header className="container mx-auto flex w-full max-w-3xl items-center justify-between pb-4 pt-5">
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src="/back-arrow.png"
                width={36}
                height={36}
                alt="back-arrow"
                className="mr-2 mt-1.5"
              />
            </Link>
            <TonConnectButton className="float-right" />
          </div>
        </header>
        <div className="container mx-auto h-full w-full max-w-3xl p-5">
          <div>
            <div className="text-[28px] font-extrabold">
              <p className="text-[#654CA8]">Welcome to BountyBay!</p>
              <p className="bg-gradient-to-r from-[#551BED] to-[#9B7AF9] bg-clip-text text-transparent">
                Onchain Check-in to Earn $BBY!
              </p>
            </div>
            <div className="my-4 rounded-lg bg-white px-2 py-1 bg-gradient-to-r from-[#FFEFD1] to-[#FFF] text-sm">
              Make sure you've login to BountyBay mini app and connect your TON
              wallet in order to receive points.
            </div>
            <CheckInButton />
            <div className="my-4 flex flex-col items-center">
              <div className="flex items-center">
                <Link href="https://www.4everland.org/">
                  <Image
                    src="/4everland.png"
                    width={100}
                    height={60}
                    alt="4everland"
                    className="mr-2"
                  />
                </Link>
                <Link href="https://greenfield.bnbchain.org/">
                  <Image
                    src="/bnb-greenfield.png"
                    width={200}
                    height={25}
                    alt="bnb-greenfield"
                    className="ml-2"
                  />
                </Link>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Powered By 4everland & BNB Greenfield
              </p>
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  </TonConnectUIProvider>
);

export default Home;

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full mt-36 p-8">
          <div className="text-[48px] font-extrabold leading-tight">
            <p className="text-[#654CA8]">CHECK-IN to</p>
            <p className="bg-gradient-to-r from-[#551BED] to-[#9B7AF9] bg-clip-text text-transparent">
              Earn $BBY
            </p>
            <p className="text-[#654CA8]">Points!</p>
          </div>
          <CheckInButton />
          <div className="mt-6 mb-4 flex flex-col items-center justify-center">
            <Link href={"https://t.me/bountybay_bot"}>
              <Image src="/logo.png" width={105} height={36} alt="logo" />
            </Link>
            <Link
              href={"https://www.4everland.org/"}
              className="mt-4 text-sm text-gray-500"
            >
              Powered By 4EVERLAND & BNB Greenfield
            </Link>
          </div>
        </div>
      </div>
    </NextUIProvider>
  </TonConnectUIProvider>
);

export default Home;

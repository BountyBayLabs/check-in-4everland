import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import TonWeb from "tonweb";

export const CheckInButton: React.FC = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    console.log(tonConnectUI.connected);
    if (tonConnectUI.connected) {
      setButtonText("CHECK-IN");
    } else {
      setButtonText("CONNECT WALLET");
    }
  }, [tonConnectUI?.connected]);

  const checkIn = async () => {
    console.log(tonConnectUI.connected);
    if (tonConnectUI.connected) {
      const address = "EQAjeK7jdhIida6L78_KpOTL4HlY8zOcuqasWkaem1Nv4t1-";
      const amount = (0.008 * Math.pow(10, 9)).toString();
      const newCell = new TonWeb.boc.Cell();
      newCell.bits.writeUint(928085272, 32);
      const payload = TonWeb.utils.bytesToBase64(await newCell.toBoc());
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 120,
        messages: [
          {
            address,
            amount,
            payload,
          },
        ],
      };
      const result = await tonConnectUI.sendTransaction(transaction);
      console.log(result);
    } else {
      await tonConnectUI.openModal();
    }
  };

  return (
    <Button
      className="my-24 w-full bg-[#382173] text-white py-7 px-6 rounded-full text-lg font-bold hover:bg-[#4a2a88] transition duration-300 shadow-[0px_4px_20px_0px_#551BED40]"
      onClick={checkIn}
    >
      {buttonText}
    </Button>
  );
};

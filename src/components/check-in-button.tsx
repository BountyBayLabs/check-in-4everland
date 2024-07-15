import { Button } from "@nextui-org/react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import TonWeb from "tonweb";

export const CheckInButton: React.FC = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const checkIn = async () => {
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
    const result = tonConnectUI.sendTransaction(transaction);
    console.log(result);
  };

  return (
    <Button
      className="my-8 w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-6 px-8 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition duration-300"
      onClick={checkIn}
    >
      Check In
    </Button>
  );
};

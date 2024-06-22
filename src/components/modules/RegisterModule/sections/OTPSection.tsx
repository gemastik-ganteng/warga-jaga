import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type OTPSectionProps = {
  nextStep: (otpProps: string) => void;
};

const OTPSection: React.FC<OTPSectionProps> = ({ nextStep }) => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 detik untuk countdown
  const [otp, setOtp] = useState("")

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col w-full items-center">
      <p className="text-sm max-w-[75%] text-center mt-6">
        Kode OTP telah dikirimkan melalui email Anda
      </p>
      <div className="grid w-full">
        <div className="grid mx-auto w-full mt-6 max-w-sm items-center gap-y-1.5">
          <Label htmlFor="otp">Kode OTP</Label>
          <Input type="number" id="otp" placeholder="Masukkan Kode OTP" onChange={(e) => setOtp(e.target.value)}/>
          <p className="text-sm text-center mt-2">
            Sisa waktu: {formatTime(timeLeft)}
          </p>
        </div>
        <div className="flex w-full mx-auto justify-center">
          <button
            onClick={async () => nextStep(otp)}
            className="bg-[#2653C7] py-3 px-4 mt-4 w-full rounded-lg max-w-sm text-white"
            disabled={timeLeft === 0}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPSection;

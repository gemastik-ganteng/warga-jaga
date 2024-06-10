import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import React from 'react';

type IntroVerifikasiKTPSectionProps = {
    nextStep: () => void
}

const IntroVerifikasiKTPSection: React.FC<IntroVerifikasiKTPSectionProps> = ({nextStep}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center font-bold text-xl">
        Verifikasi Kartu Tanda Penduduk (KTP) Pengguna
      </h1>
      <p className="text-center text-sm mt-4">
        Contoh foto kartu tanda identitas yang benar
      </p>
      <div className="grid gap-4 mt-4 grid-cols-1 max-w-xs mx-auto w-full">
        <div className="relative flex items-center justify-center w-full p-1 bg-green-600 h-48">
          <img src="/ktp-true.svg" className="w-full object-cover h-full max-w-sm" />
          <FaCheckCircle className="absolute top-2 right-2 text-green-600 text-2xl" />
        </div>
        <div className="relative flex items-center justify-center w-full p-1 bg-red-600 h-48">
          <img src="/ktp-false.svg" className="w-full object-cover h-full max-w-sm" />
          <FaTimesCircle className="absolute top-2 right-2 text-red-600 text-2xl" />
        </div>
      </div>
      <Button onClick={nextStep} className="w-full max-w-xs mx-auto mt-4">Mulai Verifikasi</Button>
    </div>
  );
};

export default IntroVerifikasiKTPSection;

  
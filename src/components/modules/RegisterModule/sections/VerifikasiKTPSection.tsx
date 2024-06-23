import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

type VerifikasiKTPSectionProps = {
  complete: ()=> void
}

const VerifikasiKTPSection: React.FC<VerifikasiKTPSectionProps> = ({complete}) => {
  const [ktpPhoto, setKtpPhoto] = useState<string | null>(null);
  const [udahUpload, setUdahUpload] = useState<boolean>(false);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setKtpPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUdahUpload(true);
    }
  };

  const handleDeletePhoto = () => {
    setKtpPhoto(null);
    setUdahUpload(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center font-bold text-xl">
        Verifikasi Kartu Tanda Penduduk (KTP) Pengguna
      </h1>
      <div className="w-full mt-4 min-h-16 max-w-[22rem] border-2 rounded-md border-dashed border-black aspect-video flex items-center justify-center relative">
        {ktpPhoto ? (
          <>
            <img src={ktpPhoto} alt="KTP Preview" className="rounded-md w-full h-full object-contain" />
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 hover:bg-red-600" 
              onClick={handleDeletePhoto}
            >
              X
            </button>
          </>
        ) : (
          <p className="text-black">Foto KTP belum ada</p>
        )}
      </div>
      {
        !udahUpload && 
        <div className="mt-4 w-full max-w-xs relative">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoUpload} 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
          />
          <Button className="w-full">Ambil Foto KTP</Button>
        </div>
      }
      {
        udahUpload && 
        <div className="mt-4 w-full max-w-xs relative">
          <Button onClick={complete} className="w-full">Verifikasi</Button>
        </div>
      }
    </div>
  );
};

export default VerifikasiKTPSection;


import { Bukti } from "@/types";

export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};

export const convertBase64ToFile = (bukti: Bukti): File => {
    const byteString = atob(bukti.base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: bukti.type });
    return new File([blob], bukti.name, { type: bukti.type });
};

export const convertBase64ToFile2 = (bukti: Bukti): File => {
    const byteString = bukti.base64;
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: bukti.type });
    return new File([blob], bukti.name, { type: bukti.type });
};
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

export const getFileType = (base64: string): string => {
    // Extracting the MIME type from the base64 data
    const mimePattern = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,/;
    const match = base64.match(mimePattern);

    if (match && match[1]) {
        const mimeType = match[1].toLowerCase();
        console.log(mimeType)
        return mimeType;
    }

    // Default to 'application/octet-stream' if type cannot be determined
    return 'application/octet-stream';
};

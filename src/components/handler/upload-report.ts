import { Laporan, UserData } from "@/types";
import { fileToBase64 } from "@/utility/FileService";
import axios from "axios";

export const uploadReport = async (report: Laporan, files: File[], user: UserData) => {
  try {
    // Map each file to its Base64 representation asynchronously
    const base64Promises = files.map(async (file) => {
      return await fileToBase64(file);
    });

    // Wait for all Base64 promises to resolve
    const base64strFiles = await Promise.all(base64Promises);

    console.log("RP", report)

    const dataDikirim = {
      email: user.email,
      judul: report.judul,
      jenisKejahatan: report.jenisTindakan,
      waktuKejadian: report.waktuKejadian,
      tanggalKejadian: report.tanggalKejadian,
      lokasiKejadian: report.lokasiKejadian,
      deskripsiKejadian: report.deskripsiKejadian,
      base64strFiles: base64strFiles,
      namaPelapor: report.namaPelapor,
    };

    console.log("::", dataDikirim)

    console.log(dataDikirim);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reports`,
      dataDikirim
    );

    // Handle success if needed
    console.log('Report uploaded successfully');
    console.log(response.data); // if you expect a response

  } catch (error) {
    // Handle error
    console.error('Error uploading report:', error);
    throw new Error('Failed to upload report');
  }
};


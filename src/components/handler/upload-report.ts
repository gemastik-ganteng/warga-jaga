import { Laporan, UserData } from "@/types";
import axios from "axios";


export const uploadReport = async (report: Laporan, files: File[], user: UserData) => {
    try {
      const formData = new FormData();
  
      // Append report data to FormData
      formData.append('email', user.email)
      formData.append('judul', report.judul);
      formData.append('namaPelapor', report.namaPelapor);
      formData.append('jenisTindakan', report.jenisTindakan);
      formData.append('waktuKejadian', report.waktuKejadian);
      formData.append('tanggalKejadian', report.tanggalKejadian);
      formData.append('lokasiKejadian', report.lokasiKejadian);
      formData.append('deskripsiKejadian', report.deskripsiKejadian);
  
      // Append evidence files to FormData
      files.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });
  
      // Make POST request to your Express API endpoint
      await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+'/reports', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Handle success if needed
      console.log('Report uploaded successfully');
    } catch (error) {
      // Handle error
      console.error('Error uploading report:', error);
      throw new Error('Failed to upload report');
    }
  };
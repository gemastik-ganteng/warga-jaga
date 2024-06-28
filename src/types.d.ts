export interface Laporan {
  _id?: string;
  namaPelapor: string;
  jenisTindakan: string;
  judul: string;
  waktuKejadian: string;
  tanggalKejadian: string;
  lokasiKejadian: string;
  deskripsiKejadian: string;
  bukti?: Bukti[];
  deskripsi?: string;
  files?: string[];
}

export interface Bukti {
  name: string;
  type: string;
  base64: string;
}

export interface Notifikasi {
  tanggal: string;
  jam: string;
  deskripsi: string;
}

export interface RegisterRequestDTO {
  name: string,
  password: string,
  email: string,
  phone: string
}

export interface UserData {
  email: string,
  name: string,
  phone: string,
  role: 'Warga' | 'Pemerintah'
}

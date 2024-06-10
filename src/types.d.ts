export interface Laporan {
    namaPelapor: string,
    jenisTindakan: string,
    waktuKejadian: string,
    tanggalKejadian: string,
    lokasiKejadian: string,
    deskripsiKejadian: string,
    bukti: Bukti[]

}


export interface Bukti {
    name: string;
    type: string;
    base64: string;
}
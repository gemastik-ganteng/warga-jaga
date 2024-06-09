export interface Laporan {
    namaPelapor: string,
    jenisTindakan: string,
    waktuKejadian: string,
    tanggalKejadian: string,
    lokasiKejadian: string,
    deskripsiKejadian: string,
    bukti: Bukti[]

}

export interface Bukti{
    name: string,
    url: string,
    type: 'IMAGE'|'VIDEO'|'AUDIO'|'DOKUMEN'
}
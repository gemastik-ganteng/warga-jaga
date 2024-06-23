import DetailLaporanModule from "@/components/modules/DetailLaporanModule"

const DetailLaporan = ({ params }: { params: { id: string } }) => {
    return <DetailLaporanModule id={params.id}/>
}

export default DetailLaporan
"use client"
import Stack from "@/components/elements/Stack"
import SubmitLaporanElement from "../element/SubmitLaporanElement"
import { useEffect, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"


import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { useLaporan } from "@/components/context/LaporanContext"
import FileTile from "../element/FileTile"
import { convertBase64ToFile } from "@/utility/FileService"
import { uploadReport } from "@/components/handler/upload-report"
import { useAuth } from "@/components/context/AuthContext"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
})

const LaporanSection = () => {
    const [image, setImage] = useState<string | null>(null);
    const [position, setPosition] = useState<string | undefined>("Pilih Jenis Tindakan Kriminal")
    const {laporan, setLaporan} = useLaporan()
    const [files, setFiles] = useState<File[]>([]);
    const [judul, setJudul] = useState<string>("")
    const [namaPelapor, setNamaPelapor] = useState<string>("")
    const [jenisTindakan, setJenisTindakan] = useState<string>("")
    const [waktuKejadian, setWaktuKejadian] = useState<string>("")
    const [tanggalKejadian, setTanggalKejadian] = useState<string>("")
    const [lokasiKejadian, setLokasiKejadian] = useState<string>("")
    const [deskripsiKejadian, setDeskripsiKejadian] = useState<string>("")
    const {userData, loading} = useAuth()
    const router = useRouter();

    useEffect(()=>{
      console.log(userData)
      if(!userData && !loading){
         router.push("/login")
      }
  },[userData, loading])


    useEffect(() => {
        setPosition(laporan?.jenisTindakan ?? "Pilih Jenis Tindakan Kriminal")
        if(laporan){
          setJudul(laporan.judul)
          setNamaPelapor(laporan?.namaPelapor )
          setJenisTindakan(laporan?.jenisTindakan)
          setWaktuKejadian(laporan?.waktuKejadian)
          setTanggalKejadian(laporan?.tanggalKejadian)
          setLokasiKejadian(laporan?.lokasiKejadian)
          setDeskripsiKejadian(laporan?.deskripsiKejadian)
        }
    },[laporan])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFiles([...files, file])    
        }
    }

    useEffect(()=>{
        if(laporan){
            const buktibukti = laporan.bukti;
            if(buktibukti){
              const nwFiles: File[] = [];
              for(const bukti of buktibukti){
                  nwFiles.push(convertBase64ToFile(bukti))
              }
              setFiles(nwFiles)
            }
            
        }
    }, [laporan]);

    const buatLaporan = async () => {
      console.log("pos:",position)
      console.log("HISDKJba")
      
      await uploadReport({
        judul: judul,
        namaPelapor: namaPelapor,
        jenisTindakan: position!,
        waktuKejadian: waktuKejadian,
        tanggalKejadian: tanggalKejadian,
        lokasiKejadian: lokasiKejadian,
        deskripsiKejadian: deskripsiKejadian,
        bukti: []
      }, files, userData!)
    } 

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
          dob: (tanggalKejadian ? new Date() : new Date()),
      },
  })
    
    function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
        title: "You submitted the following values:",
        description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
        ),
    })
    }

    return <div className="flex flex-col w-full">
    <div className="flex flex-col w-full mt-8 space-y-4 mb-4">
      <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Judul Laporan</label>
            <input placeholder="Tulis judul laporan"
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md" value={judul}
            onChange={(e) => setJudul(e.target.value)}/>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Nama Pelapor</label>
            <input placeholder="Tulis nama lengkap Anda"
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md" value={namaPelapor}
            onChange={(e) => setNamaPelapor(e.target.value)}/>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Jenis Tindakan Kriminal</label>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={`justify-start pl-8 border-blue-400 border-2 rounded-md py-5 ${position !== "Pilih Jenis Tindakan Kriminal" ? "text-black hover:text-black" : "text-gray-400 hover:text-gray-400"} hover:text-gray-400 hover:bg-white `}>
                    {position}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="justify-items-start bg-[#EBF8FE]">
                <DropdownMenuRadioGroup value={position? position : undefined} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="Pencurian">Pencurian</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Penculikan">Penculikan</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Pelecehan">Pelecehan</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Pemerkosaan">Pemerkosaan</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Kekerasan">Kekerasan</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Pembegalan">Pembegalan</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Penipuan">Penipuan</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Narkoba">Narkoba</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Waktu Kejadian</label>
            <Stack>
            <input  placeholder="Tulis waktu kejadian" 
            className="w-full text-sm text-black border-2 pr-2 pl-10 py-3 border-blue-400 rounded-md" 
            value={waktuKejadian} onChange={(e) => {setWaktuKejadian(e.target.value)}}/>
            <img src="./clock.svg" className="my-auto ml-4" />
            </Stack>
        </div>
        <div className="w-full flex flex-col space-y-1">
      <label className="text-lg text-black font-semibold">Tanggal Kejadian</label>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal w-full border-blue-400 border-2 rounded-md justify-start",
                          !tanggalKejadian && "text-muted-foreground"
                        )}
                      >
                        <div className="flex items-center space-x-4 justify-start">
                          <CalendarIcon className="h-4 w-4 opacity-50" />
                          {tanggalKejadian ? (
                            <span>{format(tanggalKejadian, "PPP")}</span>
                          ) : (
                            <span className="text-gray-400">Pilih Tanggal Kejadian</span>
                          )}
                        </div>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={tanggalKejadian? new Date() : new Date(tanggalKejadian)}
                      onSelect={(date)=> {
                        // console.log("--> ", date)
                        if(date){
                          setTanggalKejadian(date.toDateString())
                        }
                        }}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Lokasi Kejadian</label>
            <input placeholder="Tulis detail lokasi kejadian" 
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md"
            value={lokasiKejadian} onChange={(e) => {setLokasiKejadian(e.target.value)}}/>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Deskripsi</label>
            <textarea placeholder="Ceritakan kejadian dengan rinci" 
            className="h-28 w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md"
            value={deskripsiKejadian} onChange={(e) => {setDeskripsiKejadian(e.target.value)}}/>
        </div>
        
        <div className="flex flex-col w-full space-y-1">
            <label className="text-lg text-black font-semibold">Upload Bukti Kejadian</label>
            <div className="flex items-center justify-center w-full">
                <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-400 bg-white rounded-md cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-7 pb-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </div>
                <input id="file-upload" type="file" className="opacity-0" onChange={handleFileChange} />
                </label>
            </div>
            <div className="pt-8">
                <label className="text-lg text-black font-semibold ">Bukti-Bukti Kejadian</label>
                </div>
                {
                    files.length == 0 && <div className="py-16 w-full flex ">
                        <h1 className="text-black text-sm text-center mx-auto">Belum ada bukti. Mohon Upload Bukti Kejadian</h1>
                    </div>
                }
                <div className="flex flex-col items-center space-y-2 w-full">
                    {
                        files.map((data, index)=> {
                            return <FileTile 
                            key={`file-${index}`}
                            file={data} 
                            onDelete={()=>{
                                setFiles(files => files.filter((file)=> file != data))
                            }}
                            />
                        })
                    }
                </div>
        </div>

    </div>
        <SubmitLaporanElement onClick={buatLaporan}/>
    </div>
}

export default LaporanSection
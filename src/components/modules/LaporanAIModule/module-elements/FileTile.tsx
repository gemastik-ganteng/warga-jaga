import { Button } from '@/components/ui/button';
import React from 'react';
import { RiFileTextLine, RiImageLine, RiVideoLine, RiMusic2Line } from 'react-icons/ri'; // Import ikon-ikon yang digunakan

type FileTileProps = {
    file: File;
    onDelete: () => void;
}

const getFileIcon = (fileType: string): JSX.Element => {
    switch (fileType) {
        case 'image':
            return <h1 className='text-xs'>Gambar</h1>; // Ikon untuk file gambar
        case 'video':
            return <h1 className='text-xs'>Video</h1>; // Ikon untuk file video
        case 'audio':
            return <h1 className='text-xs'>Audio</h1>; // Ikon untuk file audio
        default:
            return <h1 className='text-xs'>Dokumen</h1>; // Ikon untuk file dokumen atau tipe file yang tidak dikenal
    }
};

const FileTile: React.FC<FileTileProps> = ({ file }) => {

    const fileIcon = getFileIcon(file.type.split('/')[0]);

    // Menampilkan preview jika file adalah gambar atau video
    const renderPreview = () => {
        if (file.type.startsWith('image')) {
            return <img className='w-full aspect-video object-cover' src={URL.createObjectURL(file)} alt="Preview" />;
        } else if (file.type.startsWith('video')) {
            return <video className='w-full aspect-video object-cover' controls><source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
            </video>;
        } else {
            return <div className='flex items-center justify-center w-full p-4'>
            </div>; // Ikon dokumen untuk tipe file yang tidak dikenal
        }
    };

    return (
        <div className='flex flex-col w-full p-4 text-white rounded-lg space-y-2 gap-2 bg-[#2653C7]'>
            {fileIcon}
            <div className='flex flex-col gap-2'>
                <div className='flex w-full '>
                {renderPreview()}
                </div>
                <div className=''>
                <p>{file.name}</p>
                <p>Tipe File: {file.type}</p>
                <p>Ukuran File: {file.size} bytes</p>
                </div>
            </div>
        </div>
    );
}

export default FileTile;

import Stack from "@/components/elements/Stack";
import Image from "next/image";

interface ProfileInfoTileProps {
  value: string | undefined;
  src: string;
  placeholder?: string;
  password?: boolean;
  onchange?: (value: string) => void;
}

const ProfileInfoTile = ({
  value,
  src,
  placeholder,
  password,
  onchange,
}: ProfileInfoTileProps) => {
  return (
    <>
      <Stack>
        <input
          readOnly={!password}
          type={password ? "password" : "text"}
          placeholder={placeholder}
          className="w-full text-black border-2 pl-11 py-3 border-blue-400 rounded-md font-semibold placeholder:text-black"
          value={value ?? "Anonymous"}
          onChange={(e) => onchange && onchange(e.target.value)}
        />
        <Image
          src={src}
          className="my-auto ml-4 flex"
          alt=""
          width={20}
          height={20}
        />
      </Stack>
    </>
  );
};

export default ProfileInfoTile;

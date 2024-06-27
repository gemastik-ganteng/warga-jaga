import { useEffect, useState } from "react";
import PhotoProfileTile from "../element/PhotoProfileTile";
import ProfileInfoTile from "../element/ProfileInfoTile";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";

const ProfileSection = () => {
  const [password, setPassword] = useState<string>("");
  const { userData, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(userData);
    if (!userData && !loading) {
      router.push("/login");
    }
  }, [userData, loading]);

  return (
    <>
      <div className="flex flex-col items-center mx-4 w-full">
        <PhotoProfileTile />
        <div className="w-full flex flex-col mt-4 gap-3">
          <ProfileInfoTile value={userData?.email} src="./envelope.svg" />
          <ProfileInfoTile value={userData?.phone} src="./phone.svg" />
          <ProfileInfoTile
            value={password}
            src="./key.svg"
            password={true}
            placeholder="Ubah Password"
            onchange={setPassword}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileSection;

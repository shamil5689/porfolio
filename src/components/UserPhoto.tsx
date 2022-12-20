import { FC, useCallback, useRef, useState } from "react";

export const UserPhoto: FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [userPhoto, setUserPhoto] = useState("/img/Userpic.png");

  const handleAvatar = useCallback(() => {
    fileRef.current?.click();
  }, []);

  return (
    <div className="w-[169px] border-4 border-[#fff] h-[169px] mr-[30px] rounded-full overflow-hidden">
      <img
        src={userPhoto}
        alt="user"
        className="max-[485px]:mb-[20px] max-[485px]:mr-0 cursor-pointer"
        onClick={handleAvatar}
      />
      <input
        type="file"
        className="hidden"
        onChange={(e) => {
          if (e.target.files) {
            setUserPhoto(URL.createObjectURL(e.target.files[0]));
          }
        }}
        ref={fileRef}
      />
    </div>
  );
};

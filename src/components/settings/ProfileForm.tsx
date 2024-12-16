import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "../../store/useUser";
import { PencilIcon } from "../../icons/PencilIcon";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../common/Input";

const formValuesSchema = z.object({
  yourName: z.string(),
  userName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  dateOfBirth: z.string().date(),
  permanentAddress: z.string(),
  presentAddress: z.string(),
  profileImage: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

type FormValues = z.infer<typeof formValuesSchema>;

const ProfileForm = () => {
  const user = useUser((state) => state.user);

  const { register, handleSubmit, setValue, watch, reset } =
    useForm<FormValues>({
      defaultValues: user,
      resolver: zodResolver(formValuesSchema),
    });

  useEffect(() => {
    reset(user, {
      keepDirty: true,
    });
  }, [reset, user]);

  const profileImage = watch("profileImage");

  const setUser = useUser((state) => state.setUser);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setUser({ ...data, profileImage: profileImage || "" });
    alert("Form Submitted!");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setValue("profileImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center lg:items-start lg:space-x-6 flex-col lg:flex-row">
          {/* Profile Image Upload */}
          <div className="relative size-24 flex-shrink-0">
            <img
              src={profileImage || ""}
              alt="Profile"
              className="size-24 rounded-full object-cover flex-shrink-0"
            />
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-black text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
              <PencilIcon />
            </label>
            <input
              title="profile picture"
              id="profileImage"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* Form Fields */}
          <div className="grid lg:grid-cols-2 gap-y-6 gap-x-7 w-full">
            <Input {...register("yourName")} label="Your Name" />
            <Input {...register("userName")} label="User Name" />
            <Input {...register("email")} label="Email" type="email" />
            <Input label="Password" {...register("password")} type="password" />
            <Input
              label="Date of Birth"
              {...register("dateOfBirth")}
              type="date"
            />
            <Input label="Present Address" {...register("presentAddress")} />
            <Input
              label="Permanent Address"
              {...register("permanentAddress")}
            />
            <Input label="City" {...register("city")} defaultValue="San Jose" />
            <Input label="Postal Code" {...register("postalCode")} />
            <Input label="Country" {...register("country")} />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="bg-black text-white px-16 py-2 rounded-2xl hover:bg-gray-800 focus:outline-none w-full lg:w-auto">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

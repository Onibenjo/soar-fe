import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  className?: string;
  inputClassName?: string;
  label?: string;
  containerClassName?: string;
  addonStart?: React.ReactNode;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      addonStart,
      inputClassName,
      containerClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col gap-y-3", containerClassName)}>
        {!!label && (
          <label className="block text-sm font-medium text-label">
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex gap-3 w-full border rounded-2xl bg-white items-center px-5 py-4 gap-x-5",
            className
          )}>
          {addonStart}
          <input
            type="text"
            {...props}
            ref={ref}
            className={cn(
              "focus:outline-none bg-transparent placeholder:text-[#718EBF]",
              inputClassName,
              label ? "mt-1" : ""
            )}
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

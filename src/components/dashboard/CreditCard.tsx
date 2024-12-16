import { cn } from "../../lib/utils";
import ChipCardDark from "../../assets/Chip_Card_dark.png";
import ChipCardLight from "../../assets/Chip_Card_light.png";

type CreditCardProps = {
  theme?: "dark" | "light";
  balance: string;
  customerName: string;
  expiryDate: string;
  cardNo: string;
  className?: string;
};
export const CreditCard = ({
  theme = "dark",
  balance,
  customerName,
  expiryDate,
  cardNo,
  className,
}: CreditCardProps) => {
  const isDark = theme === "dark";
  return (
    <div
      className={cn(
        "relative w-96 h-full rounded-3xl text-white flex flex-col justify-between",
        {
          "bg-gradient-to-r from-[#5B5A6F] to-black": isDark,
          "border border-[#DFEAF2] bg-white": !isDark,
        },
        className
      )}>
      {/* Top Section */}
      <div className="px-6 pt-6 flex justify-between">
        <div className="">
          <p
            className={cn("text-white text-xs", {
              "text-[#718EBF]": !isDark,
            })}>
            Balance
          </p>
          <h2
            className={cn("text-xl font-semibold text-[#343C6A]", {
              "text-white": isDark,
            })}>
            {balance}
          </h2>
        </div>

        {isDark ? (
          <img src={ChipCardLight} alt="chipcard" />
        ) : (
          <img src={ChipCardDark} alt="chipcard" />
        )}
      </div>

      {/* Middle Section */}
      <div className="flex justify-between text-xs flex-1 gap-x-16 px-6 items-center">
        <div>
          <p
            className={cn("text-white opacity-70", {
              "text-[#718EBF]": !isDark,
            })}>
            CARD HOLDER
          </p>
          <p
            className={cn("text-base font-semibold text-[#343C6A]", {
              "text-white": isDark,
            })}>
            {customerName}
          </p>
        </div>
        <div>
          <p
            className={cn("text-white opacity-70", {
              "text-[#718EBF]": !isDark,
            })}>
            VALID THRU
          </p>
          <p
            className={cn("text-base font-semibold text-[#343C6A]", {
              "text-white": isDark,
            })}>
            {expiryDate}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={cn(
          "flex justify-between items-center px-6 py-5 bg-gradient-to-b from-white/15",
          {
            "border-t border-[#DFEAF2]": !isDark,
          }
        )}>
        <p
          className={cn(
            "text-lg font-semibold tracking-widest text-[#343C6A]",
            { "text-white": isDark }
          )}>
          {cardNo}
        </p>
        <div className="flex items-center justify-center">
          <div
            className={cn("w-6 h-6 bg-[#9199AF]/50 rounded-full -mr-[25%]", {
              "bg-white/50": isDark,
            })}></div>
          <div
            className={cn("w-6 h-6 bg-[#9199AF]/50 rounded-full", {
              "bg-white/50": isDark,
            })}></div>
        </div>
      </div>
    </div>
  );
};

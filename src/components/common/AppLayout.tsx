import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { useIsMobile } from "../../hooks/useMediaQuery";
import { Sidebar } from "./Sidebar";
import { NotificationsIcon, SearchIcon, SettingsIcon } from "../../icons";
import { Input } from "./Input";

type AppLayoutProps = {
  children: React.ReactNode;
  className?: string;
  activeTab?: string;
  title?: string;
};

type HeaderItemsProps = {
  className?: string;
};
const HeaderItems = ({ className }: HeaderItemsProps) => {
  return (
    <div className={cn("flex items-center space-x-7 justify-end", className)}>
      <Input
        addonStart={<SearchIcon />}
        placeholder="Search for something"
        containerClassName="w-full"
        className="flex rounded-[40px] bg-[#F5F7FA] w-full"
      />
      <button
        className="bg-[#F5F7FA] rounded-full p-3 outline-none border-none hover:opacity-90 hidden lg:block"
        title="settings">
        <SettingsIcon width={25} className="text-[#718EBF]" />
      </button>
      <button
        className="bg-[#F5F7FA] rounded-full p-3 outline-none border-none hover:opacity-90 hidden lg:block"
        title="notifications">
        <NotificationsIcon width={25} className="text-[#396AFF]" />
      </button>
    </div>
  );
};

export const AppLayout = ({
  children,
  className,
  activeTab = "dashboard",
  title = "Dashboard",
}: AppLayoutProps) => {
  const [isMobileMenuOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isMobileMenuOpen);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-y-auto bg-white xl:bg-[#F5F7FA]">
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={toggleMobileMenu}
        />
      )}
      <Sidebar
        activeTab={activeTab}
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40 xl:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Desktop Sidebar */}
      <Sidebar
        activeTab={activeTab}
        className={cn(
          "hidden xl:block w-64 bg-white shadow-md lg:sticky top-0 left-0 bottom-0"
        )}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Main Content */}
      <main
        className="flex-1"
        onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
        <header className="bg-white py-5 px-10">
          <div className="flex items-center justify-between">
            <div
              className={cn("cursor-pointer space-y-2 xl:hidden mr-10")}
              onClick={() => setIsOpen(true)}>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
            </div>

            <h1 className="text-2xl font-semibold flex-1">{title}</h1>
            <HeaderItems className="hidden lg:flex flex-1" />
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full ml-9"
            />
          </div>
          <HeaderItems className="flex lg:hidden mt-5 w-full justify-between" />
        </header>

        <div className={cn("px-6 lg:px-10 py-6 bg-[#F5F7FA]", className)}>
          {children}
        </div>
      </main>
    </div>
  );
};

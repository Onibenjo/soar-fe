import {
  CreditCardIcon,
  EconomicInvestmentIcon,
  HomeIcon,
  LoanIcon,
  ServicesIcon,
  SettingsIcon,
  TransferIcon,
  UserIcon,
} from "../../icons";
import { cn } from "../../lib/utils";

const menuItems = [
  {
    icon: <HomeIcon />,
    label: "Dashboard",
    id: "dashboard",
  },
  {
    icon: <TransferIcon />,
    label: "Transactions",
    id: "transactions",
  },
  {
    icon: <UserIcon />,
    label: "Accounts",
    id: "accounts",
  },
  {
    icon: <EconomicInvestmentIcon />,
    label: "Investments",
    id: "investments",
  },
  {
    icon: <CreditCardIcon />,
    label: "Credit Cards",
    id: "credit-cards",
  },
  {
    icon: <LoanIcon />,
    label: "Loans",
    id: "loans",
  },
  {
    icon: <ServicesIcon />,
    label: "Services",
    id: "services",
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    id: "settings",
  },
];

export const AppLayout = ({
  children,
  className,
  activeTab = "dashboard",
  title = "Dashboard",
}: {
  children: React.ReactNode;
  className?: string;
  activeTab?: string;
  title?: string;
}) => {
  return (
    <div className="flex h-screen overflow-y-auto bg-white xl:bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md sticky top-0 left-0 bottom-0">
        <div className="py-5 px-10 text-2xl font-bold text-blue-600">
          {/* <div className="py-5 px-10 text-2xl font-bold text-blue-600 border-r border-[#E6EFF5]"> */}
          Soar Task
        </div>
        <div className="HAMBURGER-ICON space-y-2">
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <nav className="pt-4">
          <ul className="space-y-5">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li
                  key={item.id}
                  className={cn(
                    "py-4 px-11 text-[#b1b1b1] hover:bg-black/5 hover:text-black flex gap-x-6 cursor-pointer text-lg items-center relative",
                    isActive && "text-black"
                  )}>
                  {isActive && (
                    <div className="h-full w-2 rounded-e-md bg-black absolute left-0 top-0 bottom-0" />
                  )}
                  {item.icon} {item.label}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="flex items-center justify-between bg-white py-5 px-10">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for something"
              className="p-2 text-sm bg-gray-200 rounded-md"
            />
            <i className="fas fa-cog text-gray-600"></i>
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <div className={cn("px-10 py-6", className)}>{children}</div>
      </main>
    </div>
  );
};

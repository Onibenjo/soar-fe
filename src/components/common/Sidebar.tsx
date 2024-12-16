import { Link } from "react-router";
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
    href: "",
  },
  {
    icon: <TransferIcon />,
    label: "Transactions",
    id: "transactions",
    href: "transactions",
  },
  {
    icon: <UserIcon />,
    label: "Accounts",
    id: "accounts",
    href: "accounts",
  },
  {
    icon: <EconomicInvestmentIcon />,
    label: "Investments",
    id: "investments",
    href: "investments",
  },
  {
    icon: <CreditCardIcon />,
    label: "Credit Cards",
    id: "credit-cards",
    href: "credit-cards",
  },
  {
    icon: <LoanIcon />,
    label: "Loans",
    id: "loans",
    href: "loans",
  },
  {
    icon: <ServicesIcon />,
    label: "Services",
    id: "services",
    href: "services",
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    id: "settings",
    href: "settings",
  },
];

type SidebarProps = {
  activeTab: string;
  className?: string;
  toggleMobileMenu?: () => void;
};
export const Sidebar = ({
  activeTab,
  toggleMobileMenu,
  className,
}: SidebarProps) => {
  return (
    <aside className={cn(className)}>
      <div className="flex justify-between items-center">
        <div className="py-5 px-10 text-2xl font-bold text-blue-600">
          Soar Task
        </div>
        <button
          title="close"
          className="font-bold outline-none border-none bg-transparent w-10 pr-4 xl:hidden"
          onClick={toggleMobileMenu}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0F1729"></path>
            </g>
          </svg>
        </button>
      </div>
      <nav className={cn("pt-4 z-50 h-full")}>
        <ul className="space-y-5">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <li key={item.id}>
                <Link
                  to={`/${item.href}`}
                  onClick={toggleMobileMenu}
                  className={cn(
                    "py-4 px-11 text-[#b1b1b1] hover:bg-black/5 hover:text-black flex gap-x-6 cursor-pointer text-lg items-center relative",
                    isActive && "text-black"
                  )}>
                  {isActive && (
                    <div className="h-full w-2 rounded-e-md bg-black absolute left-0 top-0 bottom-0" />
                  )}
                  {item.icon} {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

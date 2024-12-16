import { CreditCard } from "../components/dashboard/CreditCard";
import { AppLayout } from "../components/common/AppLayout";
import { Container } from "../components/common/Container";

const creditCards = [
  {
    balance: "$5,756",
    id: "card-1",
    customerName: "Eddy Cusuma",
    expiryDate: "12/22",
    cardNo: "3778 **** **** 1234",
    theme: "dark" as const,
  },
  {
    balance: "$2,190",
    id: "card-2",
    customerName: "Ava Moreno",
    expiryDate: "08/25",
    cardNo: "4532 **** **** 8765",
    theme: "light" as const,
  },
  {
    balance: "$8,421",
    id: "card-3",
    customerName: "Liam Chen",
    expiryDate: "04/28",
    cardNo: "6011 **** **** 2345",
    theme: "dark" as const,
  },
];

const CardsPage = () => {
  return (
    <AppLayout
      className="space-y-6 min-h-screen"
      activeTab="dashboard"
      title="Cards">
      <Container
        className="bg-transparent p-0 rounded-none flex flex-wrap gap-4 overflow-visible"
        title="My Cards">
        {creditCards.map((card) => (
          <div className="h-60">
            <CreditCard
              key={card.id}
              balance={card.balance}
              customerName={card.customerName}
              expiryDate={card.expiryDate}
              cardNo={card.cardNo}
              theme={card.theme}
              className="transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
        ))}
      </Container>
    </AppLayout>
  );
};

export default CardsPage;

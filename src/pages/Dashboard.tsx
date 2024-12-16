import { CreditCard } from "../components/dashboard/CreditCard";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";
import { WeeklyActivityChart } from "../components/dashboard/WeeklyActivityChart";
import { ExpenseStatisticsChart } from "../components/dashboard/ExpenseStatisticsChart";
import { BalanceHistoryChart } from "../components/dashboard/BalanceHistoryChart";
import { QuickTransfer } from "../components/dashboard/QuickTransfer";
import { AppLayout } from "../components/common/AppLayout";
import { Container } from "../components/common/Container";
import { Link } from "react-router";
import Slider from "react-slick";
import React from "react";
import { useCards } from "../hooks/useCards";

const slideSettings = {
  className: "slider variable-width",
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

const Dashboard = () => {
  const sliderRef = React.useRef<Slider>(null);
  const { data: creditCards } = useCards();

  return (
    <AppLayout className="space-y-6" activeTab="dashboard" title="Overview">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Container
            className="bg-transparent space-x-4 p-0 rounded-none h-[15rem]"
            title="My Cards"
            addonEnd={
              <Link
                className="text-[#343C6A] font-semibold transform hover:scale-[1.01] transition-all"
                to="/dashboard/cards">
                See All
              </Link>
            }>
            <div className="slider-container overflow-visible">
              <Slider ref={sliderRef} {...slideSettings}>
                {creditCards.map((card) => (
                  <div className="mr-8 h-60">
                    <CreditCard
                      key={card.id}
                      balance={card.balance}
                      customerName={card.customerName}
                      expiryDate={card.expiryDate}
                      cardNo={card.cardNo}
                      theme={card.theme}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Container>
        </div>

        <div className="">
          <Container className="lg:h-[15rem]" title="Recent Transactions">
            <RecentTransactions />
          </Container>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Container className="" title="Weekly Activity">
            <WeeklyActivityChart />
          </Container>
        </div>

        <Container className="" title="Expense Statistics">
          <ExpenseStatisticsChart />
        </Container>
      </section>

      <section className="flex gap-8 flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <Container className="" title="Quick Transfer">
            <QuickTransfer />
          </Container>
        </div>

        <div className="lg:w-2/3 ">
          <Container className="h-64" title="Balance History">
            <BalanceHistoryChart />
          </Container>
        </div>
      </section>
    </AppLayout>
  );
};

export default Dashboard;

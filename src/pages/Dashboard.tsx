import React from "react";
import { CreditCard } from "../components/dashboard/CreditCard";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";
import { WeeklyActivityChart } from "../components/dashboard/WeeklyActivityChart";
import { ExpenseStatisticsChart } from "../components/dashboard/ExpenseStatisticsChart";
import { BalanceHistoryChart } from "../components/dashboard/BalanceHistoryChart";
import { QuickTransfer } from "../components/dashboard/QuickTransfer";
import { AppLayout } from "../components/common/AppLayout";

const Dashboard: React.FC = () => {
  return (
    <AppLayout className="space-y-6" activeTab="dashboard" title="Overview">
      {/* Cards Section */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* My Cards */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">My Cards</h2>
          <div className="flex items-center space-x-4 mt-4">
            <CreditCard />
            <CreditCard />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="">
          <RecentTransactions />
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Weekly Activity */}
        <div className="col-span-2">
          <WeeklyActivityChart />
        </div>

        {/* Expense Statistics */}
        <ExpenseStatisticsChart />
      </section>

      {/* Quick Transfer & Balance History */}
      <section className="flex gap-8 flex-col xl:flex-row">
        {/* Quick Transfer */}
        <div className="xl:w-[35%]">
          <QuickTransfer />
        </div>

        {/* Balance History */}
        <div className="xl:w-[65%]">
          <BalanceHistoryChart />
        </div>
      </section>
    </AppLayout>
  );
};

export default Dashboard;

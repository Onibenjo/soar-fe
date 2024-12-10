import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sat", deposit: 200, withdraw: 500 },
  { day: "Sun", deposit: 300, withdraw: 400 },
  { day: "Mon", deposit: 100, withdraw: 300 },
  { day: "Tue", deposit: 400, withdraw: 500 },
  { day: "Wed", deposit: 200, withdraw: 100 },
  { day: "Thu", deposit: 300, withdraw: 400 },
  { day: "Fri", deposit: 300, withdraw: 400 },
];

export const WeeklyActivityChart: React.FC = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold">Weekly Activity</h2>
      <div className="bg-white rounded-3xl px-5 py-7">
        <ResponsiveContainer width={"100%"} height={300}>
          <BarChart data={data} margin={{ top: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="deposit" fill="#4299E1" name="Deposit" />
            <Bar dataKey="withdraw" fill="#1A202C" name="Withdraw" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

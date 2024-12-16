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

export const WeeklyActivityChart = () => {
  return (
    <div className="bg-white rounded-3xl">
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart data={data} margin={{ top: 20, bottom: 5 }}>
          <Legend type="circle" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="deposit" fill="#4299E1" name="Deposit" />
          <Bar dataKey="withdraw" fill="#1A202C" name="Withdraw" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

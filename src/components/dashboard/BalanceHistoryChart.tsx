import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Aug", balance: 400 },
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 350 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 600 },
  { month: "Dec", balance: 350 },
  { month: "Jan", balance: 700 },
];

interface IGradientData {
  offset: string;
  color: string;
}
interface IGradientContent {
  data: IGradientData[];
}
const GradientContent: React.FC<IGradientContent> = ({ data }) => {
  return (
    <>
      {data.map((el) => {
        return (
          <stop
            offset={el.offset}
            style={{ stopColor: el.color, stopOpacity: 0.9 }}
          />
        );
      })}
    </>
  );
};

export const BalanceHistoryChart: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Balance History</h2>
      <div className="bg-white rounded-3xl p-4">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data} margin={{ top: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="grad3" x1="0" y1="0" x2="0" y2={`${100}%`}>
                <GradientContent
                  data={[
                    { offset: "0%", color: "#2D60FF40" },
                    { offset: "100%", color: "#2D60FF00" },
                  ]}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              fill="url(#grad3)"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2B6CB0"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

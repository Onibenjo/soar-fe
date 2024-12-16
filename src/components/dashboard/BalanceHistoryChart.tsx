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
import { useBalanceHistory } from "../../hooks/useBalanceHistory";

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

export const BalanceHistoryChart = () => {
  const { data } = useBalanceHistory();
  return (
    <div className="bg-white rounded-3xl">
      <ResponsiveContainer width="100%" height={200}>
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
  );
};

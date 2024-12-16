import { PieChart as PieX } from "react-minimal-pie-chart";

const data = [
  { name: "Entertainment", value: 30, color: "#343C6A", shiftSize: 4 },
  { name: "Bill Expense", value: 15, color: "#FC7900", shiftSize: 6 },
  { name: "Others", value: 35, color: "#232323", shiftSize: 0 },
  { name: "Investment", value: 20, color: "#396AFF", shiftSize: 2 },
];

export const ExpenseStatisticsChart = () => {
  return (
    <div className="bg-white rounded-3xl py-1 flex justify-center items-center">
      <PieX
        data={data}
        segmentsShift={(index) => data[index].shiftSize}
        className="w-64 h-64"
        startAngle={210}
        radius={50 - 7}
        label={({ x, y, dx, dy, dataEntry }) => (
          <text
            x={x}
            y={y - 3}
            dx={dx}
            dy={dy}
            dominant-baseline="central"
            text-anchor="middle"
            color="orange"
            className="text-[6px] font-bold"
            style={{
              fontSize: "6px",
            }}
            fill="white">
            {Math.round(dataEntry.percentage) + "%"}
            <tspan
              x={x}
              y={y + 2}
              dx={dx}
              dy={dy}
              fill="white"
              className="text-[4px] font-bold">
              {dataEntry.name}
            </tspan>
          </text>
        )}
      />
    </div>
  );
};

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  defs
} from "recharts";
import "./ChartSection.css";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 900 },
];

// 💎 Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          padding: "10px 15px",
          borderRadius: "10px",
          color: "white",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ margin: 0 }}>{label}</p>
        <p style={{ margin: 0, fontWeight: "bold" }}>
          Users: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const ChartSection = () => {
  return (
    <section className="charts">
      <h3 style={{ marginBottom: "20px" }}>Users Growth</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f2fe" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4facfe" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

          <XAxis 
            dataKey="name" 
            stroke="#ccc"
            tick={{ fill: "#ccc" }}
          />

          <YAxis 
            stroke="#ccc"
            tick={{ fill: "#ccc" }}
          />

          <Tooltip content={<CustomTooltip />} />

          {/* Gradient Area */}
          <Area
            type="monotone"
            dataKey="users"
            stroke="none"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />

          {/* Main Line */}
          <Line
            type="monotone"
            dataKey="users"
            stroke="#00f2fe"
            strokeWidth={4}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ChartSection;

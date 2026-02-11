import React from "react";
import "./StatsCard.css";
import { motion } from "framer-motion";

const stats = [
  { title: "Revenue", value: "$12,345" },
  { title: "Active Users", value: "1,234" },
  { title: "Conversions", value: "345" },
  { title: "Tasks Completed", value: "678" },
];

const StatsCard = () => {
  return (
    <section className="stats-cards">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>{stat.value}</h3>
          <p>{stat.title}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsCard;

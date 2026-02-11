import React from 'react';
import './ActivityTable.css';


const activities = [
  { id: 1, name: "John Doe", action: "Signed Up", status: "Success" },
  { id: 2, name: "Jane Smith", action: "Purchased Plan", status: "Pending" },
  { id: 3, name: "Bob Johnson", action: "Cancelled Subscription", status: "Failed" },
];

const ActivityTable = () => {
  return (
    <section className="activity-table">
      <h3>Recent Activity</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(act => (
            <tr key={act.id}>
              <td>{act.name}</td>
              <td>{act.action}</td>
              <td>{act.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ActivityTable;

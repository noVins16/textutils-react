import React from "react";

export default function Alert({ alert }) {
  const Capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{Capitalize(alert.type)}!</strong> {alert.message}
        </div>
      )}
    </div>
  );
}

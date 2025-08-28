"use client";

import React from "react";

export const PrintButton: React.FC<{className?: string}> = ({className}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={className || "no-print px-3 py-1.5 rounded-lg border border-default-200/50 bg-content2 hover:bg-content3 transition-colors"}
    >
      Печать / PDF
    </button>
  );
};

export default PrintButton;



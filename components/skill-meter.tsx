import React from "react";

type SkillMeterProps = {
  label: string;
  value: number; // 0..100
  hint?: string;
};

export const SkillMeter: React.FC<SkillMeterProps> = ({ label, value, hint }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-default-800 font-medium">{label}</span>
        <span className="text-default-500">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-default-200/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-[width] duration-500"
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
      {hint ? <div className="text-xs text-default-500">{hint}</div> : null}
    </div>
  );
};

export default SkillMeter;



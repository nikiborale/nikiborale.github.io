import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-card px-3 py-2 text-sm shadow-lg">
        <p className="text-ivory">{label}</p>
        <p className="text-gold font-semibold">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function SparkLine({ data }) {
  return (
    <div className="h-28 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4af37" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#d4af37" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#f2c3d1"
            strokeWidth={2}
            fill="url(#spark)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

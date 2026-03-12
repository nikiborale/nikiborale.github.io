import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';

const TooltipCard = ({ active, payload, label }) => {
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

export function GrowthChart({ data }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 0 }}>
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9fb5a9" stopOpacity={0.85} />
              <stop offset="95%" stopColor="#9fb5a9" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="year" stroke="#cfd3d8" tickLine={false} axisLine={false} />
          <YAxis stroke="#cfd3d8" tickLine={false} axisLine={false} />
          <Tooltip content={<TooltipCard />} />
          <Area type="monotone" dataKey="value" stroke="#d4af37" fill="url(#area)" strokeWidth={2.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MarketBars({ data }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 0, right: 16 }}>
          <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.07)" />
          <XAxis type="number" stroke="#cfd3d8" axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" stroke="#cfd3d8" axisLine={false} tickLine={false} width={120} />
          <Bar dataKey="value" radius={[12, 12, 12, 12]} fill="#f2c3d1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

import SectionHeader from '../components/SectionHeader.jsx';
import { GrowthChart, MarketBars } from '../components/graphs/PortfolioChart.jsx';
import { financeSeries, marketBars } from '../data/content.js';

export default function Finance() {
  return (
    <section id="finance" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Finance & Markets"
          title="Market-style visuals for product + investing curiosity"
          description="Interactive charts that mirror how I think about risk, growth, and strategy."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between text-sm text-fog">
              <span>Portfolio Growth (2019 → 2025)</span>
              <span className="text-gold font-semibold">Live-style simulation</span>
            </div>
            <GrowthChart data={financeSeries} />
          </div>
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between text-sm text-fog">
              <span>Conviction by theme</span>
              <span className="text-sage">Signals from research</span>
            </div>
            <MarketBars data={marketBars} />
          </div>
        </div>
      </div>
    </section>
  );
}

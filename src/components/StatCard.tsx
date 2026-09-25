interface StatCardProps {
  value: string;
  label: string;
  note?: string;
}

export default function StatCard({ value, label, note }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-meltz-accent mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-sm font-semibold text-meltz-charcoal uppercase tracking-wider mb-1">
        {label}
      </div>
      {note && (
        <div className="text-[10px] text-meltz-gray italic mt-1">{note}</div>
      )}
    </div>
  );
}

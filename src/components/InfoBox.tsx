import { formatToReal } from "@/lib/utils";

interface InfoBoxProps {
  icon: string;
  label: string;
  value: number | string;
  color: string;
}

export function InfoBox({ icon, label, value, color }: InfoBoxProps) {
  return (
    <div className="flex items-center border rounded-lg shadow-sm p-4 gap-4 w-full sm:w-[30%]" style={{ borderColor: color }}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-semibold">{formatToReal(value)}</div>
      </div>
    </div>
  );
}

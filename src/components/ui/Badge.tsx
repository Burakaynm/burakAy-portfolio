type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100">
      {label}
    </span>
  );
}
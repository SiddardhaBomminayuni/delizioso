import { FaStar } from "react-icons/fa";

export default function Stars({ value = 4, total = 5, className = "", onColor = "text-brand", offColor = "text-white" }) {
  return (
    <div className={`flex items-center justify-center ${className}`} aria-label={`${value} out of ${total} stars`}>
      {Array.from({ length: total }, (_, i) => (
        <FaStar key={i} className={i < value ? onColor : offColor} />
      ))}
    </div>
  );
}

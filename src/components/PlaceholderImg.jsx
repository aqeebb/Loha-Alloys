
export default function PlaceholderImg({
    label,
    gradient = "from-gray-700 to-gray-500",
    className = "",
}) {
    return (
        <div
            className={`w-full flex items-center justify-center bg-gradient-to-br ${gradient} text-white font-semibold ${className}`}
        >
            {label}
        </div>
    );
}
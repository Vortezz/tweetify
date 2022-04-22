export function Button({label, size, onClick, color}: ButtonProps) {
    return (
        <button onClick={onClick}
                className={`p-2 mb-4 bg-${color ?? "vortezz-purple"} rounded-lg w-[calc(90%)] max-w-[calc(20rem)] text-center text-vortezz-white text-xl font-semibold cursor-pointer mx-auto mt-6`}>{
            label}
        </button>
    )
}

export interface ButtonProps {
    label: string,
    size: "little" | "medium" | "large",
    onClick?: () => void,
    color?: string
}
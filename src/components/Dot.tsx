export function Dot({ color }: { color: string }) {
    return (
        <div className="flex items-center justify-center">
            <div className={`w-4 h-4 bg-${color}-500`} />
        </div>
    );
}

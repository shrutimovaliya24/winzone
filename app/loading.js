export default function Loading() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-[7px] border-gray-200 border-t-blue-500 animate-spin" />
                <p className="text-gray-500 text-lg font-medium">Loading...</p>
            </div>
        </div>
    );
}
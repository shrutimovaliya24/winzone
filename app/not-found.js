import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-gray-50 flex items-center justify-center xl:h-[calc(100vh-321px)] lg:h-[calc(100vh-219px)] md:h-[calc(100vh-194px)] sm:h-[calc(100vh-152px)] h-[calc(100vh-195px)] pt-[44px] lg:pt-[88px] md:pt-[52px] p-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start md:gap-8 gap-4">
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 flex-shrink-0">
          <Image
            src="/img/not-found.svg"
            alt="Page not found illustration"
            fill
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
            priority
            className="object-contain"
          />
        </div>

        <div className="text-left md:py-8 md:w-auto sm:w-[500px] w-[300px]">
          <h1 className="text-4xl font-bold text-gray-900 md:mb-6 mb-3 text-center md:text-left">
            Page not found
          </h1>
          <p className="text-lg text-gray-600 md:mb-8 mb-4">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              aria-label="Go back to the home page"
            >
              <span>Go to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

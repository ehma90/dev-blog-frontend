export default function Loading() {
  return (
    <div className="flex-1 my-12 flex justify-center items-center">
      <div className="max-w-7xl mx-auto !px-4 sm:px-6 lg:px-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="w-96 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="w-64 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>
          <div className="w-32 h-12 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Posts Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="w-full h-3 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="text-center">
          <div className="w-80 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="w-32 h-12 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

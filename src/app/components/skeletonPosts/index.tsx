export default function SkeletonLoading() {
  return (
    <div className="container">
      <div className="animate-pulse flex flex-row xs-flex-wrap justify-start py-3 border-light-grey">
        <div className="w-full">
          <div className="h-2 bg-light-grey rounded-full dark:bg-gray-700 max-w-[480px]"></div>
        </div>
      </div>
    </div>
  )
}
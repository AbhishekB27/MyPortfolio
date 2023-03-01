import { motion } from "framer-motion";

function CircleIndicator({ name, percent, imageURL }) {
  // Calculate the stroke-dashoffset value based on the percent
  const circumference = 2 * Math.PI * 52; // 52 is the radius of the circle
  const dashoffset = circumference - (percent / 100) * circumference;
  //   size = 100
  // strokeWidth = 10
  // center = size / 2
  //        = 100 / 2 = 50
  // radius = center - strokeWidth
  //        = 50 - 10 = 40

  return (
    <div className="relative group cursor-pointer">
      <div className="absolute w-[5rem] text-center top-[-1.5rem] left-[1.4rem] group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">
        {name}
      </div>
      <svg className="h-[120px] w-[120px] rounded-full">
        <circle
          id="top"
          className="stroke-[8px] stroke-[#ddd] border fill-white/30 text-gray-300"
          r="52"
          cy="60"
          cx="60"
        />
        <image
          className=""
          x="20"
          y="20"
          xlinkHref={imageURL}
          width="80px"
          height="80px"
        />
        <circle
          className="stroke-[8px] z-50 stroke-white border fill-transparent text-gray-300"
          r="52"
          cy="60"
          cx="60"
          fill="transparent"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
export default CircleIndicator;

import Image from "next/image";
import communityImage1 from "@/../assets/icons/community.png"; // Replace with your image paths
import communityImage2 from "@/../assets/icons/events.png"; // Replace with your image paths
import communityImage3 from "@/../assets/icons/meal.png"; // Replace with your image paths

export default function CommunityPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-32 md:py-16">
      <h1 className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300 bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-center">
        Welcome to Our Community!
      </h1>
      <p className="text-lg dark:text-gray-300 text-gray-600 mb-8 max-w-2xl text-center">
        Join our vibrant community of food enthusiasts! Here, you can share recipes, tips, and experiences with fellow foodies. Explore new culinary delights, participate in discussions, and get inspired to try something new every day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
        <div className="relative w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md transition duration-300 dark:shadow-gray-600 shadow-black">
          <Image
            src={communityImage1}
            alt="Community Image 1"
            layout="fill"
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="relative w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md transition duration-300 dark:shadow-gray-600 shadow-black">
          <Image
            src={communityImage2}
            alt="Community Image 2"
            layout="fill"
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="relative w-full h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-md transition duration-300 dark:shadow-gray-600 shadow-black">
          <Image
            src={communityImage3}
            alt="Community Image 3"
            layout="fill"
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl text-center">
        We believe that food brings people together. Share your favorite recipes, discover new cooking techniques, and connect with others who share your passion for food!
      </p>
    </div>
  );
}

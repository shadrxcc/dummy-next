import UpcomingCard from "@/upcomingcard";
import Image from "next/image";

const About = () => {
  return (
    <div className="p-8 bg-white border space-y-16">
      <div className="space-y-4">
        <div className="flex items-center gap-x-2">
          <h1 className="text-3xl font-semibold text-[#2A2A2A]">
            Welcome Henrietta!
          </h1>
          <Image src="/assets/wave.png" width={30} height={30} />
        </div>

        <p className="text-lg font-semibold text-[#808080]">
          You have 2 upcoming sessions
        </p>
      </div>

      <div className=" space-y-4">
        <h3 className="text-2xl font-semibold">Upcoming sessions</h3>
        <div className="flex">
          <UpcomingCard />
          <Image src="/assets/Calendar.png" width={349} height={357} />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">
            Top mentors suggestion for you
          </h3>
          <p className="text-lg font-medium">View All</p>
        </div>

        <div className="flex gap-[48px] justify-between">
          <Image src="/assets/mentor1.png" width={298} height={371} />
          <Image src="/assets/mentor2.png" width={298} height={371} />
          <Image src="/assets/mentor3.png" width={298} height={371} />
        </div>
      </div>
    </div>
  );
};

export default About;

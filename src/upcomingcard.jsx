import Image from "next/image";

export default function UpcomingCard() {
  return (
    <div className="card-container">
      <div className="flex card">
      <div>
        <Image src="/assets/image1.png" width={77} height={77} />
      </div>

      <div className="text-base center flex flex-col gap-y-3">
        <p className="text-base font-semibold">
          Mentor session with{" "}
          <span className="text-[#008080]">Patricia Flow</span>
        </p>
        <p className="text-[#565656] ">Time: 4pm (WAT)</p>
        <p>Meeting link: https://meet.mentorme.com/azv-bspc-fyb</p>
        <div className="flex btn-wrapper gap-x-6">
          <button id="btn1">Reschedule Session</button>
          <button id="btn2">Set Reminder</button>
        </div>
      </div>

      <div className="bg-[#F0F0F0] flex flex-col items-center">
        <p>06</p>
        <p>Sept</p>
      </div>
    </div>  

    <div className="flex card">
      <div>
        <Image src="/assets/image2.png" width={77} height={77} />
      </div>

      <div className="text-base center flex flex-col gap-y-3">
        <p className="text-base font-semibold">
          Mentor session with{" "}
          <span className="text-[#008080]">Shao Lin</span>
        </p>
        <p className="text-[#565656] ">Time: 4pm (WAT)</p>
        <p>Meeting link: https://meet.mentorme.com/azv-bspc-fyb</p>
        <div className="flex btn-wrapper gap-x-6">
          <button id="btn1">Reschedule Session</button>
          <button id="btn2">Set Reminder</button>
        </div>
      </div>

      <div className="bg-[#F0F0F0] flex flex-col items-center">
        <p>06</p>
        <p>Sept</p>
      </div>
    </div>
    </div>
    
  );
}

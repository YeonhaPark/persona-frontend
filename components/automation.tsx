import { Button } from "./ui/button";

export default function Automation() {
  return (
    <section className="p-6 bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[30%] border border-gray-200 rounded-lg px-6">
      <h1 className="text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
        Automation
      </h1>
      <div>
        <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit">
          <div>
            <div className="bg-green-500 w-[20px] h-[20px] rounded-full font-semibold flex justify-center items-center"></div>
          </div>
          <div className="px-2">
            <h3 className="text-gray-700 font-bold">APY Aut Optimization</h3>
            <p className="text-gray-500">
              Redistribute When Falls below 8%
            </p>{" "}
          </div>
          <div>
            <div className="bg-green-500 w-[40px] h-[40px] rounded-full text-white font-semibold flex justify-center items-center">
              ON
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit">
          <div>
            <div className="bg-indigo-500 w-[20px] h-[20px] rounded-full font-semibold flex justify-center items-center"></div>
          </div>
          <div className="px-2">
            <h3 className="text-gray-700 font-bold">NFT Price Notification</h3>
            <p className="text-gray-500">
              Collection X Bottom Price Less than 1.2 ETH
            </p>{" "}
          </div>
          <div>
            <div className="bg-indigo-500 w-[40px] h-[40px] rounded-full text-white font-semibold flex justify-center items-center">
              ON
            </div>
          </div>
        </div>
      </div>
      <Button className="mt-4" variant="outline">
        + Add New Automation Rule
      </Button>
    </section>
  );
}

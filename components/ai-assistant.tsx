import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AIAssistant() {
  return (
    <section className="flex flex-col w-[40%] border border-gray-200 rounded-lg p-6 my-6">
      <div className="bg-indigo-500 rounded-lg px-4 py-2">
        <h1 className="text-xl font-bold text-white">AI Assistant</h1>
      </div>

      <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit mr-12">
        <p>
          안녕하세요! 당신의 Explorer 페르소나에 맞는 새로운 DeFi 기회를
          찾아볼까요?
        </p>
      </div>
      <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-indigo-100 rounded-xl p-4 border border-indigo-200 w-fit ml-12">
        <p>네, 최근에 Arbitrum 체인에서 APY가 높은 프로토콜을 찾고 있어요.</p>
      </div>
      <div className="mt-auto">
        <div className="mt-10 flex items-center">
          <Input className="w-full " placeholder="Ask me anything..." />
          <Button variant="purple">
            <ArrowUp />
          </Button>
        </div>
      </div>
    </section>
  );
}

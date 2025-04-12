"use client";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
// import { usePersonaData } from "@/hooks/usePersonaData";
import { formatTimeAgo } from "@/utils/dateFormat";

// import { type ChartConfig } from "@/components/ui/chart";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import PersonaHistory from "@/components/persona-history";
// import { PersonaData, UsePersonaDataReturn } from "@/types";
import { dummyPersonaData } from "@/utils/dummyData";
// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig;

export default function Persona() {
  const { primaryWallet } = useDynamicContext();
  const [spinning, setSpinning] = useState<"idle" | "slow" | "fast">("idle");

  const handleRefresh = async () => {
    setSpinning("slow"); // 시작: 천천히 회전
    // await updateFetch(); // 데이터 fetch
    setSpinning("fast"); // 끝에 빠르게 돌기

    setTimeout(() => {
      setSpinning("idle"); // 회전 멈춤
    }, 500); // 마지막 빠르게 한 바퀴 돌고 정지
  };
  // const router = useRouter();
  // const { data, isLoading, error, updateFetch }: UsePersonaDataReturn =
  //   usePersonaData(primaryWallet?.address);
  const data = dummyPersonaData;
  // useEffect(() => {
  //   if (primaryWallet?.address) {
  //     router.push("/");
  //   }
  // }, [primaryWallet?.address]);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold p-6 text-gray-700">
            Persona Analysis
          </h1>
          <p className="text-gray-500 px-6 mb-4">
            On-chain Activity Analysis for{" "}
            {`${primaryWallet?.address.slice(0, 4)}...`}
          </p>
        </div>
        <div className="text-gray-500 p-6 text-sm">
          <div className=" flex gap-2 items-center">
            <RefreshCw
              size={16}
              onClick={handleRefresh}
              className={`
          transition-transform duration-700
          ${
            spinning === "slow"
              ? "animate-spin-slow"
              : spinning === "fast"
              ? "animate-spin-fast"
              : ""
          }
          cursor-pointer
        `}
            />
            {`Last Updated at ${formatTimeAgo("2025-04-12 01:07:16")}`}
          </div>
        </div>
      </div>
      <div className="">
        <section className="px-6">
          <div className="rounded-lg flex justify-around bg-slate-100 border border-gray-200 p-4">
            {theme.map((el) => (
              <Card type={el.type} color={el.color} key={el.type} />
            ))}
          </div>
        </section>
      </div>
      <div className="border border-gray-200 rounded-lg m-6 p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Persona Detailed Index
        </h2>
        <div className="flex gap-8">
          <section className="w-1/2">
            <div className="flex flex-col">
              <div>
                <h4 className="text-lg font-bold mt-4 mb-3 text-blue-500">
                  Explorer ({data?.wallet.explorer_score} / 10)
                </h4>
                <Progress
                  value={data?.wallet.explorer_score * 10}
                  indicatorClassName="bg-blue-500"
                  className="bg-blue-100"
                />
                <div className="flex flex-col gap-1 mt-2 text-sm">
                  <p>
                    Number of chains: {data?.wallet.distinct_contract_count}개
                    (Top{" "}
                    {100 -
                      (data?.wallet.distinct_contract_count_percentile || 0)}
                    %)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="text-lg font-bold mt-4 mb-3  text-rose-500">
                  Diamond Hands ({data?.wallet.diamond_score} / 10)
                </h4>
                <Progress
                  value={data?.wallet.diamond_score * 10}
                  indicatorClassName="bg-rose-400"
                  className="bg-rose-100"
                />
                <div className="flex flex-col gap-1 mt-2 text-sm">
                  <p>
                    Average Token Holding Period: {data.wallet.dex_volume_usd}{" "}
                    dollars (Top {1 - data.wallet.dex_volume_usd_percentile}%)
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-1/2">
            <div className="flex flex-col">
              <div>
                <h4 className="text-lg font-bold mt-4 mb-3 text-yellow-500">
                  Whale ({data?.wallet.diamond_score} / 10)
                </h4>
                <Progress
                  value={data?.wallet.diamond_score * 10}
                  indicatorClassName="bg-yellow-500"
                  className="bg-yellow-100"
                />
                <div className="flex flex-col gap-1 mt-2 text-sm">
                  <p>
                    Average Token Holding Period:{" "}
                    {data.wallet.avg_token_holding_period} days (상위{" "}
                    {1 - data.wallet.avg_token_holding_period_percentile}%)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="text-lg font-bold mt-4 mb-3 text-pink-500">
                  Degen ({data?.wallet.degen_score} / 10)
                </h4>
                <Progress
                  value={data?.wallet.degen_score * 10}
                  indicatorClassName="bg-pink-500"
                  className="bg-pink-100"
                />
                <div className="flex flex-col gap-1 mt-2 text-sm text-pink-500">
                  <p>
                    Transaction Frequency: {data.wallet.transaction_frequency}{" "}
                    (Top {1 - data.wallet.transaction_frequency_percentile}%)
                  </p>
                  <p>
                    Diversity of DEX Platforms:{" "}
                    {data.wallet.dex_platform_diversity} (Top{" "}
                    {1 - data.wallet.dex_platform_diversity_percentile}%)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <PersonaHistory />
      </div>
    </div>
  );
}

const theme: {
  type: "Explorer" | "Diamond Hands" | "Whale" | "Degen";
  color: string;
}[] = [
  { type: "Explorer", color: "blue" },
  { type: "Diamond Hands", color: "rose" },
  { type: "Whale", color: "yellow" },
  { type: "Degen", color: "pink" },
];

function Card({
  type,
  color,
}: {
  type: "Explorer" | "Diamond Hands" | "Whale" | "Degen";
  color: string;
}) {
  return (
    <div
      className={cn("rounded-lg w-[180px] h-[90px]", {
        "bg-blue-100": color === "blue",
        "bg-rose-100": color === "rose",
        "bg-yellow-100": color === "yellow",
        "bg-pink-100": color === "pink",
      })}
    >
      <div
        className={cn("flex flex-col items-center justify-center h-full", {
          "text-blue-500": color === "blue",
          "text-rose-500": color === "rose",
          "text-yellow-500": color === "yellow",
          "text-pink-500": color === "pink",
        })}
      >
        <div className="text-lg font-semibold">{type}</div>
        <div>8.7 / 10</div>
      </div>
    </div>
  );
}

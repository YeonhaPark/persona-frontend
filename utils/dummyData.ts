import { PersonaData } from "@/types";

export const dummyPersonaData: PersonaData = {
  wallet: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    balance: 6.24e18,
    distinct_contract_count: 9, // 사용한 체인 수
    dex_platform_diversity: 2, // 사용한 프로토콜 수
    avg_token_holding_period: 292.81, // 평균 토큰 보유 기간
    transaction_frequency: 1.95, // 트랜잭션 빈도
    dex_volume_usd: 17426451.01, // 거래량
    nft_collections_diversity: 25, // 사용한 NFT 컬렉션 수
    explorer_score: 3.3,
    diamond_score: 3.6,
    whale_score: 4.4,
    degen_score: 3.5,
    distinct_contract_count_percentile: 20.3, // Explorer (사용 체인 수 상위 80%)
    dex_platform_diversity_percentile: 29.9, // Degen 상위 70% (플랫폼 다양성 상위)
    avg_token_holding_period_percentile: 30.9, // Diamond Hands(평균 토큰 홀딩 기간 상위 30.9%)
    transaction_frequency_percentile: 30.7, // Degen (transaction 빈도 상위 30.7%)
    dex_volume_usd_percentile: 48.8, // Whale (상위 거래량 )
    nft_collections_diversity_percentile: 53.4, // Explorer (?)
    created_at: "2025-04-12 01:07:16",
    updated_at: "2025-04-12 01:07:16",
  },
};

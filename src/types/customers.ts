export type CustomerStats = {
  stats: string;
  title: string;
  trendStat: number;
  trendDir: "up" | "down";
};

export type Customer = {
  id: number;
  plan: string;
  date: string;
  name: string;
  email: string;
  amount: number;
  avatar: string;
};

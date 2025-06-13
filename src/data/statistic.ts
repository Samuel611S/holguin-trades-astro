export interface Statistic {
  id: string;
  label: string;
  value: number | string;
  unit: string;
  period?: string;
  display_format: string;
  last_updated: string;
}

export interface SubService {
  id: string;
  name: string;
  statistics: Statistic[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  statistics?: Statistic[];
  sub_services?: SubService[];
}

export interface StatisticsData {
  services: Service[];
  last_updated_file: string;
}

export const statisticsData: StatisticsData = {
  services: [], // All previous services removed
  last_updated_file: "2025-06-02T14:13:05Z"
};

import summaryData from './sell_Put_Weekly_Summary_Total.json';

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

// Helper function to format percentages to one decimal place
const formatPercentage = (value: string | number | undefined): string => {
  if (typeof value === 'string') {
    const num = parseFloat(value.replace('%', ''));
    return isNaN(num) ? "N/A" : num.toFixed(1) + '%';
  }
  if (typeof value === 'number') {
    return value.toFixed(1) + '%';
  }
  return "N/A";
};

// Find the relevant rows from the summary data
const totalRow = summaryData.find(row => row.Option_Contract_Weekly_Expiration_Date_Unix_Time === "Total:");
const averageRow = summaryData.find(row => row.Option_Contract_Weekly_Expiration_Date_Unix_Time === "Average:");

// Extract and format the values
const totalCompletedTrades = totalRow?.Total_Number_Of_Trades_Net_Of_Will_Roll || "N/A";
const winRate = formatPercentage(averageRow?.SuccessPercent);
const avgAnnualizedReturn = formatPercentage(averageRow?.average_Annualized_Weekly_Compounded_Gain_in_Percent);
const spyAvgAnnualizedReturn = formatPercentage(averageRow?.SPY_Year_To_Date_Gain_Percent);


export const statisticsData: StatisticsData = {
  services: [
    {
      id: "recent-trading-signal-metrics",
      name: "Recent Trading Signal Metrics",
      description: "Comprehensive overview of our strategy's performance based on the latest data.",
      statistics: [
        {
          id: "total-completed-trades",
          label: "Total Completed Trades",
          value: totalCompletedTrades,
          unit: "",
          period: "Number of trades executed and closed by the system in the past 12 months.",
          display_format: "number",
          last_updated: new Date().toISOString()
        },
        {
          id: "win-rate",
          label: "Win Rate",
          value: winRate,
          unit: "", // Unit already included in value, as per formatPercentage
          period: "The percentage of trades that closed profitably.",
          display_format: "percentage",
          last_updated: new Date().toISOString()
        },
        {
          id: "avg-annualized-return",
          label: "Avg. Annualized Return",
          value: avgAnnualizedReturn,
          unit: "", // Unit already included in value, as per formatPercentage
          period: "The average compounded yearly return, based on weekly performance.",
          display_format: "percentage",
          last_updated: new Date().toISOString()
        },
        {
          id: "spy-avg-annualized-return",
          label: "SPY Avg. Annualized Return",
          value: spyAvgAnnualizedReturn,
          unit: "", // Unit already included in value, as per formatPercentage
          period: "The average return of the S&P 500 (SPY) over the same 9-month period for comparison.",
          display_format: "percentage",
          last_updated: new Date().toISOString()
        }
      ]
    }
  ],
  last_updated_file: new Date().toISOString() // Update this timestamp
};
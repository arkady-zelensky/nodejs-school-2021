export const weeklyReportPDFTemplate = (
  dateFrom: Date,
  dateTo: Date,
  totalNumber: number
) => `
  <div>Date from: ${dateFrom}</div>
  <div>Date to: ${dateTo}</div>
  <div>Total number: ${totalNumber}</div>
`;

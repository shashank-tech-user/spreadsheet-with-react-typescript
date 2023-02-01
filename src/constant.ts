import { CompsColumnData, CompsSheetData } from "./sheetData/compsData";
import { SalesSheetData, SalesSheetColumn } from "./sheetData/salesData";
import { SalesSheetCellStyle } from "./styles/sales_style";

export const locale = 'en-US';
export const currencyMast = {
  style: 'currency',
  currency: 'USD'
}
export const RowsIndex = [8, 16, 24, 32, 36, 37];
export const ColsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const HeadingColumnIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const CompsRowsIndex = [9, 17, 25, 33, 37, 38];
export const CompsColsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const CompsHeadingColumnIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const data = [{
  worksheetName: 'Sales',
  minDimensions: [10, 40],
  freezeRows: 1,
  style: SalesSheetCellStyle,
  data: SalesSheetData,
  columns: SalesSheetColumn,
  locked: new Date("2023-01-01").getMonth() !== new Date().getMonth(),
}, {
  worksheetName: 'Comps',
  minDimensions: [10, 40],
  freezeRow: 3,
  freezeColumns: 3,
  data: CompsSheetData,
  columns: CompsColumnData
}]
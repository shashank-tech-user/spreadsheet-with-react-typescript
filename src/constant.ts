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
// export let dateMask = 'dd/mm/yyyy';

export const data = [{
  worksheetName: 'Sales',
  minDimensions: [10, 2],
  freezeRows: 1,
  style: SalesSheetCellStyle,
  // locked: true,
  data: SalesSheetData,
  columns: SalesSheetColumn
}, {
  worksheetName: 'Comps',
  minDimensions: [10, 2],
  data: CompsSheetData,
  freezeColumns: 3,
  // data: [[90, 60, 80, '=SUM(A1:C1,Sales!B1)'], [800, 900, 7800, '=SUM(A2:C2,Sales!B2)']],
  columns: CompsColumnData
}]
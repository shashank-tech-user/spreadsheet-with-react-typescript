import {
  ColsIndex,
  RowsIndex,
  CompsColsIndex,
  CompsRowsIndex
} from "./constant";

export function useReadonlyHooks() {
  function readonlySales(
    worksheet: { getWorksheetName: () => string; },
    cell: { classList: { add: (arg0: string) => void; }; },
    col: number,
    row: number
  ) {
    if (worksheet.getWorksheetName() === 'SALES') {
      if (row === 0) {
        cell.classList.add('readonly');
        return;
      }

      if (RowsIndex.includes(row) && ColsIndex.includes(col)) {
        cell.classList.add('readonly');
        return;
      }
    }
  }

  function readonlyComps(
    worksheet: { getWorksheetName: () => string; },
    cell: { classList: { add: (arg0: string) => void; }; },
    col: number,
    row: number
  ) {
    if (worksheet.getWorksheetName() === 'COMPS') {
      if (row === 0 || row === 1) {
        cell.classList.add('readonly');
        return;
      }

      if (CompsRowsIndex.includes(row)) {
        cell.classList.add('readonly');
        return;
      }
    }
  }

  return {
    readonlySales,
    readonlyComps
  }
}
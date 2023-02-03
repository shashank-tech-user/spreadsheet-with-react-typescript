import { ColsIndex, RowsIndex, CompsRowsIndex } from "./constant";

export function useReadonlyHooks() {
  function readonlyData(
    worksheet: any,
    cell: HTMLElement,
    col: number,
    row: number
  ) {
    switch (worksheet.getWorksheetName()) {
      case 'SALES': {
        if (row === 0) {
          cell.classList.add('readonly');
          return;
        }
        if (RowsIndex.includes(row) && ColsIndex.includes(col)) {
          cell.classList.add('readonly');
          return;
        }
        return;
      }
      case 'COMPS': {
        if (row === 0 || row === 1) {
          cell.classList.add('readonly');
          return;
        }
        if (CompsRowsIndex.includes(row)) {
          cell.classList.add('readonly');
          return;
        }
        return;
      }
      default:
        break;
    }
  }

  return {
    readonlyData
  }
}
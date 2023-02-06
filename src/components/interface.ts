export interface MonthBasedDataProps {
  id: string;
  name: string;
  month: string;
  year: string;
  data: SheetData[];
}

export interface SheetData {
  worksheetName: string;
  minDimensions: number[];
  freezeRows?: number;
  freezeColumns?: number;
  data: (string | number)[][];
  columns: ColumnProps[];
}

export interface ColumnProps {
  type: string | number | boolean;
  readonly?: boolean;
  locale?: string;
  options?: {
    style: string;
    currency: string;
  }
}
export let locale = 'en-US';
export let currencyMast = {
  style: 'currency',
  currency: 'USD'
}
export const RowsIndex = [7, 15, 23, 31, 35, 36];
export const ColsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// export let dateMask = 'dd/mm/yyyy';

export const data = [{
  worksheetName: 'Sales',
  minDimensions: [10, 2],
  style: {
    A8: 'background-color: #FABF8E;',
    A16: 'background-color: #FABF8E;',
    A24: 'background-color: #FABF8E;',
    A32: 'background-color: #FABF8E;',
    A36: 'background-color: #FABF8E;',
    A37: 'background-color: #FABF8E;',
    B8: 'background-color: #FABF8E;',
    B16: 'background-color: #FABF8E;',
    B24: 'background-color: #FABF8E;',
    B32: 'background-color: #FABF8E;',
    B36: 'background-color: #FABF8E;',
    B37: 'background-color: #FABF8E;',
    C8: 'background-color: #FABF8E;',
    C16: 'background-color: #FABF8E;',
    C24: 'background-color: #FABF8E;',
    C32: 'background-color: #FABF8E;',
    C36: 'background-color: #FABF8E;',
    C37: 'background-color: #FABF8E;',
    D8: 'background-color: #FABF8E;',
    D16: 'background-color: #FABF8E;',
    D24: 'background-color: #FABF8E;',
    D32: 'background-color: #FABF8E;',
    D36: 'background-color: #FABF8E;',
    D37: 'background-color: #FABF8E;',
    E8: 'background-color: #FABF8E;',
    E16: 'background-color: #FABF8E;',
    E24: 'background-color: #FABF8E;',
    E32: 'background-color: #FABF8E;',
    E36: 'background-color: #FABF8E;',
    E37: 'background-color: #FABF8E;',
    F8: 'background-color: #FABF8E;',
    F16: 'background-color: #FABF8E;',
    F24: 'background-color: #FABF8E;',
    F32: 'background-color: #FABF8E;',
    F36: 'background-color: #FABF8E;',
    F37: 'background-color: #FABF8E;',
    G8: 'background-color: #FABF8E;',
    G16: 'background-color: #FABF8E;',
    G24: 'background-color: #FABF8E;',
    G32: 'background-color: #FABF8E;',
    G36: 'background-color: #FABF8E;',
    G37: 'background-color: #FABF8E;',
    H8: 'background-color: #FABF8E;',
    H16: 'background-color: #FABF8E;',
    H24: 'background-color: #FABF8E;',
    H32: 'background-color: #FABF8E;',
    H36: 'background-color: #FABF8E;',
    H37: 'background-color: #FABF8E;',
    I8: 'background-color: #FABF8E;',
    I16: 'background-color: #FABF8E;',
    I24: 'background-color: #FABF8E;',
    I32: 'background-color: #FABF8E;',
    I36: 'background-color: #FABF8E;',
    I37: 'background-color: #FABF8E;',
  },
  // locked: true,
  data: [
    ['01-01-2023', '=SUM(C1:I1)', 20, 0, 0, 0, 0, 0, 0],
    ['02-01-2023', '=SUM(C2:I2)', 300, 310, 100, 50, 20, 30, 0],
    ['03-01-2023', '=SUM(C3:I3)', 390, 310, 100, 50, 20, 30, 0],
    ['04-01-2023', '=SUM(C4:I4)', 300, 310, 100, 50, 20, 30, 0],
    ['05-01-2023', '=SUM(C5:I5)', 300, 310, 100, 50, 20, 30, 0],
    ['06-01-2023', '=SUM(C6:I6)', 300, 310, 100, 50, 20, 30, 0],
    ['07-01-2023', '=SUM(C7:I7)', 300, 310, 100, 50, 20, 30, 0],
    ['Week-1', '=SUM(B1:B7)', '=SUM(C1:C7)', '=SUM(D1:D7)', '=SUM(E1:E7)', '=SUM(F1:F7)', '=SUM(G1:G7)', '=SUM(H1:H7)', '=SUM(I1:I7)'],
    ['08-01-2023', '=SUM(C9:I9)', 300, 310, 100, 50, 20, 30, 0],
    ['09-01-2023', '=SUM(C10:I10)', 300, 310, 100, 50, 20, 30, 0],
    ['10-01-2023', '=SUM(C11:I11)', 300, 310, 100, 50, 20, 30, 0],
    ['11-01-2023', '=SUM(C12:I12)', 300, 310, 100, 50, 20, 30, 0],
    ['12-01-2023', '=SUM(C13:I13)', 300, 310, 100, 50, 20, 30, 0],
    ['13-01-2023', '=SUM(C14:I14)', 300, 310, 100, 50, 20, 30, 0],
    ['14-01-2023', '=SUM(C15:I15)', 300, 310, 100, 50, 20, 30, 0],
    ['Week-2', '=SUM(B9:B15)', '=SUM(C9:C15)', '=SUM(D9:D15)', '=SUM(E9:E15)', '=SUM(F9:F15)', '=SUM(G9:G15)', '=SUM(H9:H15)', '=SUM(I9:I15)'],
    ['15-01-2023', '=SUM(C17:I17)', 300, 310, 100, 50, 20, 30, 0],
    ['16-01-2023', '=SUM(C18:I18)', 300, 310, 100, 50, 20, 30, 0],
    ['17-01-2023', '=SUM(C19:I19)', 300, 310, 100, 50, 20, 30, 0],
    ['18-01-2023', '=SUM(C20:I20)', 300, 310, 100, 50, 20, 30, 0],
    ['19-01-2023', '=SUM(C21:I21)', 300, 310, 100, 50, 20, 30, 0],
    ['20-01-2023', '=SUM(C22:I22)', 300, 310, 100, 50, 20, 30, 0],
    ['21-01-2023', '=SUM(C23:I23)', 300, 310, 100, 50, 20, 30, 0],
    ['Week-3', '=SUM(B17:B23)', '=SUM(C17:C23)', '=SUM(D17:D23)', '=SUM(E17:E23)', '=SUM(F17:F23)', '=SUM(G17:G23)', '=SUM(H17:H23)', '=SUM(I17:I23)'],
    ['22-01-2023', '=SUM(C25:I25)', 300, 310, 100, 50, 20, 30, 0],
    ['23-01-2023', '=SUM(C26:I26)', 300, 310, 100, 50, 20, 30, 0],
    ['24-01-2023', '=SUM(C27:I27)', 300, 310, 100, 50, 20, 30, 0],
    ['25-01-2023', '=SUM(C28:I28)', 300, 310, 100, 50, 20, 30, 0],
    ['26-01-2023', '=SUM(C29:I29)', 300, 310, 100, 50, 20, 30, 0],
    ['27-01-2023', '=SUM(C30:I30)', 300, 310, 100, 50, 20, 30, 0],
    ['28-01-2023', '=SUM(C31:I31)', 300, 310, 100, 50, 20, 30, 0],
    ['Week-4', '=SUM(B25:B31)', '=SUM(C25:C31)', '=SUM(D25:D31)', '=SUM(E25:E31)', '=SUM(F25:F31)', '=SUM(G25:G31)', '=SUM(H25:H31)', '=SUM(I25:I31)'],
    ['29-01-2023', '=SUM(C33:I33)', 300, 310, 100, 50, 20, 30, 0],
    ['30-01-2023', '=SUM(C34:I34)', 300, 310, 100, 50, 20, 30, 0],
    ['31-01-2023', '=SUM(C35:I35)', 300, 310, 100, 50, 20, 30, 0],
    ['Week-5', '=SUM(B33:B35)', '=SUM(C33:C35)', '=SUM(D33:D35)', '=SUM(E33:E35)', '=SUM(F33:F35)', '=SUM(G33:G35)', '=SUM(H33:H35)', '=SUM(I33:I35)'],
    ['Total', '=SUM(B8,B16,B24,B32,B36)', '=SUM(C8,C16,C24,C32,C36)', '=SUM(D8,D16,D24,D32,D36)', '=SUM(E8,E16,E24,E32,E36)', '=SUM(F8,F16,F24,F32,F36)', '=SUM(G8,G16,G24,G32,G36)', '=SUM(H8,H16,H24,H32,H36)', '=SUM(I8,I16,I24,I32,I36)'],
  ],
  columns: [
    {
      type: 'string',
      // mask: dateMask,
      title: "Date"
    },
    {
      type: "number",
      title: "Total Sales",
      locale: locale,
      options: currencyMast,
      readOnly: true
    },
    {
      type: "number",
      title: "Food",
      locale: locale,
      options: currencyMast
    },
    {
      type: "number",
      title: "Liquor",
      locale: locale,
      options: currencyMast
    },
    {
      type: "number",
      title: "Beer",
      locale: locale,
      options: currencyMast
    },
    {
      type: "number",
      title: "Wine",
      locale: locale,
      options: currencyMast
    },
    {
      type: "number",
      title: "N/A Bev",
      locale: locale,
      options: currencyMast
    },
    {
      type: "number",
      title: "MDSE",
      locale: locale,
      options: currencyMast
    },
    {
      type: "number",
      title: "GIFT CERT",
      locale: locale,
      options: currencyMast
    }
  ]
}, {
  worksheetName: 'Comps',
  minDimensions: [10, 2],
  data: [[90, 60, 80, '=SUM(A1:C1,Sales!B1)'], [800, 900, 7800, '=SUM(A2:C2,Sales!B2)']]
}]
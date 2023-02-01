const locale = 'en-US';
const currencyMast = {
  style: 'currency',
  currency: 'USD'
}

export const SalesSheetData = [
  ['', 'Total Sales', 'Food', 'Liquor', 'Beer', 'Wine', 'N/A Bev', 'MDSE', 'GIFT CERT'],
  ['01-01-2023', '=SUM(C2:I2)', 0, 0, 0, 0, 0, 0, 0],
  ['02-01-2023', '=SUM(C3:I3)', 0, 0, 0, 0, 0, 0, 0],
  ['03-01-2023', '=SUM(C4:I4)', 0, 0, 0, 0, 0, 0, 0],
  ['04-01-2023', '=SUM(C5:I5)', 0, 0, 0, 0, 0, 0, 0],
  ['05-01-2023', '=SUM(C6:I6)', 0, 0, 0, 0, 0, 0, 0],
  ['06-01-2023', '=SUM(C7:I7)', 0, 0, 0, 0, 0, 0, 0],
  ['07-01-2023', '=SUM(C8:I8)', 0, 0, 0, 0, 0, 0, 0],
  ['Week-1', '=SUM(B2:B8)', '=SUM(C2:C8)', '=SUM(D2:D8)', '=SUM(E2:E8)', '=SUM(F2:F8)', '=SUM(G2:G8)', '=SUM(H2:H8)', '=SUM(I2:I8)'],
  ['08-02-2023', '=SUM(C10:I10)', 0, 0, 0, 0, 0, 0, 0],
  ['09-01-2023', '=SUM(C11:I11)', 0, 0, 0, 0, 0, 0, 0],
  ['10-01-2023', '=SUM(C12:I12)', 0, 0, 0, 0, 0, 0, 0],
  ['11-01-2023', '=SUM(C13:I13)', 0, 0, 0, 0, 0, 0, 0],
  ['12-01-2023', '=SUM(C14:I14)', 0, 0, 0, 0, 0, 0, 0],
  ['13-01-2023', '=SUM(C15:I15)', 0, 0, 0, 0, 0, 0, 0],
  ['14-01-2023', '=SUM(C16:I16)', 0, 0, 0, 0, 0, 0, 0],
  ['Week-2', '=SUM(B10:B16)', '=SUM(C10:C16)', '=SUM(D10:D16)', '=SUM(E10:E16)', '=SUM(F10:F16)', '=SUM(G10:G16)', '=SUM(H10:H16)', '=SUM(I10:I16)'],
  ['15-01-2023', '=SUM(C18:I18)', 0, 0, 0, 0, 0, 0, 0],
  ['16-01-2023', '=SUM(C19:I19)', 0, 0, 0, 0, 0, 0, 0],
  ['17-01-2023', '=SUM(C20:I20)', 0, 0, 0, 0, 0, 0, 0],
  ['18-01-2023', '=SUM(C21:I21)', 0, 0, 0, 0, 0, 0, 0],
  ['19-01-2023', '=SUM(C22:I22)', 0, 0, 0, 0, 0, 0, 0],
  ['20-01-2023', '=SUM(C23:I23)', 0, 0, 0, 0, 0, 0, 0],
  ['21-01-2023', '=SUM(C24:I24)', 0, 0, 0, 0, 0, 0, 0],
  ['Week-3', '=SUM(B18:B24)', '=SUM(C18:C24)', '=SUM(D18:D24)', '=SUM(E18:E24)', '=SUM(F18:F24)', '=SUM(G18:G24)', '=SUM(H18:H24)', '=SUM(I18:I24)'],
  ['22-01-2023', '=SUM(C26:I26)', 0, 0, 0, 0, 0, 0, 0],
  ['23-01-2023', '=SUM(C27:I27)', 0, 0, 0, 0, 0, 0, 0],
  ['24-01-2023', '=SUM(C28:I28)', 0, 0, 0, 0, 0, 0, 0],
  ['25-01-2023', '=SUM(C29:I29)', 0, 0, 0, 0, 0, 0, 0],
  ['26-01-2023', '=SUM(C30:I30)', 0, 0, 0, 0, 0, 0, 0],
  ['27-01-2023', '=SUM(C31:I31)', 0, 0, 0, 0, 0, 0, 0],
  ['28-01-2023', '=SUM(C32:I32)', 0, 0, 0, 0, 0, 0, 0],
  ['Week-4', '=SUM(B26:B32)', '=SUM(C26:C32)', '=SUM(D26:D32)', '=SUM(E26:E32)', '=SUM(F26:F32)', '=SUM(G26:G32)', '=SUM(H26:H32)', '=SUM(I26:I32)'],
  ['29-01-2023', '=SUM(C34:I34)', 0, 0, 0, 0, 0, 0, 0],
  ['30-01-2023', '=SUM(C35:I35)', 0, 0, 0, 0, 0, 0, 0],
  ['31-01-2023', '=SUM(C36:I36)', 0, 0, 0, 0, 0, 0, 0],
  ['Week-5', '=SUM(B34:B36)', '=SUM(C34:C36)', '=SUM(D34:D36)', '=SUM(E34:E36)', '=SUM(F34:F36)', '=SUM(G34:G36)', '=SUM(H34:H36)', '=SUM(I34:I36)'],
  ['Total', '=SUM(B9,B17,B25,B33,B37)', '=SUM(C9,C17,C25,C33,C37)', '=SUM(D9,D17,D25,D33,D37)', '=SUM(E9,E17,E25,E33,E37)', '=SUM(F9,F17,F25,F33,F37)', '=SUM(G9,G17,G25,G33,G37)', '=SUM(H9,H17,H25,H33,H37)', '=SUM(I9,I17,I25,I33,I37)']
];

export const SalesSheetColumn = [
  {
    type: 'string',
    readonly: true
  },
  {
    type: "text",
    locale: locale,
    options: currencyMast,
    readonly: true
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  },
  {
    type: "number",
    locale: locale,
    options: currencyMast
  }
];
const locale = 'en-US';
const currencyMask = {
  style: 'currency',
  currency: 'USD'
}

export const CompsSheetData = [
  ['', '', '', 'Grub', '', 'Comp', 'Disc Item', 'Disc Item', 'Discount', 'Discount', '25% Team', '50%', '100%', 'discount %', 'Wc 10%', '', 'Shift', 'LP Server',
    'LP Kitchen', 'LP Breakage', '50%', 'Comp', 'New Misc', 'Bogo', 'HSC', 'GC', 'GC', 'GC', 'Rewards', 'GC', 'KIDS'],
  ['', '', '', 'hub', 'B-DAY', 'Item', '$', '%', 'Check %%', '$ Check', 'Member', 'MGR', 'Training', 'Guest PR', 'Off', '', 'Beer', 'Exec FOH',
    'Exec HOH', 'Exec L/B/W', 'Police/Fire', 'Comp', 'Marketing comps', '50%', '20%', 'Bingo', 'Trivia', 'Slots', 'Points', 'Prize', 'Meal'],
  ['01-02-2023', '=SUM(D3:AE3)', '=SUM(B3/Sales!B2)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['02-02-2023', '=SUM(D4:AE4)', '=SUM(B4/Sales!B3)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['03-02-2023', '=SUM(D5:AE5)', '=SUM(B5/Sales!B4)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['04-02-2023', '=SUM(D6:AE6)', '=SUM(B6/Sales!B5)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['05-02-2023', '=SUM(D7:AE7)', '=SUM(B7/Sales!B6)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['06-02-2023', '=SUM(D8:AE8)', '=SUM(B8/Sales!B7)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['07-02-2023', '=SUM(D9:AE9)', '=SUM(B9/Sales!B8)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['Week-1', '=SUM(D3:D9)', '=(B10/Sales!B9)', '=SUM(D3:D9)', '=SUM(E3:E9)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const CompsColumnData = [
  { type: "string" },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
    mask: '0.00%'
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask
  },
  {
    type: "text",
    // options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  }
]
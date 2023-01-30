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
  ['01-02-2023', '=SUM(D3:AE3)', '=SUM(B3/Sales!B2)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

export const CompsColumnData = [
  { type: "string" },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
    readOnly: true
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
    readOnly: true
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask
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
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  }
]
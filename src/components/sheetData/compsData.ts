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
  ['Week-1', '=SUM(B3:B9)', '=(B10/Sales!B9)', '=SUM(D3:D9)', '=SUM(E3:E9)', '=SUM(F3:F9)', '=SUM(G3:G9)', '=SUM(H3:H9)', '=SUM(I3:I9)', '=SUM(J3:J9)', '=SUM(K3:K9)', '=SUM(L3:L9)', '=SUM(M3:M9)', '=SUM(N3:N9)', '=SUM(O3:O9)', '=SUM(P3:P9)', '=SUM(Q3:Q9)', '=SUM(R3:R9)', '=SUM(S3:S9)', '=SUM(T3:T9)', '=SUM(U3:U9)', '=SUM(V3:V9)', '=SUM(W3:W9)', '=SUM(X3:X9)', '=SUM(Y3:Y9)', '=SUM(Z3:Z9)', '=SUM(AA3:AA9)', '=SUM(AB3:AB9)', '=SUM(AC3:AC9)', '=SUM(AD3:AD9)', '=SUM(AE3:AE9)'],
  ['08-02-2023', '=SUM(D11:AE11)', '=SUM(B11/Sales!B10)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['09-02-2023', '=SUM(D12:AE12)', '=SUM(B12/Sales!B11)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['10-02-2023', '=SUM(D13:AE13)', '=SUM(B13/Sales!B12)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['11-02-2023', '=SUM(D14:AE14)', '=SUM(B14/Sales!B13)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['12-02-2023', '=SUM(D15:AE15)', '=SUM(B15/Sales!B14)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['13-02-2023', '=SUM(D16:AE16)', '=SUM(B16/Sales!B15)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['14-02-2023', '=SUM(D17:AE17)', '=SUM(B17/Sales!B16)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['Week-2', '=SUM(B11:B17)', '=(B11/Sales!B16)', '=SUM(D11:D17)', '=SUM(E11:E17)', '=SUM(F11:F17)', '=SUM(G11:G17)', '=SUM(H11:H17)', '=SUM(I11:I17)', '=SUM(J11:J17)', '=SUM(K11:K17)', '=SUM(L11:L17)', '=SUM(M11:M17)', '=SUM(N11:N17)', '=SUM(O11:O17)', '=SUM(P11:P17)', '=SUM(Q11:Q17)', '=SUM(R11:R17)', '=SUM(S11:S17)', '=SUM(T11:T17)', '=SUM(U11:U17)', '=SUM(V11:V17)', '=SUM(W11:W17)', '=SUM(X11:X17)', '=SUM(Y11:Y17)', '=SUM(Z11:Z17)', '=SUM(AA11:AA17)', '=SUM(AB11:AB17)', '=SUM(AC11:AC17)', '=SUM(AD11:AD17)', '=SUM(AE11:AE17)'],
  ['15-02-2023', '=SUM(D19:AE19)', '=SUM(B19/Sales!B18)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['16-02-2023', '=SUM(D20:AE20)', '=SUM(B20/Sales!B19)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['17-02-2023', '=SUM(D21:AE21)', '=SUM(B21/Sales!B20)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['18-02-2023', '=SUM(D22:AE22)', '=SUM(B22/Sales!B21)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['19-02-2023', '=SUM(D23:AE23)', '=SUM(B23/Sales!B22)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['20-02-2023', '=SUM(D24:AE24)', '=SUM(B24/Sales!B23)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['21-02-2023', '=SUM(D25:AE25)', '=SUM(B25/Sales!B24)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['Week-3', '=SUM(B19:B25)', '=(B19/Sales!B25)', '=SUM(D19:D25)', '=SUM(E19:E25)', '=SUM(F19:F25)', '=SUM(G19:G25)', '=SUM(H19:H25)', '=SUM(I19:I25)', '=SUM(J19:J25)', '=SUM(K19:K25)', '=SUM(L19:L25)', '=SUM(M19:M25)', '=SUM(N19:N25)', '=SUM(O19:O25)', '=SUM(P19:P25)', '=SUM(Q19:Q25)', '=SUM(R19:R25)', '=SUM(S19:S25)', '=SUM(T19:T25)', '=SUM(U19:U25)', '=SUM(V19:V25)', '=SUM(W19:W25)', '=SUM(X19:X25)', '=SUM(Y19:Y25)', '=SUM(Z19:Z25)', '=SUM(AA19:AA25)', '=SUM(AB19:AB25)', '=SUM(AC19:AC25)', '=SUM(AD19:AD25)', '=SUM(AE19:AE25)'],
  ['22-02-2023', '=SUM(D27:AE27)', '=SUM(B27/Sales!B26)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['23-02-2023', '=SUM(D28:AE28)', '=SUM(B28/Sales!B27)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['24-02-2023', '=SUM(D29:AE29)', '=SUM(B29/Sales!B28)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['25-02-2023', '=SUM(D30:AE30)', '=SUM(B30/Sales!B29)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['26-02-2023', '=SUM(D31:AE31)', '=SUM(B31/Sales!B30)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['27-02-2023', '=SUM(D32:AE32)', '=SUM(B32/Sales!B31)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['28-02-2023', '=SUM(D33:AE33)', '=SUM(B33/Sales!B32)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['Week-4', '=SUM(B27:B33)', '=(B27/Sales!B33)', '=SUM(D27:D33)', '=SUM(E27:E33)', '=SUM(F27:F33)', '=SUM(G27:G33)', '=SUM(H27:H33)', '=SUM(I27:I33)', '=SUM(J27:J33)', '=SUM(K27:K33)', '=SUM(L27:L33)', '=SUM(M27:M33)', '=SUM(N27:N33)', '=SUM(O27:O33)', '=SUM(P27:P33)', '=SUM(Q27:Q33)', '=SUM(R27:R33)', '=SUM(S27:S33)', '=SUM(T27:T33)', '=SUM(U27:U33)', '=SUM(V27:V33)', '=SUM(W27:W33)', '=SUM(X27:X33)', '=SUM(Y27:Y33)', '=SUM(Z27:Z33)', '=SUM(AA27:AA33)', '=SUM(AB27:AB33)', '=SUM(AC27:AC33)', '=SUM(AD27:AD33)', '=SUM(AE27:AE33)'],
];

export const CompsColumnData = [
  {
    type: "string",
    readonly: true
  },
  {
    type: "text",
    locale: locale,
    options: currencyMask,
    readonly: true
  },
  {
    type: "text",
    locale: locale,
    options: currencyMask,
    readonly: true,
    mask: '0.00%'
  },
  {
    type: "number",
    locale: locale,
    options: currencyMask,
  },
  {
    type: "text",
    // locale: locale,
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
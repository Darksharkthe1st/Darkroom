export const rolls = [
  { id: 'api-gateway',    letter: 'A' },
  { id: 'auth-service',   letter: 'B' },
  { id: 'payments-core',  letter: 'C' },
  { id: 'ui-components',  letter: 'D' },
]

export const frames = [
  {
    id: 1, roll: 'A', num: '014', state: 'developed',
    sha: 'a3f7c1d',
    message: 'refactor: replace polling with websocket subscriptions',
    stats: { add: 428, del: 192, files: 14 },
    bullet: 'Architected a real-time event system, replacing HTTP polling with WebSocket subscriptions and cutting order-update latency by 80% across 12K concurrent sessions.',
  },
  {
    id: 2, roll: 'A', num: '015', state: 'developed',
    sha: '7d20b9e',
    message: 'perf: batch db writes in ingestion, add backpressure',
    stats: { add: 210, del: 88, files: 7 },
    bullet: 'Redesigned the ingestion pipeline with batched writes and backpressure controls, sustaining 50K events/sec with zero data loss under peak load.',
  },
  {
    id: 3, roll: 'B', num: '006', state: 'developing',
    sha: 'f10aa42',
    message: 'feat: add idempotency keys to payment intents',
  },
  {
    id: 4, roll: 'B', num: '—', state: 'unexposed',
    message: 'chore: bump version to 1.4.2',
  },
  {
    id: 5, roll: 'B', num: '007', state: 'developed',
    sha: 'c8e1f55',
    message: 'feat: oauth2 device flow for CLI auth',
    stats: { add: 612, del: 34, files: 21 },
    bullet: 'Implemented OAuth2 device-authorization flow for the command-line client, enabling secure headless login for 4,000+ CI runners.',
  },
  {
    id: 6, roll: 'C', num: '003', state: 'cut',
    sha: '9b4d077',
    message: 'wip: experiment with redis caching layer',
    bullet: 'Prototyped a Redis caching layer to reduce read load on the primary database.',
  },
  {
    id: 7, roll: 'C', num: '004', state: 'developed',
    sha: '2ef9a10',
    message: 'feat: ledger reconciliation job + alerting',
    stats: { add: 339, del: 51, files: 9 },
    bullet: 'Built a nightly ledger-reconciliation job with anomaly alerting that caught $1.2M in mismatched transactions in its first quarter.',
  },
]

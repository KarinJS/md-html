import neostandard from 'neostandard'

export default neostandard({
  ignores: ['node_modules', 'temp', 'logs', 'data'],
  globals: ['logger', 'NodeJS'],
  ts: true,
})

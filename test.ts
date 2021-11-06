import { resolve } from 'path'

import { transformFile } from '@swc/core'

async function trans () {
  const inputPath = resolve(__dirname, 'example', 'index.js')
  return await transformFile(inputPath)
}

trans().then(console.log)

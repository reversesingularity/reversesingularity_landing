import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(__dirname, '../docs/screenshots')
const url = 'https://reversesingularity.com'

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(4000)

await page.screenshot({ path: path.join(outDir, 'hero.png') })

await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.85))
await page.waitForTimeout(1500)
await page.screenshot({ path: path.join(outDir, 'projects.png') })

await page.screenshot({ path: path.join(outDir, 'full-page.png'), fullPage: true })

await browser.close()
console.log('Screenshots saved to', outDir)

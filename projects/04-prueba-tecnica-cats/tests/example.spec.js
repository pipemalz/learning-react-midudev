// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
let textContent = null
let imageSrc = null

test('app shows random text and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  textContent = await text.textContent()
  imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com')).toBeTruthy()
})

test('The image and text are updated when the button is clicked', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const updateFactBtn = await page.getByRole('button')
  await updateFactBtn.click()

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const newTextContent = await text.textContent()
  const newImageSrc = await image.getAttribute('src')

  await expect(textContent !== newTextContent).toBeTruthy()
  await expect(imageSrc !== newImageSrc).toBeTruthy()
})

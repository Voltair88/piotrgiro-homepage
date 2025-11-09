import { test, expect } from '@playwright/test';

/**
 * Test suite for Swiper component across all portfolio pages
 * Focus: Safari (WebKit) compatibility and direct URL navigation
 */

const PAGES_WITH_SWIPER = [
  { path: '/en/actor', title: 'Actor page' },
  { path: '/en/dancer', title: 'Dancer page' },
  { path: '/en/biography', title: 'Biography page' },
];

test.describe('Swiper Component - Direct URL Navigation', () => {
  for (const page of PAGES_WITH_SWIPER) {
    test(`${page.title} - Swiper loads correctly on direct navigation`, async ({ page: browserPage }) => {
      // Navigate directly to the page (simulating user typing URL)
      await browserPage.goto(page.path, { waitUntil: 'networkidle' });

      // Wait a bit for any delayed initialization (Safari timing issue)
      await browserPage.waitForTimeout(1000);

      // Take screenshot for debugging
      await browserPage.screenshot({
        path: `tests/screenshots/${page.title.replace(' ', '_')}_initial_load.png`,
        fullPage: true
      });

      // Check 1: Swiper container should be visible
      const swiperContainer = browserPage.locator('.swiper');
      await expect(swiperContainer).toBeVisible({ timeout: 5000 });

      // Check 2: At least one slide should be visible
      const slides = browserPage.locator('.swiper-slide');
      await expect(slides.first()).toBeVisible({ timeout: 5000 });

      // Check 3: Images should be loaded (not just alt text)
      const firstImage = slides.first().locator('img');
      await expect(firstImage).toBeVisible();

      // Verify image has loaded by checking natural width
      const imageLoaded = await firstImage.evaluate((img: HTMLImageElement) => {
        return img.naturalWidth > 0 && img.naturalHeight > 0;
      });
      expect(imageLoaded).toBeTruthy();

      // Check 4: Navigation buttons should be present
      const prevButton = browserPage.locator('.swiper-button-prev');
      const nextButton = browserPage.locator('.swiper-button-next');
      await expect(prevButton).toBeVisible();
      await expect(nextButton).toBeVisible();

      // Check 5: Pagination should be present
      const pagination = browserPage.locator('.swiper-pagination');
      await expect(pagination).toBeVisible();

      // Check 6: Multiple slides should exist (verify carousel has content)
      const slideCount = await slides.count();
      expect(slideCount).toBeGreaterThan(1);

      console.log(`✓ ${page.title}: Swiper loaded successfully with ${slideCount} slides`);
    });

    test(`${page.title} - Swiper navigation works`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path, { waitUntil: 'networkidle' });
      await browserPage.waitForTimeout(1000);

      // Get initial active slide
      const activeSlide = browserPage.locator('.swiper-slide-active');
      const initialSlideIndex = await activeSlide.getAttribute('data-swiper-slide-index');

      // Click next button
      const nextButton = browserPage.locator('.swiper-button-next');
      await nextButton.click();

      // Wait for transition
      await browserPage.waitForTimeout(1600); // speed is 1500ms

      // Verify slide changed
      const newActiveSlide = browserPage.locator('.swiper-slide-active');
      const newSlideIndex = await newActiveSlide.getAttribute('data-swiper-slide-index');

      expect(newSlideIndex).not.toBe(initialSlideIndex);

      console.log(`✓ ${page.title}: Navigation working (${initialSlideIndex} -> ${newSlideIndex})`);
    });
  }
});

test.describe('Swiper Component - Autoplay Functionality', () => {
  test('Actor page - Swiper autoplay advances slides', async ({ page: browserPage }) => {
    await browserPage.goto('/en/actor', { waitUntil: 'networkidle' });

    // Get initial active slide
    const getActiveSlideIndex = async () => {
      const activeSlide = browserPage.locator('.swiper-slide-active');
      return await activeSlide.getAttribute('data-swiper-slide-index');
    };

    const initialIndex = await getActiveSlideIndex();

    // Wait for autoplay (delay is 5000ms, but add buffer)
    await browserPage.waitForTimeout(6000);

    const newIndex = await getActiveSlideIndex();

    // Slide should have changed due to autoplay
    expect(newIndex).not.toBe(initialIndex);

    console.log(`✓ Autoplay working: slide changed from ${initialIndex} to ${newIndex}`);
  });
});

test.describe('Swiper Component - Safari-specific Checks', () => {
  test('Actor page - No blank/empty Swiper on initial load', async ({ page: browserPage }) => {
    await browserPage.goto('/en/actor', { waitUntil: 'networkidle' });

    // The specific bug: Swiper is completely blank
    // Check that there's actual content, not just the container

    const swiperContainer = browserPage.locator('.swiper');

    // Get computed styles to ensure it's not just an empty box
    const hasContent = await swiperContainer.evaluate((el) => {
      const images = el.querySelectorAll('img');
      const slides = el.querySelectorAll('.swiper-slide');

      return {
        imageCount: images.length,
        slideCount: slides.length,
        containerWidth: el.offsetWidth,
        containerHeight: el.offsetHeight,
        isVisible: el.offsetParent !== null,
      };
    });

    console.log('Swiper content check:', hasContent);

    expect(hasContent.imageCount).toBeGreaterThan(0);
    expect(hasContent.slideCount).toBeGreaterThan(0);
    expect(hasContent.containerWidth).toBeGreaterThan(0);
    expect(hasContent.containerHeight).toBeGreaterThan(0);
    expect(hasContent.isVisible).toBeTruthy();
  });

  test('Actor page - Images load before Swiper initializes', async ({ page: browserPage }) => {
    // Add listener for image loading
    const imageLoadPromises: Promise<void>[] = [];

    browserPage.on('response', (response) => {
      if (response.url().match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        imageLoadPromises.push(
          response.finished().then(() => {
            console.log(`Image loaded: ${response.url()}`);
          })
        );
      }
    });

    await browserPage.goto('/en/actor', { waitUntil: 'networkidle' });

    // Wait for all images to finish loading
    await Promise.all(imageLoadPromises);

    // Now check that Swiper is properly initialized
    const slides = browserPage.locator('.swiper-slide img');
    const count = await slides.count();

    for (let i = 0; i < count; i++) {
      const img = slides.nth(i);
      const loaded = await img.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0;
      });
      expect(loaded).toBeTruthy();
    }

    console.log(`✓ All ${count} images loaded successfully`);
  });
});

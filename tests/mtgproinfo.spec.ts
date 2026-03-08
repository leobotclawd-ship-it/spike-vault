import { test, expect } from '@playwright/test';

test.describe('MTGProInfo - Light/Dark Mode', () => {
  test('should toggle between light and dark modes', async ({ page }) => {
    await page.goto('/');
    
    // Check initial dark mode (by looking at html class)
    let htmlClass = await page.evaluate(() => document.documentElement.className);
    expect(htmlClass).toContain('dark');

    // Find and click theme toggle button
    const themeToggle = page.getByLabel('Toggle theme');
    await themeToggle.click();

    // Should be in light mode now
    htmlClass = await page.evaluate(() => document.documentElement.className);
    expect(htmlClass).not.toContain('dark');

    // Click again to go back to dark
    await themeToggle.click();
    htmlClass = await page.evaluate(() => document.documentElement.className);
    expect(htmlClass).toContain('dark');
  });

  test('should persist theme preference in localStorage', async ({ page, context }) => {
    await page.goto('/');
    
    // Toggle to light mode
    const themeToggle = page.getByLabel('Toggle theme');
    await themeToggle.click();
    
    // Check localStorage
    const theme = await page.evaluate(() => localStorage.getItem('theme'));
    expect(theme).toBe('light');

    // Reload page and verify it's still light
    await page.reload();
    let htmlClass = await page.evaluate(() => document.documentElement.className);
    expect(htmlClass).not.toContain('dark');
  });
});

test.describe('MTGProInfo - Matchup Matrix', () => {
  test('should load Standard matchup matrix on /format/standard', async ({ page }) => {
    await page.goto('/format/standard');
    
    // Check for matchup matrix
    const matrix = page.locator('table');
    await expect(matrix).toBeVisible();
    
    // Should have headers for Deck, Meta%, WR columns
    const headers = page.locator('th');
    const headerTexts = await headers.allTextContents();
    expect(headerTexts).toContain('Deck');
    expect(headerTexts).toContain('Meta%');
    expect(headerTexts).toContain('WR');
  });

  test('should allow hiding rows by clicking deck name', async ({ page }) => {
    await page.goto('/format/standard');
    
    // Get initial row count
    const rows = page.locator('tbody tr');
    const initialCount = await rows.count();
    
    // Click first deck name to hide it
    const firstDeckName = rows.first().locator('td').first();
    const deckName = await firstDeckName.textContent();
    await firstDeckName.click();
    
    // Row count should decrease
    const newCount = await rows.count();
    expect(newCount).toBeLessThan(initialCount);
  });

  test('should allow resetting hidden decks', async ({ page }) => {
    await page.goto('/format/standard');
    
    // Hide some rows
    const rows = page.locator('tbody tr');
    const initialCount = await rows.count();
    
    await rows.first().locator('td').first().click();
    await rows.nth(1).locator('td').first().click();
    
    let visibleCount = await rows.count();
    expect(visibleCount).toBeLessThan(initialCount);
    
    // Click reset button
    const resetButton = page.getByRole('button', { name: 'Reset' });
    await resetButton.click();
    
    // All rows should be visible again
    visibleCount = await rows.count();
    expect(visibleCount).toBe(initialCount);
  });
});

test.describe('MTGProInfo - Navigation', () => {
  test('should navigate between format pages', async ({ page }) => {
    await page.goto('/');
    
    // Click Standard button
    const standardButton = page.getByRole('link', { name: 'Standard' });
    await standardButton.click();
    
    await expect(page).toHaveURL('/format/standard');
    
    // Click Limited
    const limitedButton = page.getByRole('link', { name: 'Limited' });
    await limitedButton.click();
    
    await expect(page).toHaveURL(/\/format\/limited/);
  });

  test('should have working navigation to schedule', async ({ page }) => {
    await page.goto('/');
    
    const scheduleButton = page.getByRole('link', { name: 'Competitive Schedule' });
    await scheduleButton.click();
    
    await expect(page).toHaveURL('/schedule');
    
    // Schedule should be visible
    const title = page.locator('h1');
    await expect(title).toContainText('Event Schedule');
  });
});

test.describe('MTGProInfo - Home Page', () => {
  test('should display all 8 format squares', async ({ page }) => {
    await page.goto('/');
    
    const formatSquares = page.locator('a[href*="/format/"]');
    const count = await formatSquares.count();
    
    // Should have at least 8 format links
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test('should display upcoming events section', async ({ page }) => {
    await page.goto('/');
    
    const upcomingSection = page.locator('text=Upcoming Major Events');
    await expect(upcomingSection).toBeVisible();
    
    // Should have event cards
    const eventCards = page.locator('a').filter({ hasText: /Pro Tour|Regional|Arena/ });
    const cardCount = await eventCards.count();
    expect(cardCount).toBeGreaterThan(0);
  });
});

test.describe('MTGProInfo - Limited Format', () => {
  test('should load Limited format page with set selector', async ({ page }) => {
    await page.goto('/format/limited');
    
    // Should have set selector buttons
    const setButtons = page.getByRole('button');
    const tmntButton = setButtons.filter({ hasText: 'TMNT' });
    
    await expect(tmntButton).toBeVisible();
  });

  test('should load card stats table', async ({ page }) => {
    await page.goto('/format/limited');
    
    // Wait for card stats table
    const table = page.locator('table');
    await expect(table).toBeVisible();
    
    // Should have card rows
    const rows = page.locator('tbody tr');
    const count = await rows.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('MTGProInfo - Responsive Design', () => {
  test('should be mobile-friendly on small screens', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Main content should be visible
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    
    // Navigation should work
    const scheduleButton = page.getByRole('link', { name: 'Competitive Schedule' });
    await expect(scheduleButton).toBeVisible();
  });

  test('matchup matrix should be scrollable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/format/standard');
    
    // Table should exist but may need horizontal scroll
    const table = page.locator('table');
    await expect(table).toBeVisible();
  });
});

test.describe('MTGProInfo - Page Loads', () => {
  test('all main pages should load without 404s', async ({ page }) => {
    const pages = [
      '/',
      '/schedule',
      '/format/standard',
      '/format/limited',
      '/format/pioneer',
    ];

    for (const url of pages) {
      await page.goto(url);
      
      // Check no 404
      const statusCode = page.url();
      expect(statusCode).not.toContain('404');
      
      // Page should have content
      const body = page.locator('body');
      await expect(body).toBeVisible();
    }
  });
});

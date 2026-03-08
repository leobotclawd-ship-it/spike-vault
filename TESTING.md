# MTGProInfo Testing Guide

This project uses **Playwright** for automated browser testing and QA.

## Setup (One Time)

### 1. Install Playwright
```bash
npm install
```

This installs Playwright and its dependencies (including browsers).

### 2. Verify Installation
```bash
npx playwright --version
```

## Running Tests

### Quick Start
```bash
npm test
```

This will:
1. Start the dev server automatically (`npm run dev`)
2. Run all tests
3. Generate an HTML report

### Run Specific Test File
```bash
npx playwright test tests/mtgproinfo.spec.ts
```

### Run Specific Test
```bash
npx playwright test -g "should toggle between light and dark modes"
```

### Run in UI Mode (Interactive)
```bash
npx playwright test --ui
```

This opens an interactive browser where you can:
- Watch tests run in real-time
- Step through each action
- See console logs and network requests
- Replay tests

### Debug Mode
```bash
npx playwright test --debug
```

Opens Playwright Inspector — step through tests line-by-line with full visibility.

### Headed Mode (See Browser)
```bash
npx playwright test --headed
```

Runs tests with visible browser window instead of headless.

## Test Coverage

Current tests cover:

### Light/Dark Mode ✅
- Toggle theme button functionality
- Light/dark class switching
- Theme persistence in localStorage

### Matchup Matrix ✅
- Matrix visibility and structure
- Hiding rows by clicking deck names
- Reset button to restore all rows

### Navigation ✅
- Links between format pages
- Schedule navigation

### Home Page ✅
- All 8 format squares display
- Upcoming events section

### Limited Format ✅
- Set selector buttons
- Card stats table loading

### Responsive Design ✅
- Mobile viewport (375×667)
- Touch-friendly navigation

### Page Loads ✅
- No 404 errors on main pages
- Content loads properly

## Writing New Tests

### Basic Test Structure
```typescript
import { test, expect } from '@playwright/test';

test('should do something', async ({ page }) => {
  // Navigate
  await page.goto('/format/standard');
  
  // Find element
  const button = page.getByRole('button', { name: 'Click me' });
  
  // Interact
  await button.click();
  
  // Assert
  await expect(button).toBeDisabled();
});
```

### Common Locators
```typescript
// By role (recommended)
page.getByRole('button', { name: 'Submit' });

// By label
page.getByLabel('Email');

// By text
page.getByText('Welcome');

// By placeholder
page.getByPlaceholder('Enter text');

// CSS selector
page.locator('table tbody tr');

// XPath
page.locator('//button[@id="submit"]');
```

### Common Actions
```typescript
await page.goto('/url');           // Navigate
await element.click();              // Click
await element.fill('text');         // Type in input
await element.press('Enter');       // Press key
await element.check();              // Check checkbox
await page.selectOption('select', 'option');  // Select dropdown
await page.screenshot();            // Take screenshot
await page.waitForTimeout(1000);    // Wait
```

### Common Assertions
```typescript
await expect(element).toBeVisible();
await expect(element).toBeHidden();
await expect(element).toBeEnabled();
await expect(element).toBeDisabled();
await expect(element).toHaveText('text');
await expect(element).toContainText('text');
await expect(page).toHaveURL('/url');
await expect(element).toHaveAttribute('href', '/path');
```

## Screenshots & Traces

### Take Screenshots
```typescript
await page.screenshot({ path: 'screenshot.png' });
```

### View Test Traces
After a test fails, Playwright saves a trace. Open it:
```bash
npx playwright show-trace trace.zip
```

## Debugging

### Print to Console
```typescript
console.log('Debug info:', await element.textContent());
```

### Pause and Inspect
```typescript
await page.pause(); // Opens debugger
```

### Check Current State
```typescript
const url = page.url();
const title = await page.title();
const content = await element.textContent();
```

## CI/CD Integration

Tests run automatically in GitHub Actions on push. To run locally like CI:

```bash
CI=true npm test
```

## Troubleshooting

### "Browser not found"
```bash
npx playwright install
```

### "Connection refused"
Make sure dev server is running:
```bash
npm run dev  # in another terminal
```

### Tests timeout
Increase timeout in `playwright.config.ts`:
```typescript
timeout: 30000,  // 30 seconds
```

### Flaky tests
Add `retries` in `playwright.config.ts` or use `test.setTimeout()`:
```typescript
test('flaky test', async ({ page }) => {
  test.setTimeout(60000);
  // ...
});
```

## Resources

- **Playwright Docs:** https://playwright.dev
- **API Reference:** https://playwright.dev/docs/api/class-page
- **Best Practices:** https://playwright.dev/docs/best-practices
- **Debugging:** https://playwright.dev/docs/debug

## For MTGProInfo Specifically

### Light/Dark Mode Testing
When testing theme changes:
1. Check `document.documentElement.className` for "dark" class
2. Verify localStorage contains theme preference
3. Test both desktop and mobile viewports

### Matchup Matrix Testing
When adding new features:
1. Test hiding/showing rows
2. Verify data persists after reload
3. Check mobile horizontal scroll

### Performance
- Tests run in parallel by default
- Use `test.describe.serial()` if tests must run sequentially
- Check `playwright.config.ts` for worker count

## Getting Help

Run tests in UI mode for the best debugging experience:
```bash
npm test -- --ui
```

Then watch tests run interactively and examine each step.

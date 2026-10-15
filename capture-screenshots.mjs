import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, "screenshots");

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const PORT = process.env.PORT || 3002;
const BASE_URL = process.env.SITE_URL || `http://localhost:${PORT}`;

async function main() {
  console.log("Launching browser via msedge...");
  const browser = await chromium.launch({
    channel: "msedge",
    headless: true,
  });

  try {
    // 1. Desktop context (1440x900, deviceScaleFactor: 2 for crisp ultra-sharp screenshots)
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1.5,
    });
    const desktopPage = await desktopContext.newPage();

    // a. Homepage - desktop viewport
    console.log("Capturing homepage-desktop.png...");
    await desktopPage.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1200);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "homepage-desktop.png"),
      fullPage: false,
    });

    // b. Homepage - fullpage
    console.log("Capturing homepage-fullpage.png...");
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "homepage-fullpage.png"),
      fullPage: true,
    });

    // i. Footer section
    console.log("Capturing footer.png...");
    const footerElement = desktopPage.locator("footer");
    await footerElement.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(600);
    await footerElement.screenshot({
      path: path.join(screenshotsDir, "footer.png"),
    });

    // d. About Us page
    console.log("Capturing about-us.png...");
    await desktopPage.goto(`${BASE_URL}/about`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1200);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "about-us.png"),
      fullPage: false,
    });

    // e. Initiatives page
    console.log("Capturing initiatives.png...");
    await desktopPage.goto(`${BASE_URL}/initiatives`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1200);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "initiatives.png"),
      fullPage: false,
    });

    // f. Events page
    console.log("Capturing events.png...");
    await desktopPage.goto(`${BASE_URL}/events`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1200);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "events.png"),
      fullPage: false,
    });

    // g. Join Us / Membership Registration page or section
    console.log("Capturing join-us.png...");
    await desktopPage.goto(`${BASE_URL}/join`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1200);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "join-us.png"),
      fullPage: false,
    });

    // h. Contact page
    console.log("Capturing contact.png...");
    await desktopPage.goto(`${BASE_URL}/contact`, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(1200);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "contact.png"),
      fullPage: false,
    });

    await desktopContext.close();

    // 2. Mobile context (390x844, deviceScaleFactor: 2)
    console.log("Capturing homepage-mobile.png (navigation menu and mobile layout)...");
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    await mobilePage.waitForTimeout(800);

    // Click mobile menu button to display navigation menu
    const menuButton = mobilePage.locator('button[aria-label*="menu"]');
    if (await menuButton.count() > 0) {
      await menuButton.first().click();
      await mobilePage.waitForTimeout(600);
    }
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, "homepage-mobile.png"),
      fullPage: false,
    });
    await mobileContext.close();

    console.log("All screenshots captured successfully from production server!");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Screenshot capture error:", err);
  process.exit(1);
});

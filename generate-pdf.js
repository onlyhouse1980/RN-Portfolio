const { chromium } = require('@playwright/test');

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const languages = ['en', 'de', 'es', 'fr', 'nl'];

  for (const lang of languages) {
    console.log(`Navigating to http://localhost:3000/resume-pdf?lang=${lang}...`);
    await page.goto(`http://localhost:3000/resume-pdf?lang=${lang}`, { waitUntil: 'domcontentloaded' });
    
    console.log(`Waiting for animations and fonts to settle for ${lang}...`);
    await page.waitForTimeout(5000); 
    
    console.log(`Generating PDF for ${lang}...`);
    await page.pdf({
      path: `public/Ryan_Nyberg_Resume_${lang}.pdf`,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '0px',
        bottom: '10mm',
        left: '0px'
      }
    });
    
    console.log(`PDF generated at public/Ryan_Nyberg_Resume_${lang}.pdf`);
  }

  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});

const { execSync } = require('child_process');

function hasJava() {
  try { execSync('java -version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

if (!hasJava()) {
  console.log('⚠️  Java is not available. do not open  Allure HTML.');
  console.log('👉 Use Playwright HTML report: npm run report');
  process.exit(0);
}

try {
  execSync('npx allure open ./allure-report', { stdio: 'inherit' });
} catch (e) {
  process.exit(e.status || 1);
}

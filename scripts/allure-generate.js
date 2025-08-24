const { execSync } = require('child_process');

function hasJava() {
  try { execSync('java -version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

if (!hasJava()) {
  console.log('⚠️  Java not available. Skip generating Allure HTML.');
  console.log('👉 locally use Playwright HTML report: npm run report');
  console.log('👉 В CI will generate Allure HTML automatically.');
  process.exit(0);
}

try {
  execSync('npx allure generate ./allure-results --clean -o ./allure-report', { stdio: 'inherit' });
  console.log('✅ Allure HTML report is generated in ./allure-report');
} catch (e) {
  process.exit(e.status || 1);
}

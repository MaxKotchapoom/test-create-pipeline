const assert = require('assert');
const { calculate } = require('./script.js');

console.log("--- Starting Unit Tests ---");

try {
    // เคส 1: การหารปกติ
    assert.strictEqual(calculate("20/2"), 10, "10/2 ต้องได้ 5");
    
    // เคส 2: ดักจับการหารด้วย 0
    assert.strictEqual(calculate("10/0"), "Cannot divide by 0", "การหารด้วย 0 ต้องแสดงข้อความเตือน");

    console.log("✓ All Tests Passed!");
    process.exit(0); // ผ่าน
} catch (error) {
    console.error("✗ Test Failed:", error.message);
    process.exit(1); // ไม่ผ่าน
}
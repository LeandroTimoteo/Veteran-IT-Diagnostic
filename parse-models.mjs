import fs from 'fs';
const data = JSON.parse(fs.readFileSync('models.json', 'utf8'));
const freeQwenModels = data.data.filter(m => m.id.includes('qwen') && m.id.includes('free')).map(m => m.id);
console.log("Free Qwen models:", freeQwenModels);
const freeModels = data.data.filter(m => m.id.includes('free')).map(m => m.id);
console.log("Other free models:", freeModels.slice(0, 5));

import { execSync } from 'child_process';
import slug from 'slug';
import data from '../src/data/index.js';

for (let i = 0; i < data.tracks.length; i++) {
	console.log(`Rendering still: ${data.tracks[i].sectionName}`);
	execSync(
		`npx remotion still --frame=1000 src/Youtube.jsx youtube out/${
			i + 1
		}-${slug(data.tracks[i].sectionName)}.png --props='{"index": ${i}}'`,
		{ stdio: 'inherit' }
	);
}

import { execSync } from 'child_process';
import slug from 'slug';
import data from '../src/data/index.js';

for (let i = 0; i < data.tracks.length; i++) {
	console.log(`Rendering youtube: ${data.tracks[i].sectionName}`);
	execSync(
		`npx remotion render src/Youtube.jsx youtube out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-youtube.mp4 --props='{"index": ${i}}'`,
		{ stdio: 'inherit' }
	);
}

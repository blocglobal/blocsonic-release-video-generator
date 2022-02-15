import { execSync } from 'child_process';
import slug from 'slug';
import data from '../src/data/index.js';

for (let i = 0; i < data.tracks.length; i++) {
	console.log(`Rendering This Day On: ${data.tracks[i].sectionName}`);
	execSync(
		`npx remotion render src/ThisDay.jsx thisday out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-thisday.mp4 --props='{"index": ${i}}'`,
		{ stdio: 'inherit' }
	);
}

import { execSync } from 'child_process';
import slug from 'slug';
import data from '../src/data/index.js';

for (let i = 0; i < data.tracks.length; i++) {
	console.log(`Rendering social: ${data.tracks[i].sectionName} (now)`);
	execSync(
		`npx remotion render src/Social.jsx social out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-social-now.mp4 --props='{"index": ${i}, "type": "now"}'`,
		{ stdio: 'inherit' }
	);
	console.log(`Rendering social: ${data.tracks[i].sectionName} (tomorrow)`);
	execSync(
		`npx remotion render src/Social.jsx social out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-social-tomorrow.mp4 --props='{"index": ${i}, "type": "tomorrow"}'`,
		{ stdio: 'inherit' }
	);
	console.log(`Rendering social: ${data.tracks[i].sectionName} (friday)`);
	execSync(
		`npx remotion render src/Social.jsx social out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-social-friday.mp4 --props='{"index": ${i}, "type": "friday"}'`,
		{ stdio: 'inherit' }
	);

	console.log(`Rendering This Day On: ${data.tracks[i].sectionName}`);
	execSync(
		`npx remotion render src/ThisDay.jsx thisday out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-thisday.mp4 --props='{"index": ${i}}'`,
		{ stdio: 'inherit' }
	);

	console.log(`Rendering still: ${data.tracks[i].sectionName}`);
	execSync(
		`npx remotion still --frame=1000 src/Youtube.jsx youtube out/${
			i + 1
		}-${slug(data.tracks[i].sectionName)}.png --props='{"index": ${i}}'`,
		{ stdio: 'inherit' }
	);

	console.log(`Rendering youtube: ${data.tracks[i].sectionName}`);
	execSync(
		`npx remotion render src/Youtube.jsx youtube out/${i + 1}-${slug(
			data.tracks[i].sectionName
		)}-youtube.mp4 --props='{"index": ${i}}'`,
		{ stdio: 'inherit' }
	);
}

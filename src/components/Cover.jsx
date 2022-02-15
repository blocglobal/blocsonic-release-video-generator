import { Img } from 'remotion';

const Cover = ({ src, style = {} }) => {
	return (
		<Img src={src} style={{ ...style, boxShadow: '0 0 80px rgba(0,0,0,.8)' }} />
	);
};

export default Cover;

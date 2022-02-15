import './PromoCopy.css';

const PromoLine = ({ type }) => {
	if (type === 'now') {
		return (
			<p>
				<span>Available</span> <span className="now">Now</span>
			</p>
		);
	}

	if (type === 'friday') {
		return (
			<p>
				<span>Available</span> <span className="friday">Friday</span>
			</p>
		);
	}

	if (type === 'tomorrow') {
		return (
			<p>
				<span>Available</span> <span className="tomorrow">Tomorrow</span>
			</p>
		);
	}
};

const PromoCopy = ({ type = 'now', style = {} }) => {
	return (
		<div style={style} className="PromoCopy">
			<PromoLine type={type} />
			<PromoLine type={type} />
			<PromoLine type={type} />
			<PromoLine type={type} />
			{type === 'tomorrow' && <PromoLine type={type} />}
		</div>
	);
};

export default PromoCopy;

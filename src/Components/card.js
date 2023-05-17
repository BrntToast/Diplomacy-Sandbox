function Card(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h1>{props.favFood}</h1>
			<h1>{props.favAnimal}</h1>
		</div>
	);
}
export default Card;

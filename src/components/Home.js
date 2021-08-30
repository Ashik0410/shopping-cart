import {useState} from 'react';
import faker from 'faker';
import FirstPage from './FirstPage'
import './style.css';

const Home = () => {
	const productArray = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.image(),
	}))

	const[products] = useState(productArray);
	
	return(
	<div className="productContainer">
	{
		products.map((prod) => (
			<FirstPage prod={prod}/>

			))}

	</div>
	);
}
export default Home;
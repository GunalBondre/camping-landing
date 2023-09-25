import './home.css';
import CampingImage from '../assets/camping_image.png';

const Home = () => {
	return (
		<main className='main'>
			<div className='hero-section container'>
				<div className='hero-section__wrapper'>
					<div
						className='left-section'
						data-aos='fade-right'
						data-aos-duration='1000'
						data-aos-easing='linear'
						data-aos-delay='1000'
					>
						<h1 className='image-wrapper'>
							Camping Events <br /> <span>To Remember</span>
						</h1>
						<p className='image-wrapper'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							error omnis laborum quasi ipsa nemo consectetur velit maxime
							labore neque.
						</p>
						<button className='image-wrapper'>See Locations</button>
					</div>
					<div className='right-section'>
						<div
							className='image-wrapper'
							data-aos='fade-up'
							data-aos-duration='1000'
							data-aos-easing='linear'
						>
							<img src={CampingImage} alt='camping image' />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;

import styled from 'styled-components'

const Banner = () => {
    return (
        <div className="h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]">
            <Video src="hero.mp4" autoPlay loop muted type="video/mp4" preload="true" />
            <div className="absolute top-[350px] md:top-[450px] w-full text-center">
                <p className="text-2xl font-bold text-white">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150" >I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner

const Video = styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
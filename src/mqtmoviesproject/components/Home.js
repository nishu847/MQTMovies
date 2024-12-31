import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Carousel, CarouselItem} from 'react-bootstrap';
import {useAxiosGet} from '../../Hooks/HttpRequest';


function Home(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US&page=1';
    const images = useAxiosGet(url);
    let content1, content2;

    if(images.data){
        content1 = images.data.results.map(image => {
            return(
                <CarouselItem key={image.id} className="slider">
                    <img 
                        className="d-block w-100"
                        src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                    />
                </CarouselItem>
            )
        })

        content2 = images.data.results.map(image => {
            return(
                <CarouselItem key={image.id} className="slider">
                    <img 
                        className="d-block w-100"
                        src={`https://image.tmdb.org/t/p/original${image.poster_path}`} 
                    />
                </CarouselItem>
            )
        })
    }    
    

    return(
        <div>
        <div className="homecontainer">
            <div className="homeslidercontainer1">
                <Carousel interval={2000}>
                    {content1}
                </Carousel>
            </div>
            <div className="homeslidercontainer2">
                <Carousel interval={2000}>
                    {content2}
                </Carousel>
            </div>
        </div>

        </div>

    )

}

export default Home;
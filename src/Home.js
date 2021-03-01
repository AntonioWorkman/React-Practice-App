import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import './styles/main.css';
import Logo from './images/logo.png';


function Home() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    // useEffect(() => {
    //     fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setImages(data.hits);
    //             setIsLoading(false);
    //         })
    //         .catch(err => console.log(err));
    // }, [term]);
    return (
        

        <div className="container mx-auto">
            <nav class="bg-gradient-to-r from-purple-400 to-blue-500">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="h-12 w-12 rounded" src={Logo} alt="Logo" />
                            </div>
                            <div class="flex items-center">
                              <ImageSearch searchText={(text) => setTerm(text)} />  
                            </div>
                        </div>
                    </div>
                </div>  
            </nav>
            

            {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

            {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
                {images.map(image => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>} */}
        </div>

    );
}







export default Home;

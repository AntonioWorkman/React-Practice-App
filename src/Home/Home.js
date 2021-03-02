import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import API from './API';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import Image from './Image';


let pageNum = 1;

const Home = () => {
    const [imagesArray, setImagesArray] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const fetchImages = (pageNumber) => {
        API.get("/", { params: { page: pageNumber } }).then((res) => {
            //console.log(res);
            setImagesArray([...imagesArray, ...res.data.hits])
            setTotalPages(res.data.totalHits / res.data.hits.length);
        }).catch((err) => console.log(err));
    };

    const breakpointColumnsObj = {
        default: 1
    };

    useEffect(() => {
        fetchImages(pageNum);
    },
        []
    );

    console.log(imagesArray);

    return (
            <main class="mx-fill flex-col flex items-center">
                <div class="overflow-y-auto p-1 ">
                    <InfiniteScroll dataLength={imagesArray.length} pageStart={0} loadMore={() => fetchImages(++pageNum)} hasMore={pageNum < totalPages ? true : false}>
                        <Masonry
                            breakpointCols={1}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">

                            {imagesArray.map((image) => (<Image key={image.id} {...image} />))}
                        </Masonry>
                    </InfiniteScroll>
                </div>
            </main>
    )
}





export default Home;

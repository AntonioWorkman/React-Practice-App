import React from 'react';

const Image = (props) => {
    const { tags, webformatURL } = props;
    return (
        <div class="px-0 rounded">
            <div class="px-2 py-3 text-yellow-500 text-xl">{props.user}</div>
            <img src={webformatURL} alt={tags} class="w-full" />
            <div class="px-2 py-2">
                <span><strong>Liked by: </strong>{props.likes}</span>
                <span><strong>Viewed by: </strong>{props.views}</span>
            </div>
        </div>
    )
}

export default Image;
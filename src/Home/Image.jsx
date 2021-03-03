import React from 'react';

const Image = (props) => {
    const { tags, webformatURL } = props;
    return (
        <div class="px-0 rounded divide-y divide-gray-700">
                <div class="flex items-center px-1 py-1">
                    <img class="w-10 h-10 rounded-full mr-2" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Profile Photo" />
                    <div class="text-sm">
                        <p class="text-white leading-none">{props.user}</p>
                    </div>
                </div>
           
            <img src={webformatURL} alt={tags} class="w-full" />

            <div class="flex items-center px-2 py-2 text-blue-500 text-sm leading-none">
                <button class="mr-2">Like</button>
                <button class="mr-2">Comment</button>
                <button class="mr-2">Share</button>    
            </div>

            <div class="flex items-center px-2 py-1 text-white text-sm leading-none">
                <div class="mr-2">{props.likes}<strong> likes</strong></div>
                <div>{props.views}<strong> Views</strong></div>
            </div>
        </div>
    )
}

export default Image;
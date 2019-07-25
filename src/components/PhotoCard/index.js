import React from 'react';
import { DEFAULT_IMAGE_PHOTOCARD } from '../../constants/constans';

import { MdFavoriteBorder } from 'react-icons/md';
import { ImgWrapper, Img, Button } from './styles';

export const PhotoCard = ({ id = 1, likes = 0, src = DEFAULT_IMAGE_PHOTOCARD }) => {
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size={'32px'} />
                {likes} likes!
            </Button>
        </article>
    )
}


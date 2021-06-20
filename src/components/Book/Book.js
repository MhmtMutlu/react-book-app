import React, { useState } from 'react'
import { card } from '../../motion/variants';
import { Card, Image, Detail, Title, Author } from "./styles"
import CardOverlay from "./CardOverlay/CardOverlay"

const Book = (props) => {

    const [isHovered, setIsHovered] = useState(false)

    const quickViewOverlay = isHovered && <CardOverlay itemId={props.book.id} />;

    const onMouseOverHandler = () => {
        setIsHovered(true);
    };
    
    const onMouseLeaveHandler = () => {
        setIsHovered(false);
    };

    return (
        <Card
            layout
            variant={card}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}    
        >
            {quickViewOverlay}
            <Image src={props.book.imageURL} alt={props.book.title} />
            <Detail>
                <Title>{props.book.title}</Title>
                <Author>{props.book.author}</Author>
            </Detail>
        </Card>
    )
}

export default Book
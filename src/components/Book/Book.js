import React, { useState} from 'react'
import { card } from '../../motion/variants';
import { Card, Image, Detail, Title, Author } from "./styles"
import CardOverlay from "./CardOverlay/CardOverlay"
import { ThemeContext } from "../../contexts/ThemeContext"

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
        <ThemeContext.Consumer>
            {contextTheme => {
                const { isDarkTheme, dark, light } = contextTheme
                const theme = isDarkTheme ? dark : light
                return (
                    <Card
                        layout
                        variant={card}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseOver={onMouseOverHandler}
                        onMouseLeave={onMouseLeaveHandler}
                        style={{boxShadow: theme.shadow}}
                    >
                        {quickViewOverlay}
                        <Image src={props.book.book_image} alt={props.book.title} />
                        <Detail>
                            <Title>{props.book.title}</Title>
                            <Author>{props.book.author}</Author>
                        </Detail>
                    </Card>
                )
            }}
        </ThemeContext.Consumer>
        
    )
}

export default Book
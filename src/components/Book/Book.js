import React, { Component } from 'react'
import { Content, Image, Detail, Title, Author } from "./styles"

class Book extends Component {

    

    render() {
        console.log(this.props.book)
        return (
            <Content>
                <Image src={this.props.book.imageURL} alt={this.props.book.title} />
                <Detail>
                    <Title>{this.props.book.title}</Title>
                    <Author>{this.props.book.author}</Author>
                </Detail>
            </Content>
        )
    }
}

export default Book
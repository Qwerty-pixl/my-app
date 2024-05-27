import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'ring',
                    name: 'Кольца'
                }, {
                    key: 'pendants',
                    name: 'Подвески'
                },
                {
                    key: 'earrings',
                    name: 'Серьги'
                }, {
                    key: 'pirsings',
                    name: 'Пирсинги'
                },
                {
                    key: 'keychains',
                    name: 'Брелоки'
                },
                {
                    key: 'braslet',
                    name: 'Браслеты'
                },
                {
                    key: 'chains',
                    name: 'Цепи'
                },


            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories
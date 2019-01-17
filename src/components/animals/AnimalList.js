import React, { Component } from 'react'

export default class AnimalList  extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name}
                    </div>
                )
            }
            </section>
        );
    }
}
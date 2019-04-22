import React from "react";

class formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ globalTitle: `Mon formulaire - ${this.state.title}` });
        console.log("Titre changé");
    }

    componentDidMount() {
        console.log("Formulaire rendu");
    }

    render() {
        return (
            <div>
                <h2>{this.state.globalTitle}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Titre</label>
                    <input
                        type="text"
                        id="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default formulaire;
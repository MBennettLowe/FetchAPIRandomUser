import React, { Component } from 'react'

export default class FetchRandomUser extends Component {

    state = {
        loading: true,
        drinks: null,
    };

    async componentDidMount() {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ drinks: data.drinks[0], loading: false });
        console.log(data.drinks[0]);
       
     }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.drinks) {
            return <div>didn't get a drink</div>
        }
         return (
                    <div>
                        <div>{this.state.drinks.strDrink}</div>
                        <div>{this.state.drinks.strAlcoholic}</div> 
                        <div>{this.state.drinks.strGlass}</div> 
                        <div>{this.state.drinks.strDrinkThumb}</div> 
                    </div>
                
        
            );
            
    }

}
           
    


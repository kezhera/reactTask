import React, { Component } from 'react'
import FormSuccess from './FormSuccess';
import FormUserDetails from './FormUserDetails';

export default class wizardFom extends Component {

    state = {
        step: 1,
        validate : false,
        firstName: '' ,
        lastName: '' ,
        delivery: 'თბილისი' ,
        location: '',
        email : '',
        paymentMethod: '',
        productName: '',
        phone: undefined ,
        price: undefined,
        amount: undefined,
        age: undefined,
        ingredients: []
    }

    nextStep = () => {

        const { step , validate } = this.state;
        this.validation(this.state);
        
        if(validate == true){
            this.setState({
                step: step + 1
            });
        } 
    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });

    }

    validation = (values) => {
        if(values.firstName != '' && values.lastName != '' && values.location != '' && values.paymentMethod != '' && values.email != '' && values.phone != undefined && values.age != undefined ) {
            if( values.age > 17 ){
                this.setState({
                    validate: true
                });
            }else{
                alert('ასაკი აუცილებლად უნდა იყოს 18 წელზე მეტი')
            }
        }else{
            alert('გთხოვთ შეიყვანეთ მონაცემები')
        }
    }

    handleChange = e => {

        this.setState({[e.target.name]: e.target.value})

        // checkbox form
        if( e.target.name == 'ingredients' ){
            var ingredientsList = document.getElementsByName('ingredients');
            var ingredients = []; 
            for( let i = 0 ; i < ingredientsList.length ; i++){
                var ingredient = ingredientsList[i];
                if(ingredient.checked == true){
                    ingredients.push(ingredient.value)
                }
            }
            this.setState({[e.target.name]: ingredients})
        }
        
    }
    render() {

        const { step } = this.state;
        const { firstName , lastName , phone , age , delivery , email , location ,  paymentMethod , ingredients , price , amount , productName} = this.state;
        const values = { firstName , lastName , phone , age , delivery , email , location ,  paymentMethod , ingredients , price , amount , productName}
        switch(step){
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormSuccess 
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

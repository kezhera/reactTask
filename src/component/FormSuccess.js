import React, { Component } from 'react';
import edit from '../img/edit.svg'
import hotDog from '../img/hotdog.jpg'
export class FormSuccess extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const {values , handleChange} = this.props;
        
        const titles = ['სახელი' , 'გვარი' , 'ტელეფონი' , 'ასაკი' , 'მიწოდება' , 'იმეილი' , 'ზუსტი მისამართ' , 'გადახდის მეთოდი' ];
        
        const secondaryTitle = [values.firstName , values.lastName , values.phone , values.age , values.delivery , values.email , values.location ,  values.paymentMethod ];

        const list = titles.map( (item , index) => (
            <div className="list-item" key={index}>
                <span className="list-item__title">{item}</span>
                <span className="list-item__secondary">{secondaryTitle[index]}</span>
                <img src={edit} className="edit" onClick={this.back}/>
            </div>
        ))

        return (
            <div className="success">
                <div className="wrapper">
                    <div className="img-frame">
                        <img src={hotDog}/>
                    </div>
                    <div className="box">
                        <ul className="success-list">
                            <li className="success-list__li">
                                <span>პროდუქტის დასახელება: </span>
                                <span>მექსიკური ჰოთ დოგი</span>
                            </li>
                            <li className="success-list__li">
                                <span>რაოდენობა: </span>
                                <span>3</span>
                            </li>
                            <li className="success-list__li">
                                <span>ფასი: </span>
                                <span>16 ლარი</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="list">
                        {list}
                        {
                            <div className="list-item">
                                <span className="list-item__title">დამატებითი ინგრედიენტები</span>
                                <span className="list-item__secondary">{values.ingredients.join()}</span>
                                <img src={edit} className="edit" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FormSuccess

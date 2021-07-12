import React, { Component } from 'react'
export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values , handleChange} = this.props;
        return (
            <main className="main">
                <div className="container">
                    <div className="input-group">
                        <input type="text" name="firstName" value={values.firstName} onChange={handleChange}/>
                        <label>სახელი</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="lastName" value={values.lastName} onChange={handleChange}/>
                        <label>გვარი</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="email" value={values.email} onChange={handleChange}/>
                        <label>იმეილი</label>
                    </div>
                    <div className="input-group">
                        <input type="number" name="phone" value={values.phone} onChange={handleChange}/>
                        <label>ტელეფონი</label>
                    </div>
                    <div className="input-group">
                        <input type="number" name="age" value={values.age} onChange={handleChange}/>
                        <label>ასაკი</label>
                    </div>
                    <div className="input-group">
                        <select name="paymentMethod" className="select" onChange={handleChange} defaultValue={'DEFAULT'}>
                            <option disabled value="DEFAULT">გადახდის მეთოდი</option>
                            <option value="ბარათით გადახდა">ბარათით გადახდა</option>
                            <option value="ქეშით გადახდა">ქეშით გადახდა</option>
                            <option value="გადარიცხვა">გადარიცხვა</option>
                        </select>
                        <label>გადახდის მეთოდი</label>
                    </div>
                    <div className="input-group">
                        <div className="checkbox-list">
                            <div className="checkbox-group">
                                <label htmlFor="tbilisi" >თბილისში</label>
                                <input type="radio" name="delivery" value="თბილისი" id="tbilisi" checked onChange={handleChange}/>
                            </div>
                            <div className="checkbox-group">
                                <label htmlFor="region" >რეგიონში</label>
                                <input type="radio" name="delivery" value="რეგიონი" id="region" onChange={handleChange}/>
                            </div>
                        </div>
                        <label>მიწოდება</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="location" value={values.location} onChange={handleChange}/>
                        <label>ზუსტი მისამართი</label>
                    </div>
                    <div className="input-group checkbox">
                        <div className="checkbox-list">
                            <div className="checkbox-group">
                                <label htmlFor="pepper" >წიწაკა</label>
                                <input type="checkbox" name="ingredients" value="წიწაკა" id="pepper" onChange={handleChange}/>
                            </div>
                            <div className="checkbox-group">
                                <label htmlFor="tomato" >პამიდორი</label>
                                <input type="checkbox" name="ingredients" value="პამიდორი" id="tomato" onChange={handleChange}/>
                            </div>
                            <div className="checkbox-group">
                                <label htmlFor="cucumber" >კიტრი</label>
                                <input type="checkbox" name="ingredients" value="კიტრი" id="cucumber" onChange={handleChange}/>
                            </div>
                            <div className="checkbox-group">
                                <label htmlFor="sauce" >სოუზი</label>
                                <input type="checkbox" name="ingredients" value="სოუზი" id="sauce" onChange={handleChange}/>
                            </div>
                            <div className="checkbox-group">
                                <label htmlFor="bulgarian" >ბულგარული</label>
                                <input type="checkbox" name="ingredients" value="ბულგარული" id="bulgarian" onChange={handleChange}/>
                            </div>
                        </div>
                        <label>დამატებითი ინგრედიენტები</label>
                    </div>
                    <div className="raised-btn" onClick={this.continue}>
                        შეკვეთის დადასტურება
                    </div>
                </div>
            </main>
        )
    }
}

export default FormUserDetails

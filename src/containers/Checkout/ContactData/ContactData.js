import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.module.css';
import Axios from '../../../axios.orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
  state={
      name:''
      ,email:'',
      address:{
          street:'',
          postalCode:''
      },
      loading:false
  };

  orderHandler = (event) => {
      event.preventDefault();
        this.setState({loading :true});
        const order={
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name:'Bharath Chandra',
                address:{
                        street: '123 Main st',
                        zipcode:'97006',
                        country:'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        Axios.post('/orders.json',order)
        .then(response=>{
            this.setState({loading :false});
            this.props.history.push('/');
        })
        .catch(error=>{this.setState({loading :false})});
  }

  render(){
      let form = (<form>
        <Input inputtype="input" type="text" name="name" placeholder="Your name"></Input>
        <Input  inputtype="input" type="text" name="email" placeholder="Your Email"></Input>
        <Input  inputtype="input" type="text" name="street" placeholder="Your street"></Input>
        <Input  inputtype="input" type="text" name="postal" placeholder="Your Postal code"></Input>
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
    </form>);
      if(this.state.loading){
          form=<Spinner/>;
      }
      return (<div  className={classes.ContactData}>
          <h4>Enter your contact data</h4>
          {form}
      </div>);
  }
}

export default ContactData;
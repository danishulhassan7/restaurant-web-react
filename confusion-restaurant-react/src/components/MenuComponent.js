import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay,CardBody, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-md-5 col-12 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay> 
                            <CardTitle><h3>{dish.name}<h3/></CardTitle>        
                         </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;

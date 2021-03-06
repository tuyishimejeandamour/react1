import  { Component } from "react";
import { Card,CardImg,CardImgOverlay,CardTitle } from "reactstrap";

class Menucomponent extends Component{

    constructor(props){
        super(props);

        this.state = {
           selected:null
        };
    }
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-15 col-md-5 m-1">
                    <Card onClick={()=>this.props.onClick(dish.id)}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
                </div>
            )
        });
        return(
            <div
             className="container">
                 <div className="row">
                        {menu}
                 </div>
                
            </div>
        )
        
    }
}
export default Menucomponent;
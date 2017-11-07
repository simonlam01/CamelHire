import React from "react";

var superhomeSectionCss = {
    "background-image": "url(https://www.travelsupermarket.com//content/dam/travelsupermarket/background/hero-images/s/super-homepage/SHP-ParadiseBeach.fp1505380716340fp.jpg/jcr:content/renditions/cq5dam.web.2100.1400.jpeg)",
    "backgroundAttachment": "scroll",
    "backgroundSize": "cover",
    "background-position": "center center",
    "height": "100vh"
};

var superhomeTitle = {
    "display": "inline-block",
    "position": "absolute",
    "top": "430px",
    "left": "80px",
    "font-weight": "700",
    "color": "#fff",
    "font-size": "3em",
    "font-family": "sans-serif"
};

export class Home extends React.Component{
    render(){
        return(
            <div style={superhomeSectionCss}>
                <div style={superhomeTitle}>{this.props.superhomeTitle}</div>
            </div>
        );
    }
}
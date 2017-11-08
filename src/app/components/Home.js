import React from "react";

var superhomeSectionCss = {
    "backgroundImage": "url(https://www.travelsupermarket.com//content/dam/travelsupermarket/background/hero-images/s/super-homepage/SHP-ParadiseBeach.fp1505380716340fp.jpg/jcr:content/renditions/cq5dam.web.2100.1400.jpeg)",
    "backgroundAttachment": "scroll",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "height": "100vh"
};

var superhomeTitle = {
    "display": "inline-block",
    "position": "absolute",
    "top": "430px",
    "left": "80px",
    "fontWeight": "700",
    "color": "#fff",
    "fontSize": "3em",
    "fontFamily": "sans-serif"
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
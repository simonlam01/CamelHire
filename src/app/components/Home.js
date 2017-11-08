import React from "react";

import { SearchGadget } from "./SearchGadget";

var superhomeSectionCss = {
    "backgroundImage": "url(https://www.travelsupermarket.com//content/dam/travelsupermarket/background/hero-images/s/super-homepage/SHP-ParadiseBeach.fp1505380716340fp.jpg/jcr:content/renditions/cq5dam.web.2100.1400.jpeg)",
    "backgroundAttachment": "scroll",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "height": "100vh"
};

var superhomeTitleCss = {
    "display": "inline-block",
    "position": "absolute",
    "top": "440px",
    "left": "80px",
    "fontWeight": "700",
    "color": "#fff",
    "fontSize": "3em"
};

var superhomeSubTitleCss = {
    "display": "inline-block",
    "position": "absolute",
    "top": "510px",
    "left": "80px",
    "fontWeight": "700",
    "color": "#fff",
    "fontSize": "3em"
};

export class Home extends React.Component{
    render(){
        return(
            <div style={superhomeSectionCss}>
                <div style={superhomeTitleCss}>{this.props.superhomeTitle}</div>
                <div style={superhomeSubTitleCss}>Nah, but seriously go find a deal.</div>
                <SearchGadget></SearchGadget>
            </div>
        );
    }
}
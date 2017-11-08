import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Home } from "./components/Home";
import { About } from "./components/About";

var headerContainerCss = {
    "background": "rgb(238, 102, 0)",
    "height": "50px"
};

var anchorCss = {
    "color": "white",
    "textDecoration": "none",
    "float": "right",
    "backgroundColor": "rgb(238, 102, 0)",
    "height": "100%",
    "width": "100px",
    "textAlign": "center",
    "borderLeft": "1px solid lightgrey"
};

var tabTextCss = {
    "paddingTop": "15px"
};

var siteLogoContainer = {
    "marginLeft": "20px",
    "marginTop": "15px",
    "position": "absolute"
};

var siteLogoSvgClass = {
    "fill": "#fff"
};

var superhomeTitle = 'Let\'s compare some things.';

render(
    <BrowserRouter>
        <div>
            <div style={headerContainerCss}>

                <Link to="/">
                    <div style={siteLogoContainer}>
                        <svg style={siteLogoSvgClass} width="159" height="29" viewBox="0 0 159 29" xmlns="http://www.w3.org/2000/svg"><title>TravelSupermarket logo</title><g fillRule="evenodd"><path d="M28.788 0C14.77 0 3.05 9.876 0 23.1c1.988-2.727 5.175-4.488 8.773-4.488.857 0 1.714.104 2.537.31 2.26-2.59 5.654-4.212 9.39-4.212 5.826 0 10.693 3.937 12.063 9.22.926-.31 1.885-.484 2.913-.484 3.188 0 5.998 1.693 7.574 4.213 1.954-1.693 4.49-2.73 7.266-2.73 3.05 0 5.792 1.244 7.78 3.213C57.406 12.466 44.518 0 28.788 0zM77.508 2.895v10.358H76.05V2.895h-3.477v-1.35h8.468v1.35M85.134 6.216c-.673 0-1.177.282-1.57.676-.673.62-.785 1.8-.785 2.702v3.715h-1.403V4.92h1.234l.113 1.465c.45-1.013 1.458-1.52 2.467-1.52.225 0 .45 0 .673.056v1.353c-.224-.057-.504-.057-.73-.057zM92.873 13.422c-.73 0-1.178-.563-1.178-1.295h-.056c-.506.844-1.515 1.35-2.693 1.35-1.906 0-2.86-1.294-2.86-2.588 0-1.07.673-2.478 2.972-2.647l2.523-.17v-.618c0-.394-.056-.9-.45-1.295-.28-.282-.672-.45-1.345-.45-.785 0-1.233.225-1.514.506-.28.282-.392.62-.392 1.014H86.48c0-.79.28-1.295.73-1.746.56-.62 1.57-.9 2.578-.9 1.627 0 2.524.675 2.916 1.632.17.394.225.788.225 1.295v4.054c0 .45.167.563.447.563.168 0 .337-.056.337-.056v1.07c-.225.225-.505.282-.84.282zm-1.29-4.166l-2.243.113c-.84.055-1.85.45-1.85 1.52 0 .73.448 1.462 1.626 1.462.616 0 1.29-.225 1.738-.675.505-.507.73-1.24.73-1.914v-.507zM98.704 13.253H97.19l-3.084-8.388h1.458l2.41 6.755 2.357-6.755h1.402M109.583 9.538h-5.888c0 .788.28 1.576.785 2.082.393.394.897.62 1.514.62.673 0 1.178-.17 1.57-.563.225-.225.393-.45.505-.9h1.345c-.112.843-.617 1.63-1.29 2.082-.617.393-1.346.618-2.13.618-1.178 0-2.132-.507-2.75-1.238-.67-.788-1.064-1.914-1.064-3.097 0-1.013.17-1.913.618-2.702.617-1.012 1.682-1.744 3.14-1.744 1.066 0 1.907.394 2.523 1.07.674.732 1.067 1.8 1.067 2.927l.056.845zm-1.907-2.928c-.336-.45-.897-.788-1.626-.788-1.514 0-2.243 1.24-2.3 2.477h4.487c-.056-.564-.28-1.24-.56-1.69zM113.172 13.365c-1.234 0-1.74-.73-1.74-2.082V1.263h1.403v9.907c0 .563.17.844.785.844h.56v1.183c0 .056-.335.168-1.008.168zM73.302 23.555c-.785.788-2.074 1.182-3.308 1.182-1.402 0-2.58-.394-3.365-1.126-.73-.675-1.234-1.688-1.234-2.814h1.514c0 .676.336 1.408.84 1.858.506.507 1.403.732 2.244.732.897 0 1.626-.17 2.187-.676.337-.338.618-.732.618-1.35 0-.902-.56-1.69-1.963-1.915-.617-.112-1.234-.17-1.85-.28-1.74-.283-3.14-1.24-3.14-3.097 0-.9.392-1.746 1.01-2.308.784-.79 1.85-1.183 3.083-1.183 1.12 0 2.243.394 3.028 1.126.73.676 1.065 1.52 1.12 2.533h-1.513c-.056-.562-.224-1.07-.56-1.463-.45-.507-1.178-.788-2.075-.788-.84 0-1.57.225-2.075.788-.28.338-.505.732-.505 1.295 0 1.07.898 1.52 1.74 1.632.672.056 1.288.225 1.96.282 1.964.28 3.254 1.463 3.254 3.32-.056 1.014-.45 1.69-1.01 2.253zM81.433 24.568l-.112-1.295c-.448.957-1.513 1.464-2.466 1.464-1.907 0-2.86-1.126-2.86-3.096v-5.516h1.402v5.29c0 1.24.448 2.028 1.794 2.028.56 0 1.01-.225 1.402-.62.505-.562.673-1.463.673-2.307V16.18h1.402v8.388h-1.234zM91.36 23.95c-.562.505-1.347.843-2.3.843-.898 0-1.963-.45-2.412-1.182v4.56h-1.402V16.18h1.234l.112 1.07c.505-.845 1.57-1.295 2.467-1.295 1.01 0 1.794.338 2.355.9.785.79 1.177 2.084 1.177 3.49.056 1.464-.392 2.76-1.233 3.604zm-2.525-6.813c-.617 0-1.01.225-1.346.563-.674.62-.898 1.633-.898 2.646 0 1.07.224 2.083.897 2.646.336.28.728.563 1.345.563 1.85 0 2.355-1.69 2.355-3.21.056-1.52-.448-3.208-2.355-3.208zM101.284 20.796h-5.888c0 .788.28 1.576.785 2.083.394.393.898.618 1.515.618.673 0 1.178-.17 1.57-.563.224-.225.393-.45.505-.9h1.346c-.113.844-.617 1.632-1.29 2.083-.617.394-1.346.62-2.13.62-1.18 0-2.132-.508-2.75-1.24-.672-.788-1.064-1.914-1.064-3.096 0-1.013.168-1.914.617-2.702.616-1.013 1.68-1.745 3.14-1.745 1.064 0 1.906.394 2.522 1.07.673.73 1.066 1.8 1.066 2.927l.056.844zm-1.907-2.927c-.336-.45-.897-.79-1.626-.79-1.513 0-2.242 1.24-2.298 2.478h4.486c-.056-.563-.224-1.24-.56-1.69zM106.947 17.475c-.672 0-1.177.28-1.57.675-.673.62-.785 1.802-.785 2.702v3.716h-1.402V16.18h1.234l.112 1.464c.45-1.014 1.458-1.52 2.468-1.52.224 0 .448 0 .672.056v1.35c-.224-.055-.504-.055-.73-.055zM119.284 24.568V19.22c0-1.182-.393-1.97-1.682-1.97-.505 0-.954.225-1.29.563-.56.563-.73 1.407-.73 2.308v4.448h-1.4V19.22c0-1.182-.337-1.97-1.683-1.97-.618 0-1.067.28-1.403.732-.393.506-.56 1.407-.56 2.14v4.446h-1.403V16.18h1.234l.112 1.182c.45-.957 1.402-1.407 2.355-1.407 1.234 0 2.13.563 2.468 1.576.448-1.068 1.514-1.575 2.58-1.575 1.906 0 2.803 1.238 2.803 3.096v5.518h-1.402zM129.21 24.68c-.73 0-1.234-.562-1.234-1.294-.505.844-1.514 1.35-2.692 1.35-1.907 0-2.86-1.294-2.86-2.59 0-1.068.673-2.476 2.972-2.645l2.524-.167v-.62c0-.394-.056-.9-.45-1.294-.28-.283-.672-.452-1.345-.452-.785 0-1.233.225-1.514.507-.28.28-.39.62-.39 1.013h-1.347c0-.788.28-1.295.73-1.745.56-.62 1.57-.9 2.578-.9 1.627 0 2.525.675 2.917 1.632.168.394.224.788.224 1.295v4.053c0 .45.17.563.45.563.168 0 .337-.057.337-.057v1.07c-.28.224-.56.28-.898.28zm-1.29-4.165l-2.243.112c-.842.057-1.85.45-1.85 1.52 0 .732.448 1.464 1.625 1.464.617 0 1.29-.224 1.74-.675.503-.506.728-1.238.728-1.914v-.505zM135.602 17.475c-.673 0-1.178.28-1.57.675-.673.62-.785 1.802-.785 2.702v3.716h-1.402V16.18h1.234l.11 1.464c.45-1.014 1.46-1.52 2.468-1.52.224 0 .45 0 .673.056v1.35c-.223-.055-.504-.055-.728-.055zM143.34 24.568l-2.635-4.053-1.626 1.8v2.253h-1.403v-11.99h1.402V20.4l3.756-4.222h1.682l-2.972 3.32 3.308 5.068M152.76 20.796h-5.887c0 .788.28 1.576.785 2.083.393.393.897.618 1.514.618.673 0 1.178-.17 1.57-.563.224-.225.393-.45.505-.9h1.346c-.112.844-.617 1.632-1.29 2.083-.617.394-1.346.62-2.13.62-1.178 0-2.132-.508-2.75-1.24-.672-.788-1.064-1.914-1.064-3.096 0-1.013.167-1.914.616-2.702.617-1.013 1.682-1.745 3.14-1.745 1.065 0 1.907.394 2.523 1.07.672.73 1.065 1.8 1.065 2.927l.056.844zm-1.906-2.927c-.336-.45-.897-.79-1.626-.79-1.514 0-2.243 1.24-2.3 2.478h4.487c-.056-.563-.28-1.24-.56-1.69zM157.247 24.68c-1.794 0-2.3-1.125-2.3-2.25v-5.01h-1.625v-1.184h1.626v-2.14l1.402-.336v2.476h2.467v1.183h-2.467v4.84c0 .788.336 1.126 1.12 1.126.618 0 1.46-.17 1.46-.17v1.24c-.393.056-.954.224-1.683.224z"></path></g></svg>
                    </div>
                </Link>
                
                <Link style={anchorCss} to="/about"><div style={tabTextCss}>About</div></Link>
                <Link style={anchorCss} to="/"><div style={tabTextCss}>Home</div></Link>
            </div>
            
            <Route exact path="/" component={() => (<Home superhomeTitle={superhomeTitle}/>)}/>
            <Route path="/about" component={() => (<About/>)}/>
        </div>
    </BrowserRouter>,
    window.document.getElementById("app")
);
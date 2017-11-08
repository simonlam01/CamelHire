import React from "react";

var searchGadgetContainerCss = {
    "height": "120px",
    "width": "1024px",
    "backgroundColor": "#413d54",
    "position": "absolute",
    "top": "640px",
    "left": "80px"
};

var locationContainerCss = {
    "width": "calc(50% - 262px)",
    "display": "inline-block",
    "height": "100%",
    "marginLeft": "10px"
};

var dateContainerCss = {
    "width": "115px",
    "display": "inline-block",
    "height": "100%",
    "marginLeft": "10px"
};

var otherContainerCss = {
    "width": "70px",
    "display": "inline-block",
    "height": "100%",
    "marginLeft": "10px"
};

var searchButtonContainerCss = {
    "backgroundColor": "#e60",
    "width": "120px",
    "display": "inline-block",
    "height": "100%",
    "float": "right",
    "marginLeft": "10px",
    "border": "none"
};

var selectBoxHeadingCss = {
    "fontSize": "13px",
    "paddingTop": "10px",
    "paddingBottom": "8px",
    "paddingLeft": "0",
    "opacity": ".8",
    "color": "#fff",
    "position": "absolute"
};

var selectBoxContainerCss = {
    "position": "absolute",
    "top": "35px"
};

var locationSelectBoxCss = {
    "WebkitAppearance": "none",
    "backgroundColor": "white",
    "border": "0",
    "borderRadius": "0",
    "height": "40px",
    "padding": "7px 25px 7px 7px",
    "textAlign": "left",
    "outline": "0",
    "fontSize": "15px"
};

var otherSelectBoxCss = {
    "WebkitAppearance": "none",
    "backgroundColor": "white",
    "border": "0",
    "borderRadius": "0",
    "height": "40px",
    "padding": "7px 25px 7px 7px",
    "textAlign": "left",
    "outline": "0",
    "fontSize": "15px",
    "width": "70px"
};

var dateSelectBoxCss = {
    "WebkitAppearance": "none",
    "backgroundColor": "white",
    "border": "0",
    "borderRadius": "0",
    "height": "40px",
    "padding": "7px 25px 7px 7px",
    "textAlign": "left",
    "outline": "0",
    "fontSize": "15px",
    "width": "115px"
};

var searchButtonTextCss = {
    "textAlign": "center",
    "top": "50px",
    "position": "absolute",
    "paddingLeft": "30px",
    "color": "white"
};

export class SearchGadget extends React.Component{
    render(){
        return(
            <div style={searchGadgetContainerCss}>
                <div style={locationContainerCss}>
                    <div style={selectBoxHeadingCss}>Departure from</div>
                    <div style={selectBoxContainerCss}>
                        <select style={locationSelectBoxCss}>
                            <option value="">Select Location</option>
                            <optgroup label="region">
                                <option label="London - All Airports (LON)" value="5310a3fa823ab0522c0a32d4" defaultValue="selected">London - All Airports (LON)</option>
                                <option label="Midlands (Any)" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                                <option label="North East  (Any)" value="5497cee30cbc4f87392ddd06">North East  (Any)</option>
                                <option label="North West  (Any)" value="5497d3cbaa00dc24a55efddc">North West  (Any)</option>
                                <option label="Northern Ireland  (Any)" value="5497d13baa00dc24a55efdd7">Northern Ireland  (Any)</option>
                                <option label="Scotland  (Any)" value="5497d402aa00dc24a55efddd">Scotland  (Any)</option>
                                <option label="South East (Any)" value="5497d46aaa00dc24a55efdde">South East (Any)</option>
                                <option label="South West and Wales (Any)" value="5497d4e3aa00dc24a55efddf">South West and Wales (Any)</option>
                            </optgroup>
                            <optgroup label="airport">
                                <option label="Aberdeen" value="528cc236e4b0ec1df53b28e0">Aberdeen</option>
                                <option label="Belfast" value="528cc236e4b0ec1df53b28b3">Belfast</option>
                                <option label="Belfast City" value="528cc236e4b0ec1df53b28b4">Belfast City</option>
                                <option label="Birmingham" value="528cc236e4b0ec1df53b28b6">Birmingham</option>
                                <option label="Bournemouth" value="528cc236e4b0ec1df53b28c6">Bournemouth</option>
                                <option label="Bristol" value="528cc236e4b0ec1df53b28c2">Bristol</option>
                                <option label="Cardiff" value="528cc236e4b0ec1df53b28b2">Cardiff</option>
                                <option label="Doncaster Sheffield" value="528cc236e4b0ec1df53b2912">Doncaster Sheffield</option>
                                <option label="Durham Tees Valley" value="528cc236e4b0ec1df53b28d8">Durham Tees Valley</option>
                                <option label="East Midlands" value="528cc236e4b0ec1df53b28d9">East Midlands</option>
                                <option label="Edinburgh" value="528cc236e4b0ec1df53b28e3">Edinburgh</option>
                                <option label="Exeter" value="528cc236e4b0ec1df53b28f4">Exeter</option>
                                <option label="Glasgow" value="528cc236e4b0ec1df53b28e2">Glasgow</option>
                                <option label="Glasgow Prestwick" value="528cc236e4b0ec1df53b28e5">Glasgow Prestwick</option>
                                <option label="Humberside" value="528cc236e4b0ec1df53b28d3">Humberside</option>
                                <option label="Leeds Bradford" value="528cc236e4b0ec1df53b28d5">Leeds Bradford</option>
                                <option label="Liverpool" value="528cc236e4b0ec1df53b28c3">Liverpool</option>
                                <option label="London City" value="528cc236e4b0ec1df53b28cc">London City</option>
                                <option label="London Gatwick" value="528cc236e4b0ec1df53b28cb">London Gatwick</option>
                                <option label="London Heathrow" value="528cc236e4b0ec1df53b28b1">London Heathrow</option>
                                <option label="London Luton" value="528cc236e4b0ec1df53b28c4">London Luton</option>
                                <option label="London Southend" value="528cc236e4b0ec1df53b28ce">London Southend</option>
                                <option label="London Stansted" value="528cc236e4b0ec1df53b28f2">London Stansted</option>
                                <option label="Manchester" value="528cc236e4b0ec1df53b28b9">Manchester</option>
                                <option label="Newcastle" value="528cc236e4b0ec1df53b28d7">Newcastle</option>
                                <option label="Norwich" value="528cc236e4b0ec1df53b28f1">Norwich</option>
                                <option label="Southampton" value="528cc236e4b0ec1df53b28c7">Southampton</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div style={locationContainerCss}>
                    <div style={selectBoxHeadingCss}>Holidays Destination</div>
                    <div style={selectBoxContainerCss}>
                        <select style={locationSelectBoxCss}>
                            <option value="">Select Destination</option>
                            <optgroup label="region">
                                <option label="London - All Airports (LON)" value="5310a3fa823ab0522c0a32d4" defaultValue="selected">London - All Airports (LON)</option>
                                <option label="Midlands (Any)" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                                <option label="North East  (Any)" value="5497cee30cbc4f87392ddd06">North East  (Any)</option>
                                <option label="North West  (Any)" value="5497d3cbaa00dc24a55efddc">North West  (Any)</option>
                                <option label="Northern Ireland  (Any)" value="5497d13baa00dc24a55efdd7">Northern Ireland  (Any)</option>
                                <option label="Scotland  (Any)" value="5497d402aa00dc24a55efddd">Scotland  (Any)</option>
                                <option label="South East (Any)" value="5497d46aaa00dc24a55efdde">South East (Any)</option>
                                <option label="South West and Wales (Any)" value="5497d4e3aa00dc24a55efddf">South West and Wales (Any)</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div style={dateContainerCss}>
                    <div style={selectBoxHeadingCss}>Depart</div>
                    <div style={selectBoxContainerCss}>
                        <select style={dateSelectBoxCss}>
                            <option value="">Date</option>
                            <optgroup label="region">
                                <option label="Everyday im shuffling" value="5310a3fa823ab0522c0a32d4" defaultValue="selected">London - All Airports (LON)</option>
                                <option label="d00t d00t skelet0n gun get ya" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div style={otherContainerCss}>
                    <div style={selectBoxHeadingCss}>Nights</div>
                    <div style={selectBoxContainerCss}>
                        <select style={otherSelectBoxCss}>
                            <option value="">Nights</option>
                            <optgroup label="region">
                                <option label="When it comes to" value="5310a3fa823ab0522c0a32d4" defaultValue="selected">London - All Airports (LON)</option>
                                <option label="House every weekend" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div style={otherContainerCss}>
                    <div style={selectBoxHeadingCss}>Adult</div>
                    <div style={selectBoxContainerCss}>
                        <select style={otherSelectBoxCss}>
                            <option value="">Adults</option>
                            <optgroup label="region">
                                <option label="Nope" value="5310a3fa823ab0522c0a32d4" defaultValue="selected">London - All Airports (LON)</option>
                                <option label="No adults here sorry" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div style={otherContainerCss}>
                    <div style={selectBoxHeadingCss}>Child(0-17)</div>
                    <div style={selectBoxContainerCss}>
                        <select style={otherSelectBoxCss}>
                            <option value="">Children</option>
                            <optgroup label="region">
                                <option label="what is a" value="5310a3fa823ab0522c0a32d4" defaultValue="selected">London - All Airports (LON)</option>
                                <option label="children?" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <button style={searchButtonContainerCss}>
                    <div style={selectBoxHeadingCss}></div>
                    <div style={searchButtonTextCss}>Search Q</div>
                </button>
            </div>
        );
    }
}
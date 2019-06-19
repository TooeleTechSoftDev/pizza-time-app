import React, { Component } from 'react';
import './Customize.css';
import './Specials.css';

export default class Customize extends Component {

    //   constructor(props) {
    //        super(props)
    //    }

    render() {
        function s1(l, w, r, id) {
            if (l === 1) {
                w = 0;
                r = 0;
            } /* Left half select, Bounding */
            if (w === 1) {
                l = 0;
                r = 0;
            } /* Whole Select, Bounding */
            if (r === 1) {
                l = 0;
                w = 0;
            } /* Right half select, Bounding*/
            Swap(l, id, "left");
            Swap(w, id, "whole");
            Swap(r, id, "right");
            if (l + w + r > 1) {
                /* Error out method here, Tampering/fault found */
            } /* Error/Tampering, Bounding to avoid faults/issues */
            return ("left is "+l+"- whole is "+w+"- right is "+r)
        }  /* Incomplete, Need method for storing, retriving, sending custom list for order */
        function Swap(x, id, side) {
            var item = document.getElementById(id);
            if (x === 1) {
                /* item.getElementsByClassName(side)[0].style.color = "#222"; */
            } /* turns Color/element on */
            else {
                /* item.getElementsByClassName(side)[0].style.color = "#fff"; */
            } /* turns Color/element off */
            return (x, "set")
        } /* Incomplete, Need to setup ID of ingrediants/then classnames of right/whole/left */


        return (
            <div className="App" id="Custom">
                <div className="App-header">
                    Pizza<br />Customization
                </div> {/*Head Banner Space*/}
                <div id="Allergy">
                    <input type="checkbox" name="Alergy" value="allergy" /> Allergic
                </div> {/*Allergy*/}
                <div style={{ display: "inline-block", width: "100%" }}>
                    <div id="Customimg" style={{ float: "right", height: "300px", width: "60%", backgroundColor: "aqua" }}>
                        det det det
                </div> {/* Pizza Picture, Incomplete */}
                    <div style={{ float: "left", height: "300px", width: "40%", backgroundColor: "purple", textAlign: "left" }}>
                        <p className="selword">Size:</p>
                        <select className="choosers">
                            <option value="10inch">10" Inches</option>
                            <option value="12inch">12" Inches</option>
                            <option value="14inch">14" Inches</option>
                            <option value="16inch">16" Inches</option>
                        </select> {/*pizza Sizes*/}
                        <p className="selword">Sause:</p>
                        <select className="choosers">
                            <option value="regularsa">Regular</option>
                            <option value="lightreg">Light</option>
                            <option value="nonesa">No Sause</option>
                            <option value="specwhite">White Cream</option>
                        </select> <br /> {/*Pizza Sauses*/}
                        <p className="selword">Cut:</p>
                        <select className="choosers">
                            <option value="regularcu">Normal 8-Slices</option>
                            <option value="half">Four Corners 4-Slices</option>
                            <option value="hex">Wagon Wheel 6-Slices</option>
                            <option value="nonecu">No Cut</option>
                        </select> <br /> {/*Pizza Cut Options*/}
                        <p className="selword">Cheese:</p>
                        <select className="choosers">
                            <option value="regularch">Regular</option>
                            <option value="extra">Extra</option>
                            <option value="light">Light</option>
                            <option value="nonech">None</option>
                        </select> {/*Pizza Cheese Amount Choices*/}
                    </div> {/* Main pizza Customization*/}
                    Value is {s1(0, 1, 0)}  {/*Entry point, example.  Use of Oneclick per left/right/whole, Incomplete */}
                    <br />
                    Second Line
                </div> {/*Overall body*/}
            </div>
        )
    }
}


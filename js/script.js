// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area of a trapezoid.
 */
function calculateVolume () {
  // get radius from user
  let radius = parseFloat(document.getElementById('radius').value);

  // calculate volume
  let volume = (4/3 * Math.PI * radius ** 3);

  // display volume to user
  document.getElementById('volume').innerHTML = "The volume of a sphere with a radius of " + radius + " cm is " + volume.toFixed(2) + " cm<sup>3</sup>."
}

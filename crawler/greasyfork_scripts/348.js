// ==UserScript==
// @name         Discord Nitrolen: A Free Client-Based Nitro script
// @version      1.1
// @description  Basically Free Nitro. Join my server for updates: https://discord.gg/kS7P7gRZcg
// @author       ∫(Ace)³dx
// @match        https://discord.com/*
// @grant        none
// @license MIT
// @namespace https://greasyfork.org/users/449798
// ==/UserScript==

//V1.1 Fixed it not working if you navigated to Discord.com directly, before chats.
function yourFunction(){

// Find and replace text in all elements with IDs that match a pattern
var findText = ":bigsob:"; // Enter the text you want to find
var replaceText = '<img src="data:image/gif;base64,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">'; // Enter the text you want to replace it with

var elements = document.querySelectorAll('[id^="message-content-"]'); // Find all elements with IDs that start with "message-content-"
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.innerHTML = element.innerHTML.replace(new RegExp(findText, "g"), replaceText); // Replace all instances of the text with the new text
}
setTimeout(yourFunction, 10); //change the ms from 10 to higher if you want edited messages to be visible. 700 for stable, 1000 or above for slower/100% certainty it works.
}

yourFunction();
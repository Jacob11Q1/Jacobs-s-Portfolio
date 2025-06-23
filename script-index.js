/* For The Experience / Skills And Education Tabs */
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(event , tabname) {
    // Remove "active-link" from all tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Remove "active-tab" from all tab contents
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Add active classes to clicked tab and corresponding content
    // Use `this` to refer to the clicked element
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* For The Side Menu*/
var side = document.getElementById("sidemenu");

function openmenu(){
    side.style.right = "0";
}

function closemenu(){
    side.style.right = "-200px";
}
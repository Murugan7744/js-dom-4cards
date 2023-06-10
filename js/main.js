var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "images/team-1.jpg",
    head1: "Walter White",
    head2: "Chief Executive Officer"
},

{
    imgsrc: "images/team-2.jpg",
    head1: "Sarah Jhonson",
    head2: "Product Managerr"
},
{
    imgsrc: "images/team-3.jpg",
    head1: "William Anderson",
    head2: "CTO"
},
{
    imgsrc: "images/team-4.jpg",
    head1: "Amanda Jepson",
    head2: "Accountant"

}]
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    var image = document.createElement("img");
    div4.appendChild(image);
    image.src = element.imgsrc;

    var div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("box");

    var heading = document.createElement("h3");
    div5.appendChild(heading);
    heading.innerHTML = element.head1;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.head2;
})
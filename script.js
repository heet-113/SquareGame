let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

// 1st Square
s1.addEventListener("mouseenter", function() {
    let r = Math.floor(Math.random() * 100); 
    s1.innerHTML = `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave", function() {
    s1.innerHTML = "<h1>1</h1>";
});


// 2nd Square
let clr = "red";
s2.addEventListener("mouseenter", function() {
    if(clr == "red")
    {
        s2.style.backgroundColor = "red";
        clr = "green";
    }
    else if(clr == "green")
    {
        s2.style.backgroundColor = "green";
        clr = "blue";
    }
    else
    {
        s2.style.backgroundColor = "blue";
        clr = "red";
    }
});
s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
});


//3rd Square
s3.addEventListener("mouseenter", function() {
    let r1 = Math.floor(Math.random() * 256);   // Generates a random number between 0 and 256(not included)
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);

    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
});
s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
});

// 4th Square
s4.addEventListener("click", function() {

    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);

    s1.style.backgroundColor = `rgb(${r1},255,255)`;
    s2.style.backgroundColor = `rgb(255,${r3},255)`;
    s3.style.backgroundColor = `rgb(255,255,${r1})`;    
});
s4.addEventListener("mouseleave", function() {

    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";    
});
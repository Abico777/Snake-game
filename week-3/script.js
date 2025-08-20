// console.log("Hello World")
// let h2 = $("h2");
// console.log(h2);
// console.log($(".green"));
// let first = $(".h2-collection").even().css("background-color", "");
// let last = $(".h2-collection").odd().css("background-color", "black");
// console.log(first);
// console.log(last);
// let chose =  $("div").has("h3").css("background-color", "pink"); 

// console.log($("h1").empty());
// let hidden = $("h3").hide();
// console.log(hidden)
// let prepend = $("#myDiv").prepend($(".yellow"));
// console.log(prepend);
// let add = $(".red");
// add.addClass(" book pencil");
// console.log(add);
$("#hideme").on("click", function () {
    $(this).hide();
});
$("#showme").on("click", function () {
    $(this).prev().show();
});
async function displayData() {
    try {
        let response = await fetch("https://randomuser.me/api");
        let data = await response.json();
        let user = data.results[0];
        console.log(user);
        let usercontainer = document.getElementById("user-container");
        usercontainer.innerHTML = `
        <img src ="${user.picture.large}" alt = "user Picture">
        <h3> Name: ${user.name.first} ${user.name.last}</h3>
        <h3> Email: ${user.email}</h3>
        <h3> Location: ${user.location.city}, ${user.location.country}</h3>
        `;
    } catch (error) {
        alert("sorry, come back later");
        console.log(error)
    }
}
displayData();
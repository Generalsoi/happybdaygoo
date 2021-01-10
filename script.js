var intro = new Vue({
    el: "#intro",
    data: {
        name: "GOO",
        password: ""
    },
    methods: {
        onSubmit(){
            if (this.password === "goo"){
                window.location.href="birthday.html"
            } else{
                alert("Wrong password")
            }
        }
    }
})

var birthdayContent = new Vue({
    el: "#birthday-content",
    data: {
        message: "HAPPY BIRTHDAY SWEETHEART",
        image1: "./images/goo1.jpg",
        image2: "./images/goo2.jpg"
    }
})
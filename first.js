// Light / Dark mode toggle  
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "\u2B50";
    }else {
        themeBtn.textContent = "🌙";
    

    }
});
// Simple Console Greeting
console.log("Welcome Maavia Gulshan! Your graceful portfolio is live🚀");

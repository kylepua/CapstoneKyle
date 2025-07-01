 if (!sessionStorage.getItem("isLoggedIn")) {
      location.replace("../../login.html");
    }

    // 🛑 Block Chrome back button 
    //t
    window.addEventListener("DOMContentLoaded", () => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", () => {
        history.pushState(null, "", location.href);
      });
    });
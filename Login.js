
document.addEventListener("DOMContentLoaded", function () 
    {
      const signupForm = document.getElementById("signupForm");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      const passwordError = document.getElementById("passwordError");

      signupForm.addEventListener("submit", function (e) 
      {
        e.preventDefault();

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) 
            {
          passwordError.textContent = "Passwords do not match!";
        } 
        else 
        {
          passwordError.textContent = "";
          alert("Sign up successful!");
          
        }
      });
    });

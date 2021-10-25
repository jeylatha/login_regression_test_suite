describe("LoginFlow", function() {
    it("InvlaidLogin", function() {
        browser.url('https://the-internet.herokuapp.com/login');
        username= $('//input[@id="username"]');
        username.setValue("ar")
        password= $('//input[@id="password"]');
        password.setValue("arin");
        loginbutton= $('//*[@id="login"]/button/i');
        loginbutton.click();
        error= $('//*[@id="flash"]');
        expect(error).toHaveTextContaining("Your username is invalid!")


        
    });
    it("Login with only username",function() {
        username.setValue("ar")
        loginbutton.click();
        expect(error).toHaveTextContaining("Your username is invalid!")

    });
    it("Login with only Password",function() {
        password.setValue("SuperSecretPassword!");
        loginbutton.click();
        expect(error).toHaveTextContaining("Your username is invalid!")

    });
    it("Login special character in username ",function() {
        username.setValue("#!@#@#@@")
        password.setValue("SuperSecretPassword!");
        loginbutton.click();
        expect(error).toHaveTextContaining("Your username is invalid!")

    });

    it("Login special character in password",function() {
        username.setValue("tomsmith")
        password.setValue("#$#$$@##!");
        loginbutton.click();
        expect(error).toHaveTextContaining("Your password is invalid!")

    });
    it("Username empty ",function() {
        username.setValue("")
        password.setValue("#$#$$@##!");
        loginbutton.click();
        expect(error).toHaveTextContaining("Your username is invalid!")

    });
    it("Password empty ",function() {
        username.setValue("tomsmith")
        password.setValue(" ");
        loginbutton.click();
        expect(error).toHaveTextContaining("Your username is invalid!")

    });

    it("successLogin",function() {
        username.setValue("tomsmith")
        password.setValue("SuperSecretPassword!");
        loginbutton.click();
        success= $('//*[@id="flash"]');
        expect(success).toHaveTextContaining("You logged into a secure area!");
      

    });
  
});
import 'jasmine';
import Users from '../services/userService';

describe("User Class Test", function() {
        var user;
        beforeEach(()=>{
            user = new Users("Test@gmail.com", "Random", "Random2");
        })
        afterEach(()=>{
            user = null;
        })
        it("User get information", ()=>{
            expect(user.email).toBe("Test@gmail.com")
        })
        it("Access To Token",()=>{
            expect(user.accessToken).toBe("Random")
        })
        it("Access To Refresh Token",()=>{
            expect(user.RefreshToken).toBe("Random2");
        })
});
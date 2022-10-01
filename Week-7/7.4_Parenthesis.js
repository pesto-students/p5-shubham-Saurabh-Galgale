function parenCheck(str) {
    let check = [];
    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === "(") {
                check.push(str.charAt(i));
            }
            if(str.charAt(i) === "{") {
                check.push(str.charAt(i));
            }
            if(str.charAt(i) === "[") {
                check.push(str.charAt(i));
            }
            if (str.charAt(i) === ")") {
                if (check[check.length - 1] == "(") {
                    check.pop();
                }else{return false;}
            } 
            if (str.charAt(i) == "}") {
                if (check[check.length - 1] == "{") {
                    check.pop();
                }else{return false;}
            }
            if (str.charAt(i) == "]") {
                if (check[check.length - 1] == "[") {
                    check.pop();
                }else{return false;}
            }
        }
        return (check == 0);
    }else{
        return false;
    }
}

    console.log(parenCheck("[{]}"));


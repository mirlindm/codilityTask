function solution(ip) {
    let minLength = 4, maxLength = 12;
    let ipLength = ip.length;
    let finalAnswer = [];
    let ipToVerify = ip;

    if (ipLength < minLength || ipLength > maxLength) {
        return `Provided IP address: ${ip} is invalid`;
    }    
 
    // Logic to substring the ip address and create various possible combinations
    // Unfinished block of code below
    for (let i = 1; i < ipLength - 2; i++) {
        for (let j = i + 1; j < ipLength - 1; j++) {
            ipToVerify = ipToVerify.substring(0, j) + "."; // incomplete
                if (isIPAddressHelper(ipToVerify)) {
                    // more logic
                    finalAnswer.push(ipToVerify);
                }
                ipToVerify = ip;
        }
    }

    return finalAnswer.length
}

// Helper function to 
function isIPAddressHelper(ip) {

    let ipList = [], ex = "";
    for (let i = 0; i < ip.length; i++) {
        if (ip[i] == '.') {
            ipList.push(ex);
            ex = "";
        }
        else {
            ex = ex + ip[i];
        }
    }
    ipList.push(ex);
 
  
    for(let i = 0; i < ipList.length; i++) {
        if (ipList[i].length > 3 || Number(ipList[i]) < 0 || Number(ipList[i]) > 255) {
            return 0;
        }
 
        if (ipList[i].length > 1 && Number(ipList[i]) == 0) {
            return 0;
        }
 
        if (ipList[i].length > 1 && Number(ipList[i]) != 0) {
            return 0;
        }
    }
    return 1;
}

const result = solution('22321412')
console.log('Number of ip addresses we can obtain from provided IP is: ', result);
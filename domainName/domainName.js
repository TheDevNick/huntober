/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet

- function - takes in a url (string) - parses out just the domain name - returns it as a string. 

- string could include special chars - no empty strings 
- always be returning string - 
- 
- 
*/


function domainName(url){
    //use replace on part of url I want gone
    url = url.replace('https://', '')
    url = url.replace('http://', '')
    url = url.replace('www.', '')
    // split the url and put into an array and access the first element in that array
    return url.split('.')[0]
}

console.log(domainName("http://github.com/carbonfive/raygun"), 'github')
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")
console.log(domainName("www.HollinsDigital.com"), "HollinsDigital")

module.exports = domainName
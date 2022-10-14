const domainName = require('./domainName')

test('domainName is a function', () => {
    expect(typeof domainName).toEqual('function')
})

test('gets only the domain name', () => {
   expect(domainName("www.HollinsDigital.com")).toEqual("HollinsDigital")
})


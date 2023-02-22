# kickstart
A web3 crowd funding website similar to Kickstarter. Project as part of Ethereum and Solidity: The Complete Developer's Guide course. This app is a web3-powered
crowdfunding campaign. People wanting to raise funds can create a campaign as a smart contract on the ethereum blockchain. People who wish to fund the 
campaigns will send funds to the contract and will become approvers. Every expense needs to be approved by the community and once over half of the approvers
have approved, the funds can be disbursed directly to the wallet of the service provider.

# Project Setup
- npm install web3
- npm install solc@0.4.17
- npm install ganache-cli
- npm install mocha
- npm install fs-extra
- npm install next@12
- npm install react
- npm install react-dom

# Solidity and Solidity Compiler
This application uses a slightly older version of Solidity and the Solidity compiler. The reason for that is that Solidity is a language that is still changing
very fast, so we wanted to use an older stable version of the language and not worry too much about the latest changes.

# Ganache
Ganache serves as the local ethereum test network.

# Mocha
Mocha is a test running framework. We can use Mocha to test any Javascript code we want, such as a front end app, a back end app and even ethereum code.

# Next.js
We use Next.js as a framework around React. Next.js has a few interesting features. It comes with a mechanism to do routing between pages out of the box.
It does server side rendering which is important when working with ethereum because most people don't have a Metamask wallet installed in their browsers.
The app has to do many calls to the Solidity contract to load data. If the Javascript was run on a browser without Metamask installed, this would throw
an error. So we execute all those call server-side and generate an HTML with the information returned and just serve that to the browser, which means anyone
will be able to load the application regardless of having Metamask installed. It also has the added benefit of showing something on screen much faster than
if the browser had to run all the code. Finally, Next.js comes with Hot Module reload.


# About The Project

## Introduction

**Project Summary**:

This project is a full-stack web development endeavor with the goal of creating a user-friendly news-sharing platform. Users are able to post news and news links, then evaluate content based on its appeal through voting. The project encompasses both front-end and back-end technologies, along with the implementation of various features.

**Key Highlights**:

1. **Front-End Proficiency**: In the realm of front-end development, the project prominently showcases the application of the React library. This includes the use of React Hooks such as useState and useEffect to craft interactive user interfaces. Through React, we have successfully realized dynamic user interfaces, enabling users to effortlessly post news and cast their votes.

2. **Back-End Data Management**: The project harnesses the Supabase technology stack to create and maintain databases and APIs. This ensures the reliable storage and secure retrieval of data, providing essential data support to the front end. Proficiency in back-end data management enables efficient storage and retrieval of news data, delivering a high-quality user experience.

3. **Rich Functionality**: The project encompasses a variety of functionalities, including the "voting functionality." Users can vote on news items, marking them as interesting, mind-blowing, or false, thereby enhancing user engagement and content evaluation. Additionally, data validation is implemented to ensure the accuracy and credibility of user-provided data, ultimately enhancing data quality and reliability.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

**Major frameworks and libraries**:

* [![JavaScript][JavaScript-icon]][JavaScript-url]
* [![React][React-icon]][React-url]
* [![HTML][HTML-icon]][HTML-url]
* [![CSS][CSS-icon]][CSS-url]
* [![Supabase][Supabase-icon]][Supabase-url]

[React-url]:https://reactjs.org/
[React-icon]:https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[Supabase-url]:https://supabase.com/
[Supabase-icon]:https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[HTML-url]:https://html.com/
[HTML-icon]:https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[CSS-url]:https://www.css3.com/
[CSS-icon]:https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[JavaScript-url]:https://www.javascript.com/
[JavaScript-icon]:https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

1. Clone the repo
   ```sh
   gh repo clone vickyzhang7/Real-or-Fake-Facts
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `script.js` and `supabase.js`
   ```js
   async function loadFacts() {
      const res = await fetch("YOUR FACTS",{headers: {apikey: "YOUR API KEY",authorization: "Bearer YOUR API KEY",},});;
   ```
4. Start
   ```sh
   npm start
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## interface screenshot

1. **Database Browsing**:

Users can access a variety of news and information stored in the database. This allows users to explore the contents of the database, including news, articles, and other related information.

<img width="1414" alt="Screen Shot 2023-11-01 at 7 14 07 PM" src="https://github.com/vickyzhang7/Real-or-Fake-Facts/assets/130918669/039961b2-cf7e-4d96-bb49-d0d59523b6f7">
<br>

2. **News Posting and Storage**:
   
Users can post news they've come across, adding links and categories to the news. This information is securely stored in the database for future reference and sharing. This provides users with a convenient platform to share their discoveries and interests with other users.

<img width="1385" alt="Screen Shot 2023-11-01 at 7 16 06 PM" src="https://github.com/vickyzhang7/Real-or-Fake-Facts/assets/130918669/178e626b-ce8c-45b7-94ed-b81e71cd9bdb">

<br>   

3. **Real-time Voting and Sorting**: 

Users can vote on news articles, including rating them for their level of interest, how mind-blowing they are, and their credibility. All voting data is recorded and used to re-sort the news list. News articles are ranked based on the number of "interesting" votes, ensuring that users see the most intriguing news first. This provides an interactive and dynamic news browsing experience.

<img width="1406" alt="Screen Shot 2023-11-01 at 7 17 03 PM" src="https://github.com/vickyzhang7/Real-or-Fake-Facts/assets/130918669/74450d76-7c07-4249-bd60-eaf06ffe7cb7">


<p align="right">(<a href="#readme-top">back to top</a>)</p>




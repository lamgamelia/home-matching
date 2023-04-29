# Home-Designer Matching Platform

## Problem Statement:

* Home owners are often faced with the challenge of finding the right interior designer to bring their dreamy home to life. With the abundance of designing companies out at the market, it takes the home owners countless meetings and time to narrow their searches. 
* Designers, on the other hand, are struggling to find new clients and expand their business. 
* There is a need for a platform that can 1) connect home owners directly with designers, and 2) shorten the searching process through matching algorithm according to features that home owners take priority in.

## Key Features:

### Matching of Homeowner and Designer
Steps:
1. Home owner registration: Home owners should be able to register on the platform via email or google for quicker access. 

2. Matching to designers: Upon registration/login, home owners access the 'Find My Designer!' page and provide information relevant to their design preferences, including:
- Property condition: New, Old
- Property type: HDB, Condo, Land, Commercial
- Budget range
- Design style indicated by sample design images

    Once completed, top 3 matching designers will be presented. User can access the designer's profile pages for more information on their previous work and contact details such as email and phone no. 

3. Designer registration: Designers register/login on the platform via email or google. They can then access their 'My Profile' page on which they can update some key highlights of their work and also upload images of past work.

4. In-app Messaging: The platform should allow home owners to chat with platform admin, to communicate and discuss on their requests and needs

5. Review and rating systems: The platform allow home owners to leave review for designers that they engaged or interact with. Other homeowners can benefit from these reviews subsequently.

Running the project:
1. Back-end: 
    - cd $```cd/home/project-course-homey/api``` to api folder
    - perform $```npm install```
    - start mongo db $```systemctl start mongod```
    - initialise database homey with some dummy data $```mongo homey scripts/init.mongo.js```
    - update node version to latest v18.16.0 $```nvm install --lts```
    - $```screen npm start``` to start the back-end server
2. Front-end:
    - cd $```cd/home/project-course-homey/ui``` to api folder
    - compile the code $```npx webpack```
    - $```screen npm start``` to start the front-end server
    - Web can then be accessed on http://localhost:3000/

## Problem Statement
### Is the problem still relevant after some years?
Yes, the problem of home owners struggling to find the right designer among the increasing pool of designers remain relevant even after some years. Given by past trend - 44,500 designers in 2017 to 57,400 designers in 2022, we would expect the pool of designers will grow even further in the future. Thus, the need for a platform that can effectively connect home owners with satisfiable designers is likely to persist in the future.


### What is the challenging aspect of the problem?
The challenging aspact of this problem is to effectively matches home owners with designers that suits their need. A variety of factors including budget, location, design style, lifestyle etcs that have to be considered by the home owners when selecting their designer and different home owners may place different emphasis on the different factors. In addition, some home owners may not even realised their true concerns until several meetings with different designers, causing huge amount of time wasted for both home owners and the designers.

### What is our approach? What is novel about it?
The platform aims to be a one-stop channel for both homeowners and designers. Homey encourage designers to showcase their projects by uploading and updating relevant information and pictures. Homeowners meanwhile can also leave reviews that would be useful for the rest of the community. 

By analysing some of the home owners’ inputs i.e. lifestyle, picture selection, picture upload etc, the platform will be able to effectively match them with designers with similar profiles. By using matching functionality, it can help to sieve out designers who have less experience in the design styles that home owners looking for, resulting in huge time saving for both the home owners and the designers.

As the platform grows, machine learning can also be implemented on the data to optimise the searching algorithm, which will in turn result in more accurate matches for the home owners.

### How will you prevent others from copying your solution?
By applying patents on the matching algorithm and the design of the application, it can help to provide some legal protection. However, having patent on the matching algorithm might review the code, thus,  we may also choose to ensure the data and code are safely secured, applying the relevant industry-standard security measures to prevent unauthorised access to the code and data.

## Solution Architecture
Initial draw up of wireframes is done via Miro mainly to illustrate the landing pages.

The project is highly modularise, with the back-end organised within api folder and front-end within ui folder. For the back-end, resolvers are organised within server/resolvers folder. Each resolver that pertains to the same db collections are mostly organised within the same .js file within the folder. For the front-end, each component and pages are maintained within separate jsx file and exported ot the main App.jsx file. This modularisation eases collaboration across different team members.

Database collections are initialised in the init.mongo.js file. Overall, we maintain effectively small number of collections for designers, gallery, messages, review and users. 

## Competition Analysis
Competitor products that exist in current market, such as https://www.homerenoguru.sg/ has mostly focused on presenting information to users and less personalised search that is implemented in our matching functionality.
Besides, we also allow designers to easily customise/update their landing pages allowing the most recent projects to be showcased. While other competitor may also provide similar matching functionality such as https://www.redbrickhomes.sg/, there is lack of interaction in the platform which we have enhanced through homeowner reviews and on-site chat box.


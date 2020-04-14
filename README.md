# spotify-example

Made by Humberto Gonçalves


After downloaded the project, you need the nodejs and npm to execute it. Make sure you have them installed in your machine.
## How to install:
In you command line of you OS, type:
```
  npm install
```
  
 Wait some minutes to finish to install the dependencies
 
 You can start the project in development mode by:
## 1 - development mode:  
 
``npm run start``
 
## 2 - build development mode:
```
      npm run build:development 
      npx serve -s build
```
      
## 3 - build homolog mode:
```
      npm run build:homolog 
      npx serve -s build
```
      
## 4 - build production mode:
```
      npm run build:production 
      npx serve -s build
```
      
After one of that execute if successful, the default browser will be opened.
If you have some problem with the command line or other thing.
Try to contact by email 


## 5 - Tests:
The tests were made with jest and enzyme. besides that I'd tried to make storybook and cypress tests.
It will run all tests with some features enable

```
      npm run tests 
      npm run tests 
      npm run test:nowatch  
      npm run test:watch
      npm run test:collectcoverage
      npm run test:coverage
    
```
      

## 6 - Husky:
There is a pre commit husky to fix with eslint and prettier 

      

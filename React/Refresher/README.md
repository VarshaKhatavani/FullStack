1. npx parcel index.html
   => It will host app on server
2. npx: it will execute the package
3. Remove the CDN react script & install below packages
   => npm install react
   => npm i react-dom
4. Now no longer we need CDN
5. npx parcel build index.html  
   => used to make your code production ready
   => it will create parcel-cache folder & dist folder
6. put both of this folders in gitignore

---

Steps to create a store using Redux

1. Create a store
2. Create a slice
3. Add slice to store
4. Read Cart Items of Store/Sync cart items with store = using useSelector
   (Subscribe to store)

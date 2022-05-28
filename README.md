# Mercadona Choco - App

Mini catalog of chocolate products from Mercadona available for consult in web and mobile version.

You can visit it at: XXX

## Description:

This mini App, built as part of a technical test, show a catalog of chocolate products from Mercadona extracted from a free API of the company (https://tienda.mercadona.es/api/v1_1/categories/92). The catalog shows a list of products by category whose information can be consulted in detail. Moreover, it allows creation of new categories and products, as well as their editing and deletion, outside of data provided by the API.

## Data Structure:

### Front-End Routes (React App):

| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | NavBar & HomePage    | public      | Regular home page with direct access to the list of categories |

###  Available Scripts

In the project directory, you can run `npm start` to run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser; the page will reload when you make changes.
You may also see any lint errors in the console.
⚠️ To access API data from browser, you may need to enable <i>Moesif Origin & CORS Changer</i> extension in order to unlock CORS policy and fix 'Access-Control-Allow-Origin' error. If not, the app may redirect to Error 500 when trying to get the data.

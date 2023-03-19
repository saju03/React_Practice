

import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 key='logo' className="logo"> swggy</h1>


)

const Header = () => {
    return (
        <div className="navbar">

            <Title />
            <div className="navbar-items">
                <ul >
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>

            </div>

        </div>

    )
}




const restraunt = [{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "75518",
        "name": "Masafi Restaurant",
        "uuid": "d3a010bb-acd3-4207-90e7-ffff865e89cd",
        "city": "13",
        "area": "Vyttila",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "mnuf4mp2usblhlaucpik",
        "cuisines": [
            "South Indian",
            "Kerala",
            "Arabian",
            "Chinese"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
            "restaurant": "masafi-restaurant-vyttila-vyttila",
            "city": "kochi"
        },
        "cityState": "13",
        "address": "Safdar Hashmi Ln, Vyttila, Ernakulam, Kerala 682019, India",
        "locality": "Safdar Hashmi Ln",
        "parentId": 20551,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
            "header": "15% off",
            "shortDescriptionList": [
                {
                    "meta": "15% off | Use PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "descriptionList": [
                {
                    "meta": "15% off | Use code PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
            "header": "15% OFF",
            "shortDescriptionList": [
                {
                    "meta": "Use PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "descriptionList": [
                {
                    "meta": "15% off | Use code PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3100,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3100",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
            "restaurantId": "75518",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 3.5999999046325684,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "434374",
        "name": "Arabian Dreams",
        "uuid": "72cdcf41-5724-4554-ae68-d7b4fc4eed29",
        "city": "13",
        "area": "Kadavanthra",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bxxxzl7bbcgw4ym7yoc2",
        "cuisines": [
            "Arabian",
            "Kerala"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 5,
        "slugs": {
            "restaurant": "arabian-dreams-panampilly-nagar-panampilly-nagar",
            "city": "kochi"
        },
        "cityState": "13",
        "address": "54/3433,METRO PILLER NO 798,KADAVANTHRA, Ernakulam, Kerala-682020",
        "locality": "Ernakulam",
        "parentId": 4750,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
            "header": "30% off",
            "shortDescriptionList": [
                {
                    "meta": "30% off | Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "descriptionList": [
                {
                    "meta": "30% off up to ₹75 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
            "header": "30% OFF",
            "shortDescriptionList": [
                {
                    "meta": "Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "descriptionList": [
                {
                    "meta": "30% off up to ₹75 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
            "restaurantId": "434374",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "54755",
        "name": "Chicking",
        "uuid": "82dd85ad-9b31-430d-a28f-72f205bdaca6",
        "city": "13",
        "area": "Vyttila",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "e2om7azrntnvdaqyxwlx",
        "cuisines": [
            "Snacks",
            "Grill",
            "Fast Food",
            "American",
            "Pizzas",
            "Mexican",
            "Beverages"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 5,
        "slugs": {
            "restaurant": "chicking-fried-chicken-gold-souk-granda_-vytilla-vyttila",
            "city": "kochi"
        },
        "cityState": "13",
        "address": "Shop 3, Gold Souk GrandA_ Mall, Vyttila, Kochi",
        "locality": "Gold Souk Grande",
        "parentId": 251,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
                {
                    "meta": "50% off | Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "descriptionList": [
                {
                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
                {
                    "meta": "Use TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "descriptionList": [
                {
                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 4300,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 4300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4300",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
            "restaurantId": "54755",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 5000,
        "new": false
    },
    "subtype": "basic"
},
{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "53857",
        "name": "Night Chef",
        "uuid": "9015a628-290e-4d7a-acc8-8a5765a9678e",
        "city": "13",
        "area": "Vyttila",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "tntywkskoi4hf9pgxwze",
        "cuisines": [
            "South Indian",
            "Chinese",
            "Street Food"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
            "restaurant": "night-chef-vyttila-panampilly-nagar",
            "city": "kochi"
        },
        "cityState": "13",
        "address": "Near State Bank of India, Vyttila, Kochi",
        "locality": "Varekat Building",
        "parentId": 20909,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3100,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3100",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
            "restaurantId": "53857",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
}]


const RestaurantCard =({
name,
cuisines,
lastMileDistance,
cloudinaryImageId

}) =>{
    return(

       
        <div className="card">
            
         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="res img" />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{lastMileDistance}</h4>
        
        </div>
       
    )
}



const Body = ()=>{

    return(
        <div className="body">
            {restraunt.map((rest)=>{
                return <RestaurantCard {...rest.data}/>
                
               

            })}
            
       
        </div>
    )

}





const Head1 = () => {
    return (
        <div>
            
            <Header />
            <Body/>

        </div>
    )
}

// const headding = React.createElement('h1',{id:'head'},'hello')
// const headding2 = React.createElement('h2',{id:'head2'},'haii')
// const div = React.createElement('div',{id:'div'},[headding,headding2,head1])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Head1 />)
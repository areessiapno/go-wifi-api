"use strict";

const GoWifiAPI = require("../lib");

var client = new GoWifiAPI({
    partnerId: "yourpartnerId"
});

client.payload({
	"transaction_id": "yourtransactionid",
	"gcash_transaction_id": "yourgcashtransactionid",
	"country_code": "yourcountrycode",
	"mobile_number": "yourmobilenumber",
	"site_code": "yoursitecode",
	"campaign_slug": "yourcampaignslug"},(err,body,result)=>{
	console.log(result.toJSON());
});

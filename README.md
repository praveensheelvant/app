# Node express app

By default app will run http://localhost:4545

App healtcheck get end point http://localhost:4545/healtcheck shoul respnse "ok"

Document create post endpoint http://localhost:4545/api/records 
with payload 
[
  	{
		"key": "TAKwGc6Jr4i8Z487",
		"totalCount": 2800,
		"createdAt": "2017-01-28T01:22:14.398Z",
	  	"updatedAt": "2017-01-28T01:22:14.398Z"
	}
]
Response: inserted multiple records

Document get post endpoint http://localhost:4545/api/getrecords
with payload 
{
	"startDate": "2017-01-26",
	"endDate": "2018-02-02",
	"minCount": 2500,
	"maxCount": 3000
}
Response: Documents objects

## Install dependencies
```
npm i
```
## Dev
```
npm run dev
```
## Test
```
npm run test

## Start server
```
npm run serve

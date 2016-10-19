#Infos api

##Bookings
### GET

#### /api/v1.0/bookings

filters in query :

Example :
/api/v1.0/bookings?startDate='2015-08-05T18:44:55.287Z'&endDate='2015-08-09T18:44:55.287Z'

list of filters :
- startDate (Date ISOString)
- endDate (Date ISOString)
- minDuration (Number of minutes)
- maxDuration (Number of minutes)
- supplierId (Number)
- offset
- limit
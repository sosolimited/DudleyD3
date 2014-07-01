DudleyD3
=============

A Sosolimited project.
Based on the WGW internal D3 dashboard.

### Live version
http://sosolimited.com/dudley/DudleyD3/

### DEV Notes

* About the data API 
  * Specs : http://wiki.open311.org/GeoReport_v2
  * Other docs : [here](https://docs.google.com/a/sosolimited.com/document/d/1rHFs3AdrBHuPhOHDcUGEkRCRM87SfSTD4kfAApdZS2Q/edit), [here](https://docs.google.com/a/sosolimited.com/document/d/1iM1XA-x_TL8eCNaQ5YKy2DPdTTaL4FyJ27L0P9E514I/edit)
  * GET requests URL : https://mayors24.cityofboston.gov/open311/v2/requests.json?page=1&page_size=250
  * the max number of returned results per page seems to be 250 (doesn't matter if you ask for more with tieh 'page_size' param)
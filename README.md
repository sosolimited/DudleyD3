DudleyD3
=============
Copyright Sosolimited 2014.

### Overview

This is a web-based dashboard to explore data from the [BOS:311](https://mayors24.cityofboston.gov) app. The app uses [D3](https://d3js.org) (version 3) to visualize incoming 311 data in multiple charts and form-factors.

This dashboard was used during the research phase of [Crisscross Signal Spire](https://github.com/sosolimited/Dudley-Square-Lighting).


### Software Setup

To clone this repository locally, type the following into terminal:

```bash
git clone https://github.com/sosolimited/DudleyD3.git
```

All dependencies are included in the repository.

To run the software locally, navigate to the directory containing index.html and launch a simple python server:

```bash
cd DudleyD3
python -m SimpleHTTPServer 8001
```

The page will now be available at http://localhost:8001 in the web browser.

### DEV Notes

* About the [BOS:311 API](https://mayors24.cityofboston.gov):
  * Specs : http://wiki.open311.org/GeoReport_v2
  * Other docs : [General notes about data relating to City of Boston (311, MBTA tracker, etc.](https://docs.google.com/a/sosolimited.com/document/d/1rHFs3AdrBHuPhOHDcUGEkRCRM87SfSTD4kfAApdZS2Q/edit), [Notes about BOS:311 app, including example reports](https://docs.google.com/a/sosolimited.com/document/d/1iM1XA-x_TL8eCNaQ5YKy2DPdTTaL4FyJ27L0P9E514I/edit)
  * GET requests URL : https://mayors24.cityofboston.gov/open311/v2/requests.json?page=1&page_size=250
  * The max number of returned results per page seems to be 250 (doesn't matter if you ask for more with the 'page_size' parameter)
  
  ### Example Charts
  
  Here are some examples of charts included in the app:
  
  
  A chart showing 311 reports, mapped by longitude and latitude. Colors indicate the type of report:
  
  <img src="https://github.com/sosolimited/DudleyD3/blob/master/readme_images/Example_chart.png" width="650" />  
  
  Numbers of 311 events throughout the day. Requests are colored by event status (new 311 report or closed / resolved 311 report):
<img src="https://github.com/sosolimited/DudleyD3/blob/master/readme_images/Stacked_requests_chart.png" width="650" />  
  
A pie chart showing 311 report breakdown by category:
  <img src="https://github.com/sosolimited/DudleyD3/blob/master/readme_images/request_type_pie_chart.png" width="650" />  

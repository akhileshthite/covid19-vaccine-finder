# COVID-19 Vaccine Finder

Link: http://ec2-3-108-58-222.ap-south-1.compute.amazonaws.com:8080
<img align="center" src="https://github.com/AkhileshThite/COVID-19-VaccineFinder/blob/main/static/images/ipad.png" width="400" height="400"></img>

• COVID-19 Vaccine Finder website to check the available slots for COVID-19 Vaccination Centers from [coWIN API](https://apisetu.gov.in/public/marketplace/api/cowin) in India. With this website you'll quickly be able to register for vaccines by checking the most updated information from coWIN API like center with time slots, age limit & availability of both doses.<br>
• coWIN API is blocking the request outside of India (giving 403 forbidden error, before AWS EC2 instance I deployed this web app on GCP and Heroku but both gave me same 403 forbidden error.<br>
• It's working perfectly fine on AWS EC2 instance Asia-Pacific-south-1 (Indian server)


## Technical Details
**Languages:**
```Python3, HTML5, CSS3, JavaScript```

**Frameworks:** 
```Flask```

**Platforms:** 
```AWS EC2 instance (working), GCP, Heroku```

**Database:**
```Firebase```






## Running the project
1. Clone the repository  by running below command -
```
git clone https://github.com/AkhileshThite/COVID-19-VaccineFinder.git
```

2. Open the folder by running below command -
```
cd COVID-19-VaccineFinder
```

3.  Install all the requirements by running below command -
```
pip install -r requirements.txt
```
This will install all the required libraries to run this project.

4. Run app.py using below command to start Flask API
```
python app.py
```
5. Navigate to URL "http://0.0.0.0:8080/"

• Now, You should be able to view the homepage.

• Enter PIN & DATE. Now, you should be able to see all the information from COWIN API.


## Contributors
I highly encourage you to raise issues & PRs for new enhancements.

| [Commands](docs/git-commands.md) |
| ------------- |

## License ⚖️
[MIT license](https://github.com/AkhileshThite/COVID-19-VaccineFinder/blob/main/LICENSE) 

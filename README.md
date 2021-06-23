# COVID-19 Vaccine Finder

Link: http://ec2-3-108-58-222.ap-south-1.compute.amazonaws.com:8080
<img align="center" src="https://github.com/AkhileshThite/COVID-19-VaccineFinder/blob/main/static/images/ipad.png" width="400" height="400"></img>
COVID-19 Vaccine Finder website to check the available slots for COVID-19 Vaccination Centers from [coWIN API](https://apisetu.gov.in/public/marketplace/api/cowin) in India. With this website you'll quickly be able to register for vaccines by checking the most updated information from coWIN API like center with time slots, age limit & availability of both doses.



API is blocking the request outside of India.


## Technical Details
**Languages:**
```Python3, HTML5, CSS3, JavaScript```

**Frameworks:** 
```Flask```

**Platform:** 
```AWS EC2 instance, Heroku```

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


## Contribute

| [VS Code Users](docs/VScode_users.md) |
| ------------- |

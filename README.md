# COVID-19 Vaccine Finder

Website link: http://ec2-3-108-58-222.ap-south-1.compute.amazonaws.com:8080

![GitHub release (latest by date)](https://img.shields.io/github/v/release/AkhileshThite/COVID-19-VaccineFinder) ![GitHub issues](https://img.shields.io/github/issues/AkhileshThite/COVID-19-VaccineFinder) ![GitHub pull requests](https://img.shields.io/github/issues-pr/AkhileshThite/COVID-19-VaccineFinder) ![Merged Pull Requests](https://img.shields.io/github/issues-search/AkhileshThite/COVID-19-VaccineFinder?label=merged%20PRs&query=is%3Apr+is%3Aclosed+is%3Amerged&color=purple)

<img align="center" src="https://github.com/AkhileshThite/COVID-19-VaccineFinder/blob/main/static/images/ipad.png" width="400" height="400"></img> <img align="center" src="https://github.com/AkhileshThite/COVID-19-VaccineFinder/blob/main/static/images/ipad2.png" width="400" height="400"></img>

➔ COVID-19 Vaccine Finder website to check the available slots for COVID-19 Vaccination Centers from [coWIN API](https://apisetu.gov.in/public/marketplace/api/cowin) in India. With this website, you'll quickly be able to register for vaccines by checking the most updated information from coWIN API like center, fee, availability of both dose 1 and dose 2, age limit, vaccine type, and time slots.<br>
➔ **Problem:-** coWIN API is blocking the request outside of India (403 forbidden error), before AWS EC2 instance I deployed this web app on GCP and Heroku but both gave me same 403 forbidden error as these servers are outside of India. If it's not deployed then no one can use it.<br>
➔ **Solved:-** It's working perfectly fine on AWS EC2 instance ap-south-1 (Indian server). 
Now anyone can get all the information from this website and register for vaccines faster without running any script. 


## ➔ Technical Details
**Languages:**
```Python3, HTML5, CSS3, JavaScript```

**Frameworks:** 
```Flask```

**Platforms:** 
```AWS EC2 instance (working), GCP, Heroku```

**Database:**
```Firebase```


## ➔ Running the project
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


## ➔ Contribute
I highly encourage you to raise issues & PRs for bugs & new features.

| [Git Commands](docs/git-commands.md) | [Code of Conduct](docs/code_of_conduct.md)
| ------------- | ------------- |


## ➔ License ⚖️
[MIT license](https://github.com/AkhileshThite/COVID-19-VaccineFinder/blob/main/LICENSE) 

## ➔ Current Contributors

<a href="https://github.com/akhileshthite/COVID-19-VaccineFinder/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=akhileshthite/COVID-19-VaccineFinder?width=890&button=false" />
</a>

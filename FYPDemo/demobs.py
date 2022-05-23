import requests
from bs4 import BeautifulSoup
import pandas as pd
import re
import ssl
import csv

ssl._create_default_https_context = ssl._create_unverified_context

# Scrape Main Faculty
URL = 'https://www.utp.edu.my/Pages/Academic/Faculty.aspx'
page = requests.get(URL, verify=False).text

# parse html content
soup = BeautifulSoup(page, "html.parser")

# find faculty url to continue scraping
# scrap all link in website
all_link = []
for link in soup.find_all('a', attrs={'href': re.compile("^https://")}):
    all_link.append(link.get('href'))

# filter link that only include faculty
faculty_link = []
for link in all_link:
    if "Faculty-of" in link:
        faculty_link.append(link)
    if "Faculty-Of" in link:
        faculty_link.append(link)
# -------------------------------------------------------------------
# remain unique value
faculty_url = pd.Series(faculty_link)
faculty_unique_URL = pd.unique(faculty_url)

main_faculty = []
faculty_dept = []
dept_course = []
# scrap department in each faculty website
# REMEMBER CHANGE BACK TO FACULTY_UNIQUE_URL!!!!!!
for facultyurl in faculty_unique_URL:
# for facultyurl in URL:
    # scrap faculty website
    faculty = requests.get(facultyurl, verify=False).text
    # parse faculty html content
    facultysoup = BeautifulSoup(faculty, "html.parser")
    # scrap every faculty department in faculty website
    faculties = facultysoup.find("div", attrs={"class": "ms-rtestate-field"})
    for mainfaculty in faculties.find("section", attrs={"class": "sec-adm-title"}):
        main_faculty.append(mainfaculty.getText("sec-adm-title").strip())
    for faculty in faculties.find_all("a"):
        faculty_dept.append('https://www.utp.edu.my' + faculty.get("href"))
# ------------------------------------------------------------------------------------------
    department_URL = pd.Series(faculty_dept)
    department_unique_URL = pd.unique(department_URL)

    # scrap courses in each department website
    for depturl in department_unique_URL:
        # for depturl in dept_URL:
        # scrap department website
        dept = requests.get(depturl, verify=False).text
        # parse department html content
        deptsoup = BeautifulSoup(dept, "html.parser")
        # scrap every faculty department in faculty website
        departments = deptsoup.find("div", attrs={'class': "ms-rtestate-field"})
        for department in departments.find_all('a'):
            dept_course.append(department.getText("href").replace('\nhref', ' ').strip())

print(main_faculty)
print(faculty_dept)
print(dept_course)

faculty_df = pd.DataFrame(main_faculty, columns=['Faculty'])
deptprog_df = pd.DataFrame(dept_course, columns=['Department & Course'])
dept_df = deptprog_df[deptprog_df['Department & Course'].str.contains('Department')]
dept_df = dept_df.rename(columns={'Department & Course': 'Department'})
prog_df = deptprog_df[~deptprog_df['Department & Course'].str.contains('Department')]
prog_df = prog_df.rename(columns={'Department & Course': 'Course'})
full_df = pd.concat([faculty_df, dept_df, prog_df], axis=1)

full_df.to_csv('UTPprogramme.csv',na_rep='-', index=False)
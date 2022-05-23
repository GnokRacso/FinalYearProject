import os
import selenium
from selenium import webdriver
import time
from PIL import Image
import io
import requests
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import ElementClickInterceptedException
import pandas as pd

driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get('https://utar.edu.my/Academic-Faculties-Institutes-and-Centres.php')

driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(5)#sleep_between_interactions

lecturer = driver.find_elements_by_xpath("//a[contains(@class,'isLinks isWebsite')]")
totalResults=len(lecturer)
print(totalResults)

faculty = []
for i in range(totalResults):
        a = lecturer[i].text
        txt = a.split("\n")
        faculty.append(txt)

print(faculty)

df = pd.DataFrame(faculty,columns =['Faculty'])
df_result = df.style.set_properties(**{'text-align': 'left'})

df.to_csv("University_Tunku_Abdul_Rahman.csv", index = False)
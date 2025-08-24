import pandas as pd 

a={
    "names" : ["Amit","ABC","XYZ"],
    "AGE" : [21,22,23,24,25]
}
df=pd.DataFrame(a)
print("students Details" , df)
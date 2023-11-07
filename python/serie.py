# Manipulación y tratamiento de Datos
import numpy as np
import pandas as pd


#importar consulta
from controllers.query import consultas, curs
from utils.cq import query4

# Visualización de datos
import plotly.express as px
import matplotlib.pyplot as plt
#matplotlib inline
plt.style.use('ggplot')

# Modelación Arima
from statsmodels.tsa.statespace.sarimax import SARIMAX
from statsmodels.graphics.tsaplots import plot_acf,plot_pacf
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.stattools import adfuller

# Métrica de Evaluación
from sklearn.metrics import mean_squared_error
from statsmodels.tools.eval_measures import rmse
from sklearn import metrics

# No presentar advertencias
import warnings
warnings.filterwarnings("ignore")

#Variables globales
date = []
total = []
pvalue = 0

#consultas
consultas(query4)
for row in curs:
    date.append("{year}".format(**row) + "-" + "{month}".format(**row) + "-" + "1")
    total.append(float("{total}".format(**row)))

#Asignamos a una tabla pandas los valores correspondientes
df = np.column_stack([date, total])
df = pd.DataFrame(df)
#print(df)

#Convertir a formato datatime
from datetime import datetime
df[0] = pd.to_datetime(df[0])
df[1] = pd.to_numeric(df[1])


df = df.set_index(0)
#print(df.head())

fig = px.line(df, x=df.index, y=1,template = "plotly_dark",
              title="Ganancias por mes")
fig.show()

#Prueba Dickey_Fuller
def Prueba_Dickey_Fuller(series , column_name):
    print (f'Resultados de la prueba de Dickey-Fuller para columna: {column_name}')
    dftest = adfuller(series, autolag='AIC')
    dfoutput = pd.Series(dftest[0:4], index=['Test Statistic','p-value','No Lags Used','Número de observaciones utilizadas'])
    for key,value in dftest[4].items():
       dfoutput['Critical Value (%s)'%key] = value
    print (dfoutput)
    return dftest[1]
    '''if dftest[1] <= 0.05:
        print("Conclusion:====>")
        print("Rechazar la hipótesis nula")
        print("Los datos son estacionarios")
    else:
        print("Conclusion:====>")
        print("No se puede rechazar la hipótesis nula")
        print("Los datos no son estacionarios")'''

##Mandamos a llamar el metodo de dickey_fuller
diferencia = 0 
pvalue = Prueba_Dickey_Fuller(df[1],"1")
print(pvalue)
while(pvalue > 0.05):
    
    df1=df.copy()
    # Take first difference
    df1['total_diff'] = df[1].diff()

    # Remove the first data point
    df1.dropna(inplace=True)
    diferencia = 1
    pvalue = Prueba_Dickey_Fuller(df1["total_diff"],"total_diff")
    # Take a look at the head of the dataset
    #df1.head()
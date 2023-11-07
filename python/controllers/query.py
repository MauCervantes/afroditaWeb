from db.db import connect

curs = connect.cursor(dictionary=True)
#elemento cursor

#Consulta global
def consultas (query = ""):
    curs.execute(query)

#Consulta especifica al proyecto

def grupBy(idp):
    query = "select id_compra from venta where id_producto = " + idp + " group by id_compra"
    curs.execute(query)


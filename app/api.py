from flask import Flask
import pyodbc
app = Flask(__name__)


@app.route('/api/petmas')
def getUrl():
    # Connect to sql server
    server = 'tcp: petmas-server.database.windows.net, 1433'
    database = 'petmasdb'
    username = '<REDACTED>'
    password = '<REDACTED>'
    conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                          server+';DATABASE='+database+';Encrypt=yes;UID='+username+';PWD=' + password)

    cursor = conn.cursor()
    # q = (''' SELECT url FROM links''')
    result = cursor.execute(' SELECT url FROM links')
    return str(result.fetchall())


app.run()

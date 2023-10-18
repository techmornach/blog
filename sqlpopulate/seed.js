const mysql = require('mysql')

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11649884',
  password: 'LwgsHhNfp4',
  database: 'sql11649884',
  port: 3306,
})

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack)
    return
  }
  console.log('Connected to the database')

  // SQL query to create the guestbook table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS guestbook (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      body TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_by INT,
      updated_at TIMESTAMP
    )
  `

  // Execute the SQL query to create the table
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating table: ' + err.message)
    } else {
      console.log('Table created successfully')
    }

    // Close the database connection after creating the table
    connection.end((err) => {
      if (err) {
        console.error('Error closing database connection: ' + err.message)
      } else {
        console.log('Database connection closed')
      }
    })
  })
})

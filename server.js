// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Verificar que el usuario exista en la base de datos
//   connection.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
//     if (err) return res.status(500).json({ message: 'Error en el servidor' });

//     if (results.length === 0) {
//       return res.status(401).json({ message: 'Usuario no encontrado' });
//     }

//     const user = results[0];

//     // Aquí debes verificar la contraseña, por ejemplo con bcrypt si está encriptada
//     if (password === user.password) {
//       res.json({ message: 'Login exitoso' });
//     } else {
//       res.status(401).json({ message: 'Contraseña incorrecta' });
//     }
//   });
// });
import express from 'express'; // O require('express') si no usas módulos ES6

const app = express();
const port = 5000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Aquí deberías manejar la lógica de autenticación
  res.send({ message: 'Login exitoso' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

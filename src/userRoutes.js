import express from 'express';
const router = express.Router();

// Ejemplo de ruta GET para obtener usuarios
router.get('/users', (req, res) => {
  // Aquí podrías realizar una consulta a la base de datos para obtener usuarios
  res.json({ message: 'List of users' });
});

// Ejemplo de ruta POST para crear un usuario
router.post('/users', (req, res) => {
  const { email, password } = req.body;
  // Aquí podrías agregar lógica para crear un nuevo usuario en la base de datos
  res.json({ message: 'User created', email, password });
});

// Puedes agregar más rutas según tus necesidades

export default router;

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

/**
 * Función para registrar un nuevo usuario
 * @param {string} email - Correo electrónico del usuario
 * @param {string} password - Contraseña del usuario
 */
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Función para iniciar sesión
 * @param {string} email - Correo electrónico del usuario
 * @param {string} password - Contraseña del usuario
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Función para cerrar sesión
 */
export const logoutUser = async () => {
  const auth = getAuth();
  await auth.signOut();
};
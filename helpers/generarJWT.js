import jwt from 'jsonwebtoken'


//Expirar información
const generarJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    } );

}

export default generarJWT;
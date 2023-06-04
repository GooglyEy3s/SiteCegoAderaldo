import { Container, Box, Typography, TextField, Button} from "@mui/material"
import casa from '../../midia/casa-de-saberes.jpg'
import volta from "../../midia/volta.png"
import { Link } from "react-router-dom"
const Signin = () => {

    return (
        <>
            <div className="login">
                <div className="conteudo">
                <div className="titulo">
                    <Link to={'/'}> <img src={volta} alt="" /> </Link>
                    <h1>Login</h1>
                </div>
                
                <Container maxWidth="md">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            // alignItems: "center",
                            mt: 10
                        }}
                    >
                        <TextField
                            required
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Endereço de e-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            required
                            margin="normal"
                            fullWidth
                            name="senha"
                            label="Senha"
                            type="password"
                            id="senha"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, color: "white" }}
                        >
                            Sign In
                        </Button>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                            width="100%"
                        >
                            <Link
                                href="#"
                                underline="none"
                                className="link"
                                fontSize={"15px"}
                            >
                                Esqueceu a senha?
                            </Link>

                            <Link
                                href="#"
                                underline="none"
                                className="link"
                                fontSize={"15px"}
                            >
                                Não tem conta? Cadastre-se.
                            </Link>
                        </Box>
                    </Box>
                </Container>
                </div>
                
                <div className="image">
                    <img src={casa} alt="" />
                </div>
                
            </div>

        </>
    )

}

export default Signin
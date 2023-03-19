import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "../../util/axios";
import { useAuth } from "../../conext/AurhContexe";
import { Navigate } from "react-router-dom";

function Login() {
    const { user, login } = useAuth();

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [ok, setOk] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                userName,
                password,
            };
            const res = await axios.post("/login", data);
            if (res.status === 200) {
                setOk(true);
                login(res.data);
            }

            e.target.reset();
        } catch (error) {
            setOk(false);
            console.log(error);
        }
    };
    if (user) {
        return <Navigate to="/admin/AddSales" />;
    }
    console.log(user);
    return (
        <Box maxWidth={500} margin={"50px auto"}>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    mb: 5,
                    maxWidth: 600,
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                تسجيل الدخول
            </Typography>

            {ok !== null && !ok && (
                <Alert severity="error">
                    حدث مشكلة اثناء ارسال الطلب برجاء المحاولة مره اخرى بعد قليل
                </Alert>
            )}
            <Box component="form" gap={20} onSubmit={submitHandler}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    اسم المستخدم:
                </Typography>
                <TextField
                    fullWidth
                    name="userName"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#EEEEEE",
                    }}
                />
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    كلمة المرور:
                </Typography>
                <TextField
                    fullWidth
                    name="password"
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#EEEEEE",
                    }}
                />

                <br />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="secondary"
                    size="large"
                    sx={{
                        mt: 1,
                        mb: 1,
                        color: "white",
                        fontSize: 18,
                    }}
                >
                    تسجيل الدخول
                </Button>
            </Box>
        </Box>
    );
}

export default Login;

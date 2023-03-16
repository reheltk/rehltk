import React, { useState } from "react";
import {
    Alert,
    Box,
    Button,
    TextField,
    Typography,
    FormControl,
    MenuItem,
} from "@mui/material";
import axios from "../../util/axios";
import FlotingSittingButton from "../../components/FlotingSittingButton";
import { useAuth } from "../../conext/AurhContexe";
import { Navigate } from "react-router-dom";

export default function AddAdmin() {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [role, setRole] = useState(null);
    const [ok, setOk] = useState(null);
    const { user, login } = useAuth();

    if (!user || user.role !== "admin") {
        return <Navigate to="/admin/AddSales" />;
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                userName,
                password,
                role,
            };
            const res = await axios.post("/signUp", data);
            if (res.status === 200) {
                setOk(true);
            }
            e.target.reset();
        } catch (error) {
            setOk(false);
        }
    };
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
                اضافة ادمن
            </Typography>
            {ok !== null && ok && (
                <Alert severity="success">تم الاضافة بنجاح!</Alert>
            )}

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
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    النوع
                </Typography>
                <FormControl required fullWidth>
                    <TextField
                        fullWidth
                        select
                        name="role"
                        required
                        onChange={(e) => setRole(e.target.value)}
                        sx={{
                            mb: 1,
                            backgroundColor: "#EEEEEE",
                        }}
                    >
                        <MenuItem value="admin">مدير</MenuItem>
                        <MenuItem value="employee">موظف</MenuItem>
                    </TextField>
                </FormControl>

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
                    اضافة ادمن
                </Button>
            </Box>
            <FlotingSittingButton />
        </Box>
    );
}

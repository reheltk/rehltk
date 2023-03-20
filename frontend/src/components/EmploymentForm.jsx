import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Alert,
} from "@mui/material";
import axios from "../util/axios";
import getCurrentData from "../util/getCurrentData";

const citys = [
    "الرياض",
    "جدة",
    "الدمام ",
    "الخبر",
    "مكة",
    "المدينة",
    "تابوك",
    "حائل",
    "الطائف",
    "اخري",
];

function EmploymentForm() {
    const [phone, setPhone] = useState(null);
    const [city, setCity] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [hasExpr, setHasExpr] = useState(null);
    const [ok, setOk] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                phone,
                city,
                name,
                age,
                hasExpr,
                date: getCurrentData(),
                time: new Date().toLocaleTimeString(),
            };
            const res = await axios.post("/addEmployee", data);
            if (res.status === 200) setOk(true);
            e.target.reset();
        } catch (error) {
            setOk(false);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <Box>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    mb: 5,
                    fontWeight: "bold",
                    maxWidth: 600,
                }}
            >
                يرجى تعبئة البيانات التالية:
            </Typography>

            {ok !== null && ok && (
                <Alert severity="success">تم ارسال الطلب بنجاح!</Alert>
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
                    الإسم ثلاثي
                </Typography>
                <TextField
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
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
                    العمر
                </Typography>
                <TextField
                    type={"number"}
                    fullWidth
                    onChange={(e) => setAge(e.target.value)}
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
                    الجوال:
                </Typography>
                <TextField
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
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
                    مدينتك:
                </Typography>
                <FormControl required fullWidth>
                    <TextField
                        fullWidth
                        select
                        onChange={(e) => setCity(e.target.value)}
                        required
                        sx={{
                            mb: 1,
                            backgroundColor: "#EEEEEE",
                        }}
                    >
                        {citys.map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>

                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    هل لديك خبرة في مجال السياحة والسفر ؟
                </Typography>
                <FormControl
                    color="secondary"
                    onChange={(e) => setHasExpr(e.target.value)}
                    required
                >
                    <RadioGroup row name="tekt">
                        <FormControlLabel
                            value="نعم"
                            control={<Radio color="secondary" />}
                            label="نعم"
                        />
                        <FormControlLabel
                            value="لا"
                            control={<Radio color="secondary" />}
                            label="لا"
                        />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <FormLabel>
                    *جميع الأسعار في الموقع تشمل قيمة الضريبة المضافة
                </FormLabel>

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
                    }}
                >
                    ارسال
                </Button>
            </Box>
        </Box>
    );
}

export default EmploymentForm;

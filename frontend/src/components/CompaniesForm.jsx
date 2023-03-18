import React, { useState } from "react";
import {
    Box,
    Button,
    MenuItem,
    TextField,
    Typography,
    Alert,
    FormControl,
} from "@mui/material";
import axios from "../util/axios";

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

function CompaniesForm() {
    const [personName, setPersonName] = useState(null);
    const [coumpanyName, setCoumpanyName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [city, setCity] = useState(null);
    const [desc, setDesc] = useState(null);
    const [ok, setOk] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                phone,
                personName,
                coumpanyName,
                email,
                city,
                desc,
                date: new Date().toLocaleString().split(",")[0],
                time: new Date().toLocaleTimeString(),
            };
            const res = await axios.post("/addCoumpanyOrder", data);
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
                    اسمك الكريم
                </Typography>
                <TextField
                    fullWidth
                    onChange={(e) => setPersonName(e.target.value)}
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
                    اسم الشركة
                </Typography>
                <TextField
                    fullWidth
                    required
                    onChange={(e) => setCoumpanyName(e.target.value)}
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
                    required
                    onChange={(e) => setPhone(e.target.value)}
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
                    البريد الالكتروني:
                </Typography>
                <TextField
                    type={"emile"}
                    fullWidth
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                    المدينة:
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
                    وصف الطلب
                </Typography>
                <TextField
                    fullWidth
                    onChange={(e) => setDesc(e.target.value)}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#EEEEEE",
                    }}
                />
                <br />
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

export default CompaniesForm;

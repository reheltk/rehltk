import { useState } from "react";
import {
    Box,
    Button,
    FormLabel,
    TextField,
    Typography,
    Alert,
} from "@mui/material";
import axios from "../util/axios";
function ComplaintForm() {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [desc, setDesc] = useState(null);
    const [ok, setOk] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                phone,
                name,
                desc,

                date: new Date().toLocaleString().split(",")[0],
            };
            const res = await axios.post("/addComplaint", data);
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
                يرجى تزويدنا بالبيانات التالية حتى نتمكن من خدمتك:
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
                    الإسم ثلاثي:
                </Typography>
                <TextField
                    fullWidth
                    required
                    onChange={(e) => setName(e.target.value)}
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
                    وصف الشكوى:
                </Typography>
                <TextField
                    fullWidth
                    required
                    onChange={(e) => setDesc(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#EEEEEE",
                    }}
                />

                <br />
                <br />
                <FormLabel color="warning">
                    *جميع الشكاوى تخضع لرقابة مباشرة من الإدارة العامة
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

export default ComplaintForm;

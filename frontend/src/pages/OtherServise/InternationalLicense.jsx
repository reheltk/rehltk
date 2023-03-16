import { Box, Container, Typography } from "@mui/material";
import TravlForm from "../../components/TravlForm";

export default function InternationalLicense() {
    return (
        <Box>
            <Box
                component="img"
                src="/images/driving-license.jpg"
                alt=""
                sx={{
                    height: { xs: 250, md: 550 },
                    width: "100%",
                    objectFit: "cover",
                }}
            />
            <Container
                sx={{
                    mt: 4,
                    mb: 4,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    رخصة القيادة الدولية
                    <br />
                    <br />
                    هي وثيقة دولية تم تشريعها من قبل الأمم المتحدة طبقا
                    للاتفاقيات الدولية الخاصة بتنظيم السير على الطرق وهي تسمح
                    لحاملها القيادة خارج دولته المقيم فيها حيث أنها تصدر بناءً
                    على رخصة القيادة التي تؤهل حاملها القيادة، وهي غير صالحة
                    للقيادة في السعودية .
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    متطلبات الحصول على رخصة القيادة الدولية
                </Typography>

                <ul style={{ fontSize: "20px" }}>
                    <li>صورة جواز السفر.</li>
                    <li>
                        صورة رخصة القيادة ( من أي دولة في العالم ) سارية
                        المفعول.
                    </li>
                    <li>1 صور شخصية .</li>

                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            mt: 2,
                            typography: { xs: "h6", md: "h6" },
                        }}
                    >
                        ملاحظة
                    </Typography>
                    <li>إمكانية ارسال كل الأوراق على الواتس اب.</li>
                    <li>
                        (اصدار رخصة القيادة الدولية حسب فئة ونوع رخصة القيادة )
                    </li>
                </ul>

                <TravlForm />
            </Container>
        </Box>
    );
}

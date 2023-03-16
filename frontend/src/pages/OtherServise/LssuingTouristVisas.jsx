import { Box, Container, Typography } from "@mui/material";
import TravlForm from "../../components/TravlForm";

export default function LssuingTouristVisas() {
    return (
        <Box>
            <Box
                component="img"
                src="/images/download.jpg"
                alt=""
                sx={{
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
                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    إصدار التاشيرات السياحية
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تاشيرة الشنجن
                </Typography>
                <Box
                    component="img"
                    src="/images/changen.jpg"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>

                <ul style={{ fontSize: "18px" }}>
                    <li>
                        كشف حساب انجليزي مختوم من البنك اخر ثلاث شهور يوجد به
                        رصيد لا يقل عن 20 الف ريال .
                    </li>
                    <li>
                        خطاب تعريف من العمل باللغة الإنجليزية موضح بة الراتب
                        والمسمي الوظيفي وتاريخ بداية العمل ( مصدق من الغرفة
                        التجارية اذا كان العمل فى القطاع الخاص ) .
                    </li>
                    <li>
                        عدد 2 صورة شخصية خلفية بيضاء مقاس 6x4 مكشوف الرأس للرجال
                        ( بالنسبة للنساء معظم الوجة ظاهر ) ملاحظة : خاص بالمانيا
                        الصور مقاس 6x4 و الزووم 90 .
                    </li>
                    <li>
                        تامين طبي ( اذا وجد خطاب من شركة التامين موجة الى
                        السفارة ) او تامين سفر . ( خاص بالمانيا تامين كورونا لكل
                        المسافرين )
                    </li>
                    <li>
                        صورة الهوية الوطنية وصوره كارت العائلة و صور من
                        التاشيرات السابقة ان وجد . ( يتم ترجمة الاحوال وكرت
                        العائلة لمعظم السفارات )
                    </li>
                    <li>الجواز الأصل صالح لمدة 6 اشهر من تاريخ السفر .</li>
                    <li>
                        بالنسبة للجواز الدبلوماسي و الخاص ( مطلوب توصية من
                        الخارجية ) و لا يتطلب كشف حساب .
                    </li>
                    <li>
                        لغير السعودين : كل الطلبات السابق ذكرها + صورة من الخروج
                        والعودة إنجليزي وكشف الحساب اخر 6 شهور بدلا من 3 شهور.
                    </li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تأشيرة الامريكية
                </Typography>
                <Box
                    component="img"
                    src="/images/us.png"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>الجواز الأصل صالح لمدة 7 اشهر علي الأقل</li>
                    <li>
                        2 صورة شخصية حديثة خلفية بيضاء مقاس 5 في 5 مكشوف الرأس
                        للرجال{" "}
                    </li>
                    <li>
                        خطاب تعريف من العمل باللغة الإنجليزية موضح بة الراتب
                        والمسمي الوظيفي وتاريخ بداية العمل .{" "}
                    </li>
                    <li>
                        كشف حساب بنكي لاخر 3 شهور بالانجليزيه ويكون فيه رصيد لا
                        يقل عن 15 الف ريال.
                    </li>
                    <li>صورة الهوية الوطنية وصوره كارت العائلة .</li>
                    <li>الجواز الأصل صالح لمدة 6 اشهر من تاريخ السفر .</li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تأشيرة البريطانية
                </Typography>
                <Box
                    component="img"
                    src="/images/eng.png"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>
                        صورة جواز السفر به صلاحية اكثر من 7 شهور ملحوظة هامة
                    </li>
                    <li>
                        يلزم التواجد لاخد البصمة في كل مرة يتم فيها استخراج
                        التاشيرة
                    </li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تأشيرة البوسنية
                </Typography>
                <Box
                    component="img"
                    src="/images/bosna.png"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>الجواز الأصل صالح لمدة 7 اشهر علي الأقل</li>
                    <li>
                        2 صورة شخصية حديثة خلفية بيضاء مقاس 3.5 في 4.5 مكشوف
                        الرأس للرجال.
                    </li>
                    <li>
                        خطاب تعريف من العمل باللغة الإنجليزية او العربية موضح بة
                        الراتب والمسمي الوظيفي او كشف حساب بنكي لاخر 3 شهور
                        بالانجليزيه.{" "}
                    </li>
                    <li>صورة الهوية الوطنية وصوره كارت العائلة .</li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تاشيرة دبي ( غير السعودين )
                </Typography>
                <Box
                    component="img"
                    src="/images/bosna.png"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>صورة الجواز ملونه .</li>
                    <li>صورة شخصية .</li>
                    <li>صورة الاقامة ملونه .</li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تاشيرة روسيا
                </Typography>
                <Box
                    component="img"
                    src="/images/rosiaa.jpg"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>
                        عدد 2 صورة شخصية خلفية بيضاء مقاس 6x4 مكشوف الرأس للرجال
                        .
                    </li>
                    <li>الجواز الأصل صالح لمدة 6 اشهر من تاريخ السفر .</li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تاشيرة البرازيل
                </Typography>
                <Box
                    component="img"
                    src="/images/brazil.svg_.png"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>
                        كشف حساب انجليزي مختوم من البنك اخر ثلاث شهور يوجد به
                        رصيد لا يقل عن 20 الف ريال .
                    </li>
                    <li>
                        خطاب تعريف من العمل باللغة الإنجليزية موضح بة الراتب
                        والمسمي الوظيفي وتاريخ بداية العمل .
                    </li>
                    <li>
                        عدد 2 صورة شخصية خلفية بيضاء مقاس 6x4 مكشوف الرأس للرجال
                        .
                    </li>
                    <li>
                        صورة الهوية الوطنية وصوره كارت العائلة و صور من
                        التاشيرات السابقة ان وجد .
                    </li>
                    <li>الجواز الأصل صالح لمدة 6 اشهر من تاريخ السفر .</li>
                </ul>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    تاشيرة سنغافورة
                </Typography>
                <Box
                    component="img"
                    src="/images/Singapore.svg_.png"
                    alt=""
                    sx={{
                        width: { md: "600px", xs: "100%" },
                        height: "300px",
                        objectFit: "fill",
                        mt: 3,
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        mb: 1,
                        mt: 1,

                        typography: { xs: "h5", md: "h4" },
                    }}
                >
                    الاوراق المطلوبة
                </Typography>
                <ul style={{ fontSize: "18px" }}>
                    <li>
                        خطاب تعريف من العمل باللغة الإنجليزية موضح بة الراتب
                        والمسمي الوظيفي وتاريخ بداية العمل .
                    </li>
                    <li>
                        عدد 1 صورة شخصية خلفية بيضاء مقاس 6x4 مكشوف الرأس للرجال
                        .
                    </li>
                    <li>
                        عدد 2 صورة شخصية خلفية بيضاء مقاس 6x4 مكشوف الرأس للرجال
                        .
                    </li>
                    <li>صورة الهوية الوطنية .</li>
                    <li>
                        صورة الجواز صالح لمدة 6 اشهر من تاريخ السفر . ترسل صور
                        من المستندات على الوتس اب
                    </li>
                </ul>

                <TravlForm />
            </Container>
        </Box>
    );
}

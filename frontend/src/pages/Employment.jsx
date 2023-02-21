import { Box } from "@mui/material";
import Header1 from "../components/Header1";
import EmploymentForm from "../components/EmploymentForm";
import { Container } from "@mui/system";

function Employment() {
    return (
        <Box>
            <Header1
                title="توظيف"
                desc="تقديم طلب عمل فى اقلاع للسفر والسياحة"
            />
            <Container
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            >
                <EmploymentForm />
            </Container>
        </Box>
    );
}

export default Employment;

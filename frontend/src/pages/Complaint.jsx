import { Box } from "@mui/material";
import Header1 from "../components/Header1";
import ComplaintForm from "../components/ComplaintForm";
import { Container } from "@mui/system";

function Complaint() {
    return (
        <Box>
            <Header1 title="الشكاوى" desc="نعتذر في حالة حدوث مشكلة" />
            <Container
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            >
                <ComplaintForm />
            </Container>
        </Box>
    );
}

export default Complaint;

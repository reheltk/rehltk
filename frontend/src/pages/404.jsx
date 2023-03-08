import { Box } from "@mui/material";
import Header1 from "../components/Header1";

function NotFound() {
    return (
        <Box>
            <Header1
                title="404"
                desc="نعتذر لم نتمكن من الوصول الى الصفحة التي تبحث عنها"
            />
        </Box>
    );
}

export default NotFound;

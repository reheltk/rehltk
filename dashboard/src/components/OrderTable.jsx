import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "الاسم" },
    { field: "phone", headerName: "الجوال" },
    { field: "city", headerName: "المدينة" },
    {
        field: "country",
        headerName: "البلد",
    },
    {
        field: "bookingFlight",
        headerName: "حاجز طيران",
    },

    {
        field: "status",
        headerName: "الحالة",
    },
    {
        field: "comments",
        headerName: "ملاحظات",
    },
    {
        field: "actions",
        headerName: "اكشن",
        headerAlign: "center",
        type: "actions",

        getActions: (params) => [
            <GridActionsCellItem icon={<EditIcon />} />,
            <GridActionsCellItem icon={<DeleteIcon />} />,
        ],
    },
];

const rows = [
    { id: 1, name: "Snow", phone: 35 },
    { id: 2, name: "Lannister", phone: 42 },
    { id: 3, name: "Lannister", phone: 45 },
    { id: 4, name: "Stark", phone: 16 },
    // { id: 5, name: "Targaryen", phone: null },
    // { id: 6, name: "Melisandre", phone: 150 },
    // { id: 7, name: "Clifford", phone: 44 },
    // { id: 8, name: "Frances", phone: 36 },
    // { id: 9, name: "Roxie", phone: 65 },
];

export default function OrderTable() {
    return (
        <div style={{ height: "90%", width: "100%", backgroundColor: "white" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{
                    borderRadius: 2,
                    fontSize: 18,
                }}
            />
        </div>
    );
}

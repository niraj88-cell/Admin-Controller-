
import { DataGrid } from '@mui/x-data-grid';
import './Datatable.scss';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
              <Link to="/users/test" style={{textDecoration:"none"}}>
            <div className="viewButton">View</div>
            </Link>

            <div className="deleteButton">Delete</div>
          </div>
        );
      }
    }
  ];

  const handleStateChange = (state) => {
    console.log("DataGrid state:", state);
    console.log("Rows data inside DataGrid:", state.rows);
  };

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className="link">
        Add New
        </Link>
        </div>
      <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            page: 0,
            pageSize: 5,
          },
        }}
        pageSizeOptions={[5, 10, 100]}
        checkboxSelection
        onStateChange={handleStateChange}  // Add this line
      />
    </div>
  );
};

export default Datatable;

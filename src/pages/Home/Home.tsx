import React, { useState } from 'react';
export interface HomeProps { }
import Box from '@mui/material/Box';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';
import { Person } from '@/models';
import { People } from '@/data/People';
const pageSize = 5;

const Home: React.FC<HomeProps> = () =>
{
const [selectedPeople, setSelectedPeople] = useState<Person[]>([])

const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    // dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

const colums = [
	{
		field: 'actions',
		type: 'actions',
		sortable: false,
		headerName: '',
		width: 50,
		renderCell: (params: GridRenderCellParams) => (
			<>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
		)
	},
	{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	},
	{
		field: 'category',
		headerName: 'Categories',
		flex: 1,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	},
	{
		field: 'company',
		headerName: 'Company',
		flex: 1,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	},
	{
		field: 'levelOfHappiness',
		headerName: 'Level of happiness',
		flex: 1,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	}
];


	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				sx={{color: 'white'}}
				rows={People}
				columns={colums}
				disableColumnSelector
				disableSelectionOnClick
				autoHeight
				pageSize={pageSize}
				rowsPerPageOptions={[pageSize]}
				getRowId={(row: any) => row.id}
			/>
		</Box>
	);
};

export default Home;

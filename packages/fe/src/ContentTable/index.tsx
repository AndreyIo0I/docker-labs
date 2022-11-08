import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Folder from '@mui/icons-material/Folder'
import Note from '@mui/icons-material/Note'

export interface ContentTableData {
	type: 'folder'|'file';
	id: string;
	name: string;
	link: string;
	modified: string;
}

interface ContentTableProps {
	data: ContentTableData[];
}

export default function ContentTable(props: ContentTableProps) {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Type</TableCell>
					<TableCell>Name</TableCell>
					<TableCell align="center">Modified</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.data.map(row => (
					<TableRow key={row.id}>
						<TableCell>
							{row.type === 'folder'
								? <Folder/>
								: <Note/>
							}
						</TableCell>
						<TableCell>
							{row.name}
						</TableCell>
						<TableCell align="center">
							{row.modified}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
